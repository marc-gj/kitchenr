const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const config = require('../config/database');
// User Schema

const UserSchema = mongoose.Schema({
	/* name: {
		type: String
	}, */
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},
  { timestamps: true });

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
  //console.log(id);
};

module.exports.getUserByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserByEmail = function (email, callback) {
  const query = { email: email };
  User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
  //console.log(newUser);
  bcrypt.genSalt(10, (err, salt) => {
    //console.log(salt);
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      //console.log(hash);
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  if (candidatePassword) { //server crashes if password is undefined
    //console.log(candidatePassword);
    //console.log(hash);
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if (err) throw err;
      //console.log(isMatch);
      callback(null, isMatch);
    });
  } else {
    return false;
  }
};