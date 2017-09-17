var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000;
var app = express();
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

app.use('/', htmlRoutes);
app.use('/api',apiRoutes);

app.listen(PORT, function(){
  console.log("Serving Server on port: " + PORT);
});
