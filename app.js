const http = require('http');
const express = require('express');
const app = express();
const io = require('socket.io');

const server = http.createServer(app);
// app.get('/', (req, res) => {
//   res.end("Chat Iniciado");
// });

app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

// console.log(__dirname);

server.listen(app.get('port'), () => {
  console.log('Servidor Iniciado');
});

var sockets = io.listen(server);

sockets.on('connection', (socket) => {
  console.log('Nuevo Cliente');
  socket.on('message-client', (data) => {
    console.log(data);
    sockets.emit('message-server', data);
  });
});

