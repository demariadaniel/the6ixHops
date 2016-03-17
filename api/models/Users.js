var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;