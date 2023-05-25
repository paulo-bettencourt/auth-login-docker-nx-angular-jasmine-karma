FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

CMD ["npm", "run", "start"]