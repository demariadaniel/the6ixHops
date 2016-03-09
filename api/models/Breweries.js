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
	}
});

var Brewery = mongoose.model('Brewery', BrewerySchema);
module.exports = Brewery;