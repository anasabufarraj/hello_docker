# Build image of node.js for JavaScript applications on top of Linux alpine operating system
FROM node:fermium-alpine3.14

# Define the base working directory. Otherwise, always use absolute paths.
WORKDIR /app

# Copy all files in the current location to the working directory '/app'
COPY . /app

# Execute the command when run the image, no need to be 'app/src/index.js'
#  since the base directory is set.
#CMD node /src/index.js