FROM node:fermium-alpine3.14
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV API_URL=https://api.example.com/
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
