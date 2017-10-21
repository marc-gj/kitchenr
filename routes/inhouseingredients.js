const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
//const config = require('../config/database');
const InHouseIngredient = require('../models/inhouseingredient');

// Create House ingredient
router.post('/newinhouseingredient', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	let newInHouseIngredient = new InHouseIngredient({
		name: req.body.name,
		ingredients: [{
			stock: {
				_id: req.body.stock_id,
				amount: req.body.stock_amount
			},
			inHouseStock: {
				_id: req.body.inHouseStock_id,
				amount: req.body.inHouseStock_amount
			}
		}],
		instructions: req.body.instructions,
		batchSize: {
			amount: req.body.batchSize.amount,
			unitOfMeasure: req.body.batchSize.amount
		}
	});

	InHouseIngredient.addInHouseIngredient(newInHouseIngredient, (err) => {
		if (err){
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'House ingredient already exists.'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed create house ingredient.'
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

router.get('/getallInHouseIngredients', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	InHouseIngredient.getAllInHouseIngredient().then(inHouseIngredient => {
		res.json(inHouseIngredient);
	});
});

router.get('/getinhouseingredientdetails', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let _id = req.query;
	InHouseIngredient.getInHouseIngredientDetails(_id).then(InHouseIngredient => {
		res.json(InHouseIngredient);
	});
});

router.delete('/deleteInHouseIngredient', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	console.log(req.query);
	let _id = req.query;
    
	InHouseIngredient.deleteInHouseIngredientById(_id, (err, name) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete house ingredient'
			});
		} else {
			res.json({
				success: true,
				msg: 'House ingredient deleted'
			});
		}
	});
});

router.put('/updateinhouseingredient', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let updateInHouseIngredient = {
		_id: req.body._id,
		name: req.body.name,
		ingredients: [{
			stock: {
				_id: req.body.stock_id,
				amount: req.body.stock_amount
			},
			inHouseStock: {
				_id: req.body.inHouseStock_id,
				amount: req.body.inHouseStock_amount
			}
		}],
		instructions: req.body.instructions,
		batchSize: {
			amount: req.body.batchSize.amount,
			unitOfMeasure: req.body.batchSize.amount
		}
	};

	InHouseIngredient.updateInHouseIngredient(updateInHouseIngredient._id, updateInHouseIngredient, (err) => {
		if (err) {
			//console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update house ingredient.'
			});
		} else {
			res.json({
				success: true,
				msg: 'House ingredient updated successfully!'
			});
		}
	});
});

module.exports = router;