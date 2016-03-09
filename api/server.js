//EXPRESS
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + './../app'));
app.use(bodyParser());

app.listen(8080, function(){
	console.log("Listening on Port 8080, Stop with Ctrl+C");
});


//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


//MODELS
var User = require('./models/Users');
var Beer = require('./models/Beers');
var Brewery = require('./models/Breweries');

//ROUTES
var userRoutes = require('./routes/user_routes');
var beerRoutes = require('./routes/beer_routes');
var breweryRoutes = require('./routes/brewery_routes');

//ENDPOINTS
app.use('/api/users' , userRoutes);
app.use('/api/beers' , beerRoutes);
app.use('/api/breweries' , breweryRoutes);