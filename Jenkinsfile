pipeline {
  agent any

  stages {
    stage('Build') { 
      steps {
        sh 'npm install'
        sh 'docker build -t test-nodejs-server .'
        sh 'docker tag test-nodejs-server $DOCKER_NODEJS_IMAGE'
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
          sh 'docker push $DOCKER_NODEJS_IMAGE'
        }
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
} 