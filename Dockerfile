FROM node:14.15.4-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["node", "server/index.js"]
