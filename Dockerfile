FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
ENV PORT=3000

RUN npm install --production
COPY . .
RUN npm run build-production

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]