const mongoose = require('mongoose');
// const config = require('../config/database');

const INGREDIENT_TYPES = ['Seasoning', 'Stock', 'Sauce', 'Topping', 'Filling'];

const inHouseIngredientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30
    },
    type: {
      type: String,
      enum: INGREDIENT_TYPES
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
      inHouseIngredients: {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'InHouseIngredients'
        },
        amount: {
          type: Number,
          required: true
        }
      }
    }],
    instructions: String,
    batchSize: {
      amount: {
        type: Number,
        required: true
      },
      unitOfMeasure: {
        type: String,
        enum: ['g', 'ml']
      }
    },
    pictureUrl: String
  },
  { timestamps: true });

const InHouseIngredient = module.exports = mongoose.model('InHouseIngredient', inHouseIngredientSchema);

// Adds new stock item to db
module.exports.addInHouseIngredient = function (newInHouseIngredient, callback) {
  newStock.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllInHouseIngredients = function () {
  return InHouseIngredient.find().select('name type pictureUrl');
};

module.exports.getInHouseIngredientDetails = function (id) {
  return InHouseIngredient.findById(id).populate('ingredients.stock._id ingredients.inHouseIngredients._id');
};

module.exports.deleteInHouseIngredientById = function (id, callback) {
  InHouseIngredient.findByIdAndRemove(id, callback);
};

module.exports.updateInHouseIngredient = function (id, updatedInHouseIngredient, callback) {
  InHouseIngredient.findByIdAndUpdate(id, updatedInHouseIngredient, callback);
};
