const mongoose = require('mongoose');
// const config = require('../config/database');

const vendorSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	salesRep: {
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		cell: {
			type: String,
			required: true
		},
		office: String
	},
	telephone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	fax: String,
	notes: String    
});

const Vendor = module.exports = mongoose.model('Vendor', vendorSchema);

// Adds new stock item to db
module.exports.addVendor = function(newVendor, callback) {
	newVendor.save(callback);
};

// Gets list of stock items from db for display in data-table
module.exports.getAllVendor = function() {
	return Vendor.find().select('name salesrep.name salesrep.cell salesrep.office');
};

module.exports.getVendorDetails = function(id) {
	return Vendor.findById(id);
};

module.exports.deleteVendorById = function(id, callback) {
	Vendor.findByIdAndRemove(id, callback);
};

module.exports.updateVendorItem = function(id, updatedVendor, callback) {
	Vendor.findByIdAndUpdate(id, updatedVendor, callback);
};
