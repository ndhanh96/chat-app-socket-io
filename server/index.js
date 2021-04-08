const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const chatProcess = require('./db/chat-process');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'connected' });
});

app.post('/chat', (req, res) => {
  let name = req.body.username;
});

chatProcess.chat(io, 'name', 'res');


http.listen(3001, () => {
  console.log('server is listening at port 3001');
});
