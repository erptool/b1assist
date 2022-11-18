/*server.js*/

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});


/* const mongoose = require("mongoose");
const mongoURL = 'mongodb://127.0.0.1/b1assist'
const http = require('http');
const express = require('express');
const app = express(); */

/* mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
console.log("Database connected") 

const Schema = mongoose.Schema;

const knowPosts = new Schema({
  title: String,
  content: String
});

const MyModel = mongoose.model('KnowPost', knowPosts);

const hostname = 'localhost';
const port = 5000;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

app.post('/', (req, res) => {
  res.send('Submit button was pushed!')
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
}); */

