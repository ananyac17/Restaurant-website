var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	userFirstName: String,
	userLastName: String,
	password: String,
	mobile: String,
	address: String,
	country: String,
}),
User = mongoose.model('User', userSchema);

module.exports = User;
