var Q = require('q');
const User = require('../models/user.js');
var bcrypt = require('bcryptjs');


module.exports = localAuth = function (username, password) {
  var deferred = Q.defer();

  User.findOne({ 'username': username })
    .then(function (result) {
      if (null == result) {
        console.log("USERNAME NOT FOUND:", username);

        deferred.resolve(false);
      }
      else {
        var hash = result.password;
        console.log("hash password :" + hash);
        console.log("password :" + password);
        console.log("FOUND USER: " + result.username);

        if (bcrypt.compareSync(password, hash)) {
          deferred.resolve(result);
        } else {
          console.log("AUTHENTICATION FAILED");
          deferred.resolve(false);
        }
      }
    });

  return deferred.promise;
};