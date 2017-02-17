var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;



