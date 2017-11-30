const mongoose = require('mongoose');
const Supplier = require('./supplier');
const Contact = require('./contact');
// const config = require('../config/database');

const salesRepSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	nickName: {
		type: String,
		required: true,
		unique: true
	},
	supplier: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Supplier'
	},
	contact: Contact
});

const SalesRep = module.exports = mongoose.model('SalesRep', salesRepSchema);


module.exports.addSalesRep = function (newSalesRep, callback) {
	newSalesRep.nickName = newSalesRep.firstName + ' ' + newSalesRep.lastName;
	newSalesRep.save(callback);
};


module.exports.getAllSalesReps = function () {
	return SalesRep.find().select('firstName lastName');
};

module.exports.getSalesRepDetails = function (id) {
	return SalesRep.findById(id);
};

module.exports.deleteSalesRepById = function (id, callback) {
	SalesRep.findByIdAndRemove(id, callback);
};

module.exports.updateSalesRepItem = function (id, updatedSalesRep, callback) {
	SalesRep.findByIdAndUpdate(id, updatedSalesRep, callback);
};

