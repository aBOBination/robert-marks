var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require('./routers/routes.js');

app.use(routes);

app.listen(PORT, function () {
  console.log('App now listening at localhost:' + PORT);
});
