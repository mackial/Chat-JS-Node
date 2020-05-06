const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end("Chat Iniciado");
});

app.listen(3000, () => {
  console.log('Servidor Iniciado');
});