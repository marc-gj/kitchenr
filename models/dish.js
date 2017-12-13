const mongoose = require('mongoose');
// const config = require('../config/database');

const CONTAINERS = ['Medium', 'Large', 'Salad', 'Soup', 'Seaweed'];
const CUP_SIZES = ['1 oz', '2 oz', '4 oz'];
const CUPS = [1, 2];
const DISH_TYPES = ['$45', 'Chicken', 'Fish', 'Meat', 'Salad', 'Sushi', 'Pasta'];

const dishSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    container: {
      type: String,
      enum: CONTAINERS,
      required: true
    },
    cup: {
      type: String,
      enum: CUPS,
      required: true
    },
    cupSize: {
      type: String,
      enum: CUP_SIZES,
      required: true
    },
    recipes: [{
      recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    }],
    dishType: {
      type: String,
      enum: DISH_TYPES,
      required: true
    },
    pictureUrl: {
      type: String
    }
  },
  { timestamps: true });

const Dish = module.exports = mongoose.model('Dish', dishSchema);

// Adds new stock item to db
module.exports.addDish = function (newDish, callback) {
  newDish.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllDishes = function () {
  return Dish.find().select('name pictureUrl dishType');
};

module.exports.getDishDetails = function (id) {
  return Dish.findById(id).populate({
    path: 'recipe',
    populate: {
      path: 'ingredients.stock._id ingrdients.inHouseStock._id'
    }
  });
};

module.exports.deleteDishById = function (id, callback) {
  Dish.findByIdAndRemove(id, callback);
};

module.exports.updateStockItem = function (id, updatedDish, callback) {
  Dish.findByIdAndUpdate(id, updatedDish, callback);
};
