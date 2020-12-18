// import dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// middleware
app.use(express.static(__dirname + '/../client/dist'));

// start server
app.listen(5000, function() {
  console.log(`listening on port: ${PORT}`);
});