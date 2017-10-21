const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
//const config = require('../config/database');
const Recipe = require('../models/recipe');

// Create Recipe
router.post('/newrecipe', passport.authenticate('jwt', {session: false}), (req, res) => {
	console.log(req.body);
	let newRecipe = new Recipe({
		name: req.body.name,
		ingredients: [{
			stock: {
				_id: req.body.ingredients.stock._id,
				amount: req.body.ingredients.stock.amount
			},
			inHouseIngredients: {
				_id: req.body.ingredients.inHouseIngredients._id,
				amount: req.body.ingredients.inHouseIngredients.amount
			}
		}],
		recipeType: req.body.recipeType,
		instructions: req.body.instructions
	});

	Recipe.addRecipe(newRecipe, (err) => {
		if (err){
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'Recipe already exists.'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed create recipe.'
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

router.get('/getallrecipes', passport.authenticate('jwt', {session:false}), (req, res) => {
	Recipe.getAllRecipes().then(recipe => {
		res.json(recipe);
	});
});

router.get('/getrecipedetails', passport.authenticate('jwt', {session:false}), (req, res) => {
	let _id = req.query;
	Recipe.getRecipeDetails(_id).then(recipe => {
		res.json(recipe);
	});
});

router.delete('/deleterecipe', passport.authenticate('jwt', {session:false}), (req, res) => {
	console.log(req.query);
	let _id = req.query;
    
	Recipe.deleteRecipeById(_id, (err, name) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete recipe'
			});
		} else {
			res.json({
				success: true,
				msg: 'Recipe deleted'
			});
		}
	});
});

router.put('/updaterecipe', passport.authenticate('jwt', {session:false}), (req, res) => {
	let updateRecipe = {
		_id: req.body._id,
		name: req.body.name,
		ingredients: [{
			stock: {
				_id: req.body.ingredients.stock._id,
				amount: req.body.ingredients.stock.amount
			},
			inHouseStock: {
				_id: req.body.ingredients.inHouseStock._id,
				amount: req.body.ingredients.inHouseStock.amount
			}
		}],
		recipeType: req.body.recipeType,
		instructions: req.body.instructions
	};

	Recipe.updateRecipe(updateRecipe._id, updateRecipe, (err) => {
		if (err) {
			console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update recipe.'
			});
		} else {
			res.json({
				success: true,
				msg: 'Recipe updated successfully!'
			});
		}
	});
});

module.exports = router;