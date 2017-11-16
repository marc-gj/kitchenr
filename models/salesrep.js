const mongoose = require('mongoose');
const Supplier = require('../models/supplier');
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
	contact: {
		email: {
			type: String,
			required: true
		},
		cellphone: {
			type: [Number],
			required: true
		},
		telephone: {
			type: [Number],
			required: true
		},
		facebook: {
			type: String,
		},
		twitter: {
			type: [Number],
		},
		linkedin: {
			type: [Number],
		},
		snapchat: {
			type: [Number],
		},
		instagram: {
			type: [Number],
		},
	}
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

module.exports.deleteAllSalesReps = function (callback) {
	SalesRep.deleteMany({firstName: /Dan/}, callback);
};
