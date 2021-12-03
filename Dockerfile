# Base image
FROM node:alpine

# Copy all files int he current location to /app
COPY . /app

# Define the base working directory (optional)
WORKDIR /app

# Execute the command, no need to write app/app.js, since the base directory is defined
CMD node app.js