var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema ({
	name: {
		type: String,
		required: true,
		unique: true
	},
	brewery:{
		type: String,
	},
	type: {
		type: String,
	},
	image:{
		type: String,
	},
	description:{
		type: String,
	},
	sizes:{
		type: String,
	},
	price:{
		type: String,
	},
	strength:{
		type: String,
	},
	available:{
		type: String,
	},
	ingredients:{
		type: String,
	},
	pairs_well:{
		type: String,
	},
	draft:{
		type: String,
	}
});

var Beer = mongoose.model('Beer', BeerSchema);
module.exports = Beer;