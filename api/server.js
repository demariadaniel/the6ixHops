//EXPRESS
var express = require("express");
var bodyParser = require('body-parser');
var authentication = require("./middleware/auth");
var app = express();
// added multer for image upload added by jordan for image upload 
var multer = require('multer'); 

app.use(express.static(__dirname + './../app'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(8080, function(){
	console.log("Listening on Port 8080, Stop with Ctrl+C");
});
// =============================================================
//image upload storage details // added by jordan 

var storageDetails = multer.diskStorage({
	destination: __dirname + './../app/uploads',
	filename: function(req, file, callback) {
		var originalname = file.originalname;
		var extension = originalname.substring(originalname.lastIndexOf('.'));
		var withoutExtension = originalname.substring(0, originalname.lastIndexOf('.'));
		var fullfilename = withoutExtension + '_' + Date.now() + extension;
		callback(null, fullfilename);
	}
});

var upload = multer({storage: storageDetails, fileSize: 500000}).any();

app.post('/api/photo/', upload, function(req, res) {
	console.log(req.files);
	res.json(req.files);	
})

app.use(express.static(__dirname + './../app/'));

//image upload storage details // added by jordan 
// ================================================================

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
var auth_routes = require('./routes/auth_routes');

//ENDPOINTS
app.use('/api/users' , userRoutes);
app.use('/api/beers' , beerRoutes);
app.use('/api/breweries' , breweryRoutes);
app.use('/api/auth', auth_routes);
