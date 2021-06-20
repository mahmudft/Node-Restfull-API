FROM node:14-alpine

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . /app
EXPOSE 2000
CMD [ "node", "main.js" ]

