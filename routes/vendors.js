const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Vendor = require('../models/vendor');

// Create Vendor
router.post('/newvendor', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	let newVendor = new Vendor({
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
	});

	Vendor.addVendor(newVendor, (err) => {
		if (err){
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'Vendor already exists.'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed create vendor.'
				});
			} 
		} else {
			res.json({
				success: true,
				msg:'Created successfully!'
			});
		}
	});

});

router.get('/getallvendors', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	Vendor.getAllVendors().then(vendor => {
		res.json(vendor);
	});
});

router.get('/getvendordetails', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let _id = req.query;
	Vendor.getVendorDetails(_id).then(vendor => {
		res.json(vendor);
	});
});

router.delete('/deletevendor', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	console.log(req.query);
	let _id = req.query;
    
	Vendor.deleteVendorById(_id, (err, name) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete vendor'
			});
		} else {
			res.json({
				success: true,
				msg: 'Vendor deleted'
			});
		}
	});
});

router.put('/updatevendor', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	let updateVendor = {
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

	Vendor.updateVendorItem(updateVendor._id, updateVendor, (err) => {
		if (err) {
			console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update vendor.'
			});
		} else {
			res.json({
				success: true,
				msg: 'Vendor updated successfully!'
			});
		}
	});
});

module.exports = router;