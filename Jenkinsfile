pipeline {
  
  agent any

  stages {
  
    stage('Build') {
      steps {
        // Build Docker image with build-time arguments
        script {
          def dockerBuildArgs = "--build-arg PORT=${PORT}"
          
          sh "npm install"
          sh "docker build -t test-nodejs-server ${dockerBuildArgs} ."
          sh "docker tag test-nodejs-server ${DOCKER_NODEJS_IMAGE}"
        }
      }
    }

    stage('Test') {
      steps {
        echo 'Testing ........'
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_REGISTRY_CREDS}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
          sh "echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin docker.io"
          sh "docker push ${DOCKER_NODEJS_IMAGE}"
        }
      }
    }

    stage('Archive Artifacts') {
      steps {
        archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
      }
    }

  } 
  
  post {

    always {
      sh 'docker logout'
      
    }

    success {
      echo 'Build successful! Artifacts archived.'
    }

    failure {
      echo 'Build failed. Check the logs for details.'
    }

  }
  
} 