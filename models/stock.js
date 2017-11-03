const mongoose = require('mongoose');
// const config = require('../config/database');

const STOCK_TYPES = ['Dry', 'Frozen', 'Fresh Produce', 'Meat', 'Dairy'];
const UNITS_OF_MEASURE = ['g', 'ml'];
const STORAGE_LOCATIONS = ['Stock Room', 'Walk-in-Freezer', 'Walk-in-Fridge', 'Office', 'Kitchen 1', 'Kitchen 2', 'Kitchen 3', 'Kitchen 4'];
const PRICED_BY = ['Case', 'Unit', 'Weight'];

const stockSchema = mongoose.Schema({
	name: {
		type: String, 
		required: [true, 'Name required'],
		unique: true,
		maxlength: 25
	},
	price: {
		type: Number, 
		required: true
	},
	supplierId: {
		type: mongoose.Schema.Types.ObjectId, 
		ref:'Supplier'
	},
	pricedBy: {
		type: String, 
		enum: PRICED_BY
	},
	brand: {
		type: String, 
		maxlength: 25
	},
	unitsPerCase: {
		type: Number, 
		required: true
	},
	qtyPerUnit: {
		type: Number, 
		required: true
	},
	unitOfMeasure: {
		type: String, 
		enum: UNITS_OF_MEASURE,
		required: true
	},
	storageLocation: {
		type: String,
		enum: STORAGE_LOCATIONS
	},
	minStock: {
		type: Number,
		required: true
	},
	maxStock: {
		type: Number,
		required: true
	},
	currentStock: Number,
	stockType: {
		type: String,
		enum: STOCK_TYPES,
		//required: true
	},
	pictureUrl: String,
	notes: String
});

const Stock = module.exports = mongoose.model('Stock', stockSchema);

// Adds new stock item to db
module.exports.addStock = function(newStockItem, callback) {
	newStockItem.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllStock = function() {
	return Stock.find().populate('supplier').select('name price supplier brand');
};

module.exports.getStockDetails = function(id, callback) {
	return Stock.findById(id, callback).populate('supplier');
};

module.exports.deleteStockById = function(id, callback) {
	Stock.findByIdAndRemove(id, callback);
};

module.exports.updateStockItem = function(id, updatedStockItem, callback) {
	Stock.findByIdAndUpdate(id, updatedStockItem, callback);
};

module.exports.getStockFormInfo = function() {
	let stockInfo = {
		stockTypes: STOCK_TYPES,
		unitsOfMeasure: UNITS_OF_MEASURE,
		storageLocations: STORAGE_LOCATIONS,
		pricedBy: PRICED_BY
	};
	return Promise.resolve(stockInfo);
};

