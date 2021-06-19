FROM node:12.18.1

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 2000
CMD [ "node", "main.js" ]

