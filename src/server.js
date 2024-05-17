const express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);

app.listen('3334',()=>{console.log('Servidor ON! Porta 3334');});