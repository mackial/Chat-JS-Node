const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');
const server = http.createServer(app);
// app.get('/', (req, res) => {
//   res.end("Chat Iniciado");
// });
// ----------------------------------configurations-server
app.set('port', 3000);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// console.log(__dirname);

// ---------------------------------------init-server
server.listen(app.get('port'), () => {
  console.log('Servidor Iniciado');
});

// --------------------------------Set-server-into-sockets
require('./sockets')(server);
