# Bootcamp2.0 v0.1 - Lab App

## 1 - Crear los contenedores de Docker del proyecto.
sudo docker compose -f docker-compose.yaml up -d
cd ./app && npm run compose

## 2 - Entrar a app/ e instalar dependencias.
npm install

## 3 - Inicializar el servidor.
npm run start

## 4 - Utilizar la migración de la base de datos.
En otra terminal, ejecutar:

npm run migrations
