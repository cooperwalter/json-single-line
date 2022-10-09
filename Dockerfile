FROM node:18-alpine3.15 as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.23.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]