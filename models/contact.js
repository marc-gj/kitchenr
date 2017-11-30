const mongoose = require('mongoose');
// const Supplier = require('../models/supplier');
// const config = require('../config/database');

const contactSchema = module.exports = mongoose.Schema({
	address: {
		type: String
	},
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
	fax: {
		type: [Number]
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
);
