$(()=>{
  // socket-iniciado
  var socket = io();

  console.log('Cargado!');
  // let en = 1
  const message = $('#chat-message');
  const chat = $('#chat');

  message.focus();

  // -------------------------------------------button-effect
  $('#message-box').submit((e) => {
    e.preventDefault();
    // console.log('Enviado'+en);
    // console.log(message.val());
    // chat.append(message.val() + "<br>");
    socket.emit('message-client', message.val());
    message.val('');
    // en++;
  });

  socket.on('message-server', (data) => {
    console.log(data);
    chat.append(data + '<br>');
  });

});