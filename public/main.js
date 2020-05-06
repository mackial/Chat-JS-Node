$(()=>{

  console.log('Cargado!');
  // let en = 1
  const message = $('#chat-message');
  // -------------------------------------------button-effect
  $('#message-box').submit((e) => {
    e.preventDefault();
    // console.log('Enviado'+en);
    console.log(message.val());
    // en++;
  });
});