# Base image on top of node.js on alpine operating system
FROM node:fermium-alpine3.14

# Define the base working directory (optional)
#WORKDIR /app

# Copy all files in the current location to the working directory /app
#COPY . /app

# Execute the command, no need to write app/app.js, since the base directory is defined
#CMD node src/index.js