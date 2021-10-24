const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const UserSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    }
});


const User = mongoose.model('user',UserSchema);

module.exports = User;