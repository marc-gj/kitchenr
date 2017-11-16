const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const SalesRep = require('../models/salesrep');
const mongoose = require('mongoose');

router.get('/getallsalesreps', passport.authenticate('jwt', { session: false }), (req, res) => {
	SalesRep.getAllSalesReps().then(salesRep => {
		res.json(salesRep);
	});
});

router.delete('/deleteallsalesreps', passport.authenticate('jwt', { session: false }), (req, res) => {
	//console.log(req.query.id);

	SalesRep.deleteAllSalesReps((err) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete sales rep'
			});
		} else {
			res.json({
				success: true,
				msg: 'sales rep deleted'
			});
		}
	});
});

module.exports = router;