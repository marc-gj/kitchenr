const mongoose = require('mongoose');
const contactSchema = require('./contact');
//const SalesRep = require('../models/salesrep');
// const config = require('../config/database');

const supplierSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	contact: contactSchema,
	notes: String,
	salesRep: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SalesRep'
	}]
});


const Supplier = module.exports = mongoose.model('Supplier', supplierSchema);

// Adds new stock item to db
// The newSuppler and newSalesRep generate ObjectIds on the route before being saved.
module.exports.addSupplier = function (newSupplier, callback) {
	// Pushes the sales rep onto the salesReps array on the supplier. 
	// This allows us to have an array of Sales Reps to populate.
	// This is a many to many model. The Supplier has a reference list of sales reps
	// and the Sales Rep has a reference to a single Supplier
	newSupplier.save(callback);
};

// Gets list of suppliers from db
module.exports.getAllSuppliers = function () {
	return Supplier.find()
		.populate('salesRep', 'nickName contact.email contact.telephone contact.cellphone')
		.select('name contact.email contact.address contact.telephone contact.cellphone contact.fax');
};

// Returns all of the information on a supplier
module.exports.getSupplierById = function (id) {
	return Supplier.findById(id);
};

module.exports.deleteSupplierById = function (id, callback) {
	Supplier.findByIdAndRemove(id, callback);
};

module.exports.updateSupplierItem = function (id, updatedSupplier, callback) {
	Supplier.findByIdAndUpdate(id, updatedSupplier, callback);
};
