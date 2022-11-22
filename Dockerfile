FROM node:18.12.0-slim

WORKDIR /api

RUN apt-get update \
    && apt-get -y install procps

RUN npm i -g @nestjs/cli