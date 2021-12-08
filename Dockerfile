FROM node:fermium-alpine3.14
WORKDIR /app
COPY . /app
#RUN npm install
ENV API_URL=https://api.example.com/
EXPOSE 3000
#CMD npm start


# DOC ---
# FROM: Build image of node.js for JavaScript applications on top of Linux alpine operating system
# WORKDIR: Define the base working directory. Otherwise, always use absolute paths.
# COPY: Copy all files in the current location to the working directory '/app'
# RUN: Run the following command once the image is built.
# ENV: Setting environment variables
# EXPOSE: Setup the port number the container listen to.
# CMD: Default command to run when running the image.
