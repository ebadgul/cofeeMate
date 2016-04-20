var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    password: String
})

module.exorts = mongoose.model('User', UserSchema);