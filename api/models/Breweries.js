var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrewerySchema = new Schema ({
	name: {
		type: String,
		required: true,
		unique: true
	},
	street: {
		type: String,
		required: true,
		unique: true
	},
	city: {
		type: String,
	},
	province: {
		type: String,
	},
	postcode: {
		type: String,
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
	twitter:{
		type: String
	},
	facebook:{
		type: String
	},
	instagram:{
		type: String
	}
});

var Brewery = mongoose.model('Brewery', BrewerySchema);
module.exports = Brewery;