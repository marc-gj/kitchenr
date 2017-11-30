const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Supplier = require('../models/supplier');
const SalesRep = require('../models/salesrep');
const mongoose = require('mongoose');

// Create supplier with sales rep
router.post('/newsupplierwsr', passport.authenticate('jwt', { session: false }), (req, res) => {
	let newSupplier = new Supplier({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		contact: {
			telephone: req.body.contact.telephone,
			email: req.body.contact.email,
			address: req.body.contact.address,
			fax: req.body.contact.fax,
			cellphone: req.body.contact.cellphone
		},
		notes: req.body.notes
	});
	let newSalesRep = new SalesRep({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.salesRep.firstName,
		lastName: req.body.salesRep.lastName,
		supplier: newSupplier._id,
		contact: {
			telephone: req.body.salesRep.contact.telephone,
			cellphone: req.body.salesRep.contact.cellphone,
			email: req.body.salesRep.contact.email
		}
	});

	Supplier.addSupplier(newSupplier, (err) => {
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
		}
	});
});

// Adds a supplier without a sales rep
router.post('/newsupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	let newSupplier = new Supplier({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		contact: {
			telephone: req.body.contact.telephone,
			email: req.body.contact.email,
			address: req.body.contact.address,
			fax: req.body.contact.fax,
			cellphone: req.body.contact.cellphone
		},
		notes: req.body.notes
	});

	Supplier.addSupplier(newSupplier, (err) => {
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
				msg: 'Supplier successfully created!'
			});
		}
	});
});

router.get('/getallsuppliers', (req, res) => {
	Supplier.getAllSuppliers().then(supplier => {
		res.json(supplier);
	});
});

router.get('/getsupplierdetails', passport.authenticate('jwt', { session: false }), (req, res) => {
	let _id = req.query;
	Supplier.getSupplierById(_id).then(supplier => {
		res.json(supplier);
	});
});

router.delete('/deletesupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	//console.log(req.query.id);
	let _id = req.query.id;

	Supplier.deleteSupplierById(_id, (err) => {
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

router.patch('/updatesupplier', passport.authenticate('jwt', { session: false }), (req, res) => {
	let updatesupplier = req.body;

	Supplier.updateSupplierItem(updatesupplier._id, updatesupplier, (err) => {
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