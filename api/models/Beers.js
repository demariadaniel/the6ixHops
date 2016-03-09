var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema ({
	name: {
		type: String,
		required: true,
		unique: true
	},
	type: {
		type: String,
		required: true
	}
});

var Beer = mongoose.model('Beer', BeerSchema);
module.exports = Beer;