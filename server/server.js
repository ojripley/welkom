// express server goes here

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
const server = require('http').Server(app);

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welkom to Welkom!');
});