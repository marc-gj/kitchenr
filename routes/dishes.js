const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Dish = require('../models/dish');

// Create Dish
router.post('/newDish', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	let newDish = new Dish({
		name: req.body.name,
		container: req.body.container,
		cup: req.body.cup,
		cupSize: req.body.cupSize,
		recipes: [{
			recipe_id: req.body.recipe_id
		}]
	});

	Dish.addStock(newDish, (err) => {
		if (err){
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'Dish already exists.'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed create Dish.'
				});
			} 
		} else {
			res.json({
				success: true,
				msg:'Created successfully!'
			});
		}
	});

});

router.get('/getalldishes', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	Dish.getAllDishes().then(dish => {
		res.json(dish);
	});
});

router.get('/getdishdetails', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let _id = req.query;
	Dish.getDishDetails(_id).then(dish => {
		res.json(dish);
	});
});

router.delete('/deletedish', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	console.log(req.query);
	let _id = req.query;
    
	Dish.deleteDishById(_id, (err, name) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete dish'
			});
		} else {
			res.json({
				success: true,
				msg: 'Dish deleted'
			});
		}
	});
});

router.put('/updatedishes', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let updateDish = {
		_id: req.body._id,
		name: req.body.name,
		container: req.body.container,
		cup: req.body.cup,
		cupSize: req.body.cupSize,
		recipes: [{
			recipe_id: req.body.recipe_id
		}]
	};

	Dish.updateDish(updateDish._id, updateDish, (err) => {
		if (err) {
			console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update Dish.'
			});
		} else {
			res.json({
				success: true,
				msg: 'Dish updated successfully!'
			});
		}
	});
});

module.exports = router;