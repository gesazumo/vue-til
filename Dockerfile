FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
ENV PORT=8080

RUN npm install
COPY . .
RUN npm run build-production

# production stage
FROM nginx:stable-alpine as production-stage


COPY prod.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]