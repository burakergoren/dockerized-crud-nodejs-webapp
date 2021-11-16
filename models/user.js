const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('users', UserSchema);
