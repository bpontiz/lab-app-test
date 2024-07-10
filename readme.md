# Bootcamp2.0 v0.1 - Lab App

## 1 - Copiar las variables de .sample.env en .env y asignar los valores correspondientes.
sudo cp ./app/.sample.env ./app/.env

## 2 - Ejecutar la construcción (build) del proyecto.
sudo docker compose -f docker-compose.yaml up

## 3 - Visitar en el navegador:
http://localhost:8081

## 4 - Consumir la siguiente URI:
/users

Allí podrá verse la cantidad de usuarios guardados en la base de datos. Si no tiene usuarios, verás un par de corchetes "[]" indicando que la tabla Users está vacía.

Podrás agregar usuarios haciendo una petición de tipo POST a /users utilizando el coando curl en la terminal o usando Postman, para hacerlo podés seguir el siguiente modelo:
{
    "username": "ferbootcamp",
    "email": "ferbootcamp@gmail.com"
}