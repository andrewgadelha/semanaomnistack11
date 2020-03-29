const express = require('express');
const cors = require('cors');
const routes =require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
//get: bucar uma informaação no backend
//post: criar uma informação no backend
//put: alterar uma informação no backend
//delete: deletar uma informação no backend

//tipos de parametros:

//query params: parametros nomeados enviados na rota após o '?' (filtros, paginação)
//route params: parametros ulitizados para identificar recursos
//request body: corpo da requisição utilizados para criar ou alterar recursos 

//SQL: MySQL, SQLite, PostgreSQL, Microsoft sql server
//NoSQL: MongoDB, 
/**
 * Driver: SELECT * FROM users
 */



app.listen(3333);
