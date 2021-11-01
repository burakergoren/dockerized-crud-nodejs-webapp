const mongoose = require('mongoose');

// create student schema & model
const UserSchema = mongoose.Schema({
    // id: {
    //     type: String,
    // },
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


module.exports = mongoose.model('users', UserSchema);