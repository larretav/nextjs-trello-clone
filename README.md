# Next.js & NextUI Boilerplate
Este es un proyecto base de Next y Next UI. Se ha modificado la versión original que genera NextUI CLI.
Adicionalmente se instaló React Icons.

## Ejecutar en desarrollo
1. Clonar repositorio.
2. Cambiar el origen Git.
2. Crear una copia del archivo ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias. Ejecutar:
  ```
  npm install
  ```
4. Levantar el proyecto:
  ```
  npm run dev
  ```


## Cambiar origen Git. Apuntar al proyecto real y no al boilerplate
1. Cambiar el origen del repositorio:
  ```
  git remote set-url origin <URL_del_nuevo_repositorio>
  ```
2. Subir al nuevo repositorio:
  ```
  git add .
  git commit -m "Primer commit"
  git branch -M main
  git push -u origin main
  ```