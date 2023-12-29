# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /nodejs_app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy only the necessary files, excluding the 'node_modules' directory
COPY . .

# Make port 3050 available to the world outside this container
EXPOSE 3990

# Define environment variable
ENV NODE_ENV=production
ENV PORT=3990

# Run the command
CMD ["npm", "start"]
