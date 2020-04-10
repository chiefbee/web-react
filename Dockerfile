# This is the production Dockerfile and has a multi step build process

# 1. building phase 

FROM node:alpine as building

WORKDIR './app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# 2. run phase 

FROM nginx 

COPY --from=building /app/build /usr/share/nginx/html