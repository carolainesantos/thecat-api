# imagem base
FROM node:20 as build

# criar uma pasta 
WORKDIR /app 

COPY package*json ./

RUN npm install

COPY . .

RUN npm run build 

# inicializar 
FROM nginx:alpine 

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80


