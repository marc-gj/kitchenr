const mongoose = require('mongoose');
// const config = require('../config/database');

const supplierSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	telephone: {
		type: Number,
		required: true
	},
	fax: Number,
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	notes: String
});

const Supplier = module.exports = mongoose.model('Supplier', supplierSchema);

// Adds new stock item to db
module.exports.addSupplier = function (newSupplier, callback) {
	newSupplier.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllSupplier = function () {
	return Supplier.find().select('name salesrep.name salesrep.cell salesrep.office');
};

module.exports.getSupplierDetails = function (id) {
	return Supplier.findById(id);
};

module.exports.deleteSupplierById = function (id, callback) {
	Supplier.findByIdAndRemove(id, callback);
};

module.exports.updateSupplierItem = function (id, updatedSupplier, callback) {
	Supplier.findByIdAndUpdate(id, updatedSupplier, callback);
};
