# MicroProjetoFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

npm -v 
6.14.17

node -v
v14.20.0

angular/cli
6.14.11

npm install -g typescript
npm install -g @angular/cli


criar um novo projeto

ng new micro-projeto-frontend

ng serve

ng generate component lista-uf-component
ng generate service servico/stados

npm install @angular-devkit/schematics @angular-devkit/schematics-cli @angular-devkit/core @schematics/angular
npm install @angular/material
npm install --save @angular/material @angular/animations @angular/cdk
npm install --save angular/material2-builds angular/cdk-builds


build para subir no docker

npm run build:prod

docker build -t alef123vinicius/micro-projeto-frontend .

docker run -d -it -p 4200:80/tcp --name micro-projeto-frontend alef123vinicius/micro-projeto-frontend:latest
