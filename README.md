# BACKEND SERVICE MONGODB + RESTIFY

## HTTP -> nodeJs
-> Interfaz de REd, procolos de comunicacion, manejo de paquetes, manejo de red, etc
JS -> Lenguaje de programacion -> navegadores + frontend

Serviciones o aplicaciones ->

INTERFAZ
Javascript -> NodeJs -> C

Recurso informatico -> conjunto de herramientas
Lenguaje de programacion C
BASE DE DATOS
COMPUTADORA -> CPU MEMORIA Y DISCO
RED

### Frameworks -> Guideline de como hacer las cosas sin crearlas desde 0 y hacerlas bien
conjunto de codigo + esta parametrado
NeztJs
ExpressJs
Fastify
HapiJs -> deprecado -> walmart
Restify -> netflix

### Sistema de Logging
Morgan
NewRelic

### Requerimiento - Features
* Servicio de Manejo de videos
*** 1 endpoint que me liste los videos (Easy)
*** 1 endpoint que convierta videos de webm a mp4 (Medium)
*** 1 endpoint que se encargue de concatenar videos (merge de videos) N de videos -> Sumatoria de Segundos de todos los videos (Hard)
***** A=1minuto, B=2 minutos, C=3minutos -> Output = 6 minutos
*** 1 endpoint que se encargue de cortar videos y juntarlos de forma secuencial (impar) (Graduate)
****** A1, A2, A3, A4, A5, A6, A7, A8
******** A1 + A3, A2 + A4, A5 + A7 , A6+A8
******** B1, B2, B3, B4
*********** B1 + B3, B2 + B4
************* C5 => resultado final



### ORM 

LENGUAJE DE PROGRAMACION (JS TS) <-----> LENGUAGE DE LA BASE DE DATOS


SQL -> OBTENER TODOS LOS ELEMENTOS DE UNA TABLA
---> select * from table_name
---> 

Javascript

let table = [ {userId: 1}, {userId: 2}]

const getElementsFromTable = () => {
    return table
}


ORM
query = {
}
const elementsFromTable = orm.findAll(query)
const elementsFromTable = orm.findOne(query)
const elementsFromTable = orm.querySelect(query)


SQL -> SINTAXIS
{
    postgresql
    mssql
    mysql
    ....
}
NoSQl -> SINTAXIS
{
    redis
    cassandra
    mongodb
    ....
}

ORM Mongoose

const eleemntsFromTable = orm.find({})


.find() =>  select * from table_name


SQL vs NOSQL


-> modelo flexible de datos
-> nosql -> PACELC


MOTOR DE BASE DE DATOS -> OPERACIONES CON LA DATA


NOSQL-> consultas a la db -> se nos retorne la data - > LENGUAJE DE PROGRAMACION O NUESTRO APP
QUE SE ENCARGUE DE REALIZAR ESTAS OPERACIONES





## ROADMAP
### INSTALAMOS TYPESCRIT





--> IDE 

EMACS ->



INSTALAR FFMPEG ->