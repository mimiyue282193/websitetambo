FROM node:20-alpine AS builder

WORKDIR /usr/src/build

COPY . .

# build
RUN yarn install --frozen-lockfile --ignore-scripts
RUN yarn build

# remove devDependencies
RUN yarn install --production=true --frozen-lockfile --ignore-scripts

FROM nginx:1.25.3-alpine-slim

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY --from=builder /usr/src/build/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/templates/default.conf.template

EXPOSE 80