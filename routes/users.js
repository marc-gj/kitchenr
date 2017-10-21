const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
//Register
router.post('/register', (req, res) => {
	let newUser = new User({
		//name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, (err) => {
		if (err) {
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'User already exists'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed to register user'
				});
			}
            
		} else {
			res.json({
				success: true,
				msg:'Registered Successfully'
			});
		}
	});
});

//Authentication
router.post('/authenticate', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (err, user) =>{
		if (err) throw err;
		if (!user) {
			return res.json({success: false, msg: 'User not found'});
		}
		User.comparePassword(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800 // 1 week
				});
				res.json({
					success: true,
					token: 'JWT '+token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}
				});
			} else {
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res) => {
	const user = {
		username: req.user.username,
		email: req.user.email,
		id: req.user._id
	};
	//console.log(req);
	res.json({user});
	//console.log({user});
});

module.exports = router;