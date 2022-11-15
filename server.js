/*server.js*/
const mongoose = require("mongoose");
const mongoURL = 'mongodb://127.0.0.1/b1assist'
const http = require('http');
const express = require('express');
const app = express();

mongoose.connect(mongoURL, {
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
const port = 3000;

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
});