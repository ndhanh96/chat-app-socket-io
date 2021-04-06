module.exports.chat = function (io, name, res) {
  if (name) {
    console.log(name + ' connected')
    io.on('connection', (socket) => {
      socket.on('chat', (msg) => {
        console.log(`${name}:${msg}`);
        socket.broadcast.emit('incomingmsg', msg);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
};
