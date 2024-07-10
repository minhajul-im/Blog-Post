FROM node:20.15.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 4137

CMD ["yarn", "preview"]
