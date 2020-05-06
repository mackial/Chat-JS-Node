const io = require('socket.io');
// -------------------------------------Get-Server
module.exports = (server) => {
  var sockets = io.listen(server);

  sockets.on('connection', (socket) => {
    console.log('Nuevo Cliente');
    socket.on('message-client', (data) => {
      console.log(data);
      sockets.emit('message-server', data);
    });
  });
}