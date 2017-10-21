const mongoose = require('mongoose');
// const config = require('../config/database');

const RECIPE_TYPES = ['Chicken', 'Beef', 'Lamb', 'Pork', 'Fish', 'Shrimp','Pasta', 'Side', 'Salad', 'Seafood'];


const recipeSchema = mongoose.Schema({
	name: {
		type: String, 
		required: [true, 'Name required'],
		unique: true,
		maxlength: 25
	},
	ingredients: [{
		stock: {
			_id: {
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'Stock'
			},
			amount: {
				type: Number, 
				required: true
			}
		},
		inHouseStock: {
			_id: {
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'InHouseStock'
			},
			amount: {
				type: Number,
				//required: true
			}
		}
	}],
	recipeType: {
		type: String,
		enum: RECIPE_TYPES
	},
	instructions: String
});

const Recipe = module.exports = mongoose.model('Recipe', recipeSchema);

// Adds new stock item to db
module.exports.addRecipe = function(newRecipe, callback) {
	newRecipe.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllRecipes = function() {
	return Recipe.find().populate('vendor').select('name recipeType pictureUrl');
};

module.exports.getRecipeDetails = function(id) {
	return Recipe.findById(id).populate('ingredients.stock._id ingredients.inHouseIngredients._id');
};

module.exports.deleteRecipeById = function(id, callback) {
	Recipe.findByIdAndRemove(id, callback);
};

module.exports.updateRecipe = function(id, updatedRecipe, callback) {
	Recipe.findByIdAndUpdate(id, updatedRecipe, callback);
};
