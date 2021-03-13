FROM node:12.21.0-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set strict-ssl false

RUN npm install 

COPY . .

RUN npm run build

FROM nginx:1.18.0-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT [ "nginx","-g", "daemon off;" ]
