var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewerySchema = new Schema ({
	name: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		type: String,
		required: true,
		unique: true
	},
	telephone:{
		type: String
	},
	email:{
		type: String
	},
	image_thumb:{
		type: String
	},
	image_main:{
		type: String
	},
	hours:{
		type: String
	},
	social:{
		type: String
	},
	beers:{
		type: String
	},
	events:{
		type: String
	}
});

var Brewery = mongoose.model('Brewery', BrewerySchema);
module.exports = Brewery;