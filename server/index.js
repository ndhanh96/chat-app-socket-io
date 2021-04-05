const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message:'connected'});
});

http.listen(3001, () => {
  console.log('server is listening at port 3001');
});
