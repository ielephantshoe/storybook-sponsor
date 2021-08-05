FROM node:lts-alpine as base

WORKDIR /app
COPY package.json yarn.lock ./
COPY packages/api ./packages/api/

RUN yarn install --frozen-lockfile --prod

WORKDIR /app/packages/api

CMD ["yarn", "start"]
