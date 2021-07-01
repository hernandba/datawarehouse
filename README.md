# Datawarehouse
**Proyecto Datawarehouse**

Aplicación web que permite gestionar información de contactos para campañas de marketing. Los usuarios de la plataforma pueden ver y editar el listado de contactos, compañías y ubicación (ciudad, pais, región). Sólo los usuarios administradores pueden crear usuarios nuevos.

## Requisitos

### Instalar mySQL
  - [Descargar mySQL](https://dev.mysql.com/downloads/mysql/)

### Instalar mySQL Workbench
  - [Descargar Nodejs](https://dev.mysql.com/downloads/workbench/)

### Instalar NodeJS
  - [Descargar Nodejs](https://nodejs.org/en/download/)

### Instalar Postman
  - [Descargar Postman](https://www.postman.com/product/api-client/)

## Despliegue
**1) Clonar proyecto**

* Clonar el repositorio desde github accediendo al link: [datawarehouse](https://github.com/hernandba/datawarehouse)
* Ó desde consola ejecutar:
```
git clone https://github.com/hernandba/datawarehouse
```

**2) Instalar dependencias**
```
npm install
```

**3) Crear base de datos**
* Abrir mySQL e iniciar los servicios del **Server**
* Abrir mySQL Workbench y crear una nueva **MySQL Connection** con información por defecto de localhost
* Generar la base de datos **datawarehouse** dentro del panel de control, ejecutar y/o importar el archivo que se encuentra en: **/database/datawarehouseDB.sql**

**2) Modificar variables de entorno**
* Abrir archivo **.env** en carpeta **backend**
* Modificar información de variables de acuerdo al entorno local:
```
DB_HOST='localhost'
DB_NAME='datawarehouse'
S_USER='root'
S_PASSWORD=''
DB_PORT='3306'

PORT=3000
ADMINKEY='d4^4{4r3h0u534dm1n'
```

**5) Iniciar el servidor**

```
node ./src/index.js
```

## Documentación de la API

Abrir el archivo **datawarehouse_Apispec.yml** y copiarlo en **[Swagger](https://editor.swagger.io/)** o importar el mismo desde opciones.

Endpoints:

**URL: http://localhost:3000/**

| Métod | Endpoints | Descripción | Rol |
| ---- | ---- | ---- | ---- |
| POST | /login | Autenticación e inicio de sesión en el sistema | all |
| GET | /users | Obtiene información de todos los usuarios | all |
| POST | /users | Crear un nuevo usuario | **admin** |
| GET | /locations | Obtiene información completa de todos los lugares (ciudad(es)/país(es)/región(es)) | all |
| GET | /locations/regions | Obtiene información de las regiones disponibles | all |
| POST | /locations/regions | Crea una nueva región | all |
| GET | /locations/countries | Obtiene información de los países disponibles | all |
| POST | /locations/countries | Crea un nuevo país | all |
| PUT | /locations/countries/{id_country} | Modifica la información de un país con su id | all |
| DELETE | /locations/countries/{id_country} | Elimina un país con su id | all |
| GET | /locations/cities | Obtiene información de los países disponibles | all |
| POST | /locations/cities | Crea un nuevo país | all |
| PUT | /locations/cities/{id_city} | Modifica la información de una ciudad con su id | all |
| DELETE | /locations/cities/{id_city} | Elimina una ciudad con su id | all |
| GET | /companies | Obtiene información de las empresas registradas | all |
| POST | /companies | Crea una nueva empresa | all |
| PUT | /companies/{id_company} | Modifica la información de una empresa con su id | all |
| DELETE | /companies/{id_company} | Elimina una empresa con su id | all |
| GET | /contacts | Obtiene información de todos los contactos registradas | all |
| POST | /contacts | Crea un nuevo contacto | all |
| PUT | /contacts/{id_contact} | Modifica la información de un contacto con su id | all |
| DELETE | /contacts/{id_contact} | Elimina un contacto con su id | all |

## Testing
* **Backend:** Testear endpoints con postman para usar API y base de datos
* **Frontend:** Abrir archivo index.html, iniciar sesión y continuar con navegación y operaciones

## Recursos y tecnologías utilizadas
* NodeJS
* Postman
* XAMPP
* Swagger
* NPM PACKAGES:
  * express
  * nodemon
  * jsonwebtoken
  * express-jwt
  * dotenv
  * mysql2
  * cors
  * compression
  * helmet

## Autor
**Hernán D Belalcázar A** - [Github hernandba](https://github.com/hernandba).