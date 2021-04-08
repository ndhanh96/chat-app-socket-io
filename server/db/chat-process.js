module.exports.chat = function (io, name, res) {
  io.on('connection', (socket) => {
    // socket.on('chat', (msg) => {
    //   console.log(`${name}:${msg}`);
    //   socket.broadcast.emit('incomingmsg', msg);
    // });
    console.log('a user connected');
    socket.on('clientSent', (msg) => {
      if (msg.name && msg.msg) {
        socket.broadcast.emit('serverSent', [msg.name, msg.msg, Date.parse(new Date())]);
        console.log(msg.msg);
      }
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
