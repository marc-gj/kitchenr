const mongoose = require('mongoose');
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

// Adds new stock item to db
module.exports.addSalesRep = function (newSalesRep, callback) {
	newSalesRep.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllSalesRep = function () {
	return SalesRep.find().select('name salesrep.name salesrep.cell salesrep.office');
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
