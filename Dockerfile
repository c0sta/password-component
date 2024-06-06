FROM node:20.11-bullseye
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .