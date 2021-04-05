module.exports.chat = function (io, name, res) {
  io.on('connection', (socket) => {
    console.log('a user connected');

    if (name) {
      console.log('ten nguoi nhan ' + name)
      socket.on('chat', (msg) => {
        console.log(`${name}:${msg}`);
      });
    }

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
