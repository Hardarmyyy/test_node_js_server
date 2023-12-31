# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /nodejs_app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy only the necessary files
COPY . .

# Define build-time arguments for env variables
ARG PORT

# Set environment variables during build in order to allow data persistence in the container
ENV PORT=${PORT}

# Make port available to the world outside this container
EXPOSE ${PORT}

# Run the command
CMD ["node", "index.js"] 
