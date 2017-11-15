const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Supplier = require('../models/supplier');
const SalesRep = require('../models/salesrep');
const mongoose = require('mongoose');

// Create supplier with sales rep
router.post('/newsupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	let newSupplier = new Supplier({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		telephone: req.body.telephone,
		email: req.body.email,
		address: req.body.address,
		fax: req.body.fax,
		notes: req.body.notes
	});
	
	let newSalesRep = new SalesRep({
		firstName: req.body._salesRep.firstName,
		lastName: req.body._salesRep.lastName,
		supplier: newSupplier._id,
		contact: {
			telephone: req.body._salesRep.contact.telephone,
			cellphone: req.body._salesRep.contact.cellphone,
			email: req.body._salesRep.contact.email
		},
	});

	Supplier.addsupplier(newSupplier, (err) => {
		if (err) {
			if (err.code === 11000) {
				res.json({
					success: false,
					msg: 'supplier already exists.'
				});
			} else {
				res.json({
					success: false,
					msg: 'Failed create supplier.'
				});
			}
		} else {
			res.json({
				success: true,
				msg: 'Created successfully!'
			});
		}
	});

	SalesRep.addSalesRep(newSalesRep, (err) => {
		if (err) {
			if (err.code === 11000) {
				res.json({
					success: false,
					msg: 'This sales rep already exists.'
				});
			} else {
				res.json({
					success: false,
					msg: 'Failed to create new sales rep.'
				});
			}
		} else {
			res.json({
				success: true,
				msg: 'Sales rep successfully saved!'
			});
		}
	});
});

router.get('/getallsuppliers', passport.authenticate('jwt', { session: false }), (req, res) => {
	Supplier.getAllsuppliers().then(supplier => {
		res.json(supplier);
	});
});

router.get('/getsupplierdetails', passport.authenticate('jwt', { session: false }), (req, res) => {
	let _id = req.query;
	Supplier.getsupplierDetails(_id).then(supplier => {
		res.json(supplier);
	});
});

router.delete('/deletesupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log(req.query);
	let _id = req.query;

	Supplier.deletesupplierById(_id, (err, name) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete supplier'
			});
		} else {
			res.json({
				success: true,
				msg: 'supplier deleted'
			});
		}
	});
});

router.put('/updatesupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	let updatesupplier = {
		_id: req.body._id,
		name: req.body.name,
		salesRep: {
			name: req.body.salesRep.name,
			email: req.body.salesRep.email,
			cell: req.body.salesRep.cell,
			office: req.body.salesRep.office
		},
		telephone: req.body.telephone,
		email: req.body.email,
		address: req.body.address,
		fax: req.body.fax,
		notes: req.body.notes
	};

	Supplier.updatesupplierItem(updatesupplier._id, updatesupplier, (err) => {
		if (err) {
			console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update supplier.'
			});
		} else {
			res.json({
				success: true,
				msg: 'supplier updated successfully!'
			});
		}
	});
});

module.exports = router;