const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
//const config = require('../config/database');
const Stock = require('../models/stock');

// Create Stock item
router.post('/newstock', passport.authenticate('jwt', {session: false}), (req, res) => {
	let stockItem = new Stock({
		name: req.body.name,
		price: req.body.price,
		vendorId: req.body.vendorId,
		pricedBy: req.body.purchaseOptions,
		brand: req.body.brand,
		unitsPerCase: req.body.unitsPerCase,
		qtyPerUnit: req.body.qtyPerUnit,
		unitOfMeasure: req.body.unitOfMeasure,
		storageLocation: req.body.storageLocation,
		minStock: req.body.minStock,
		maxStock: req.body.maxStock,
		currentStock: req.body.currentStock,
		stockType: req.body.stockType,
		pictureUrl: req.body.pictureUrl,
		notes: req.body.notes
	});

	Stock.addStock(stockItem, (err) => {
		if (err){
			if (err.code === 11000){
				res.json({
					success: false,
					msg:'Stock item already exists.'
				});
			} else {
				res.json({
					success: false,
					msg:'Failed create stock item.'
				});
			} 
		} else {
			res.json({
				success: true,
				msg:'Created successfully!',
				stockItem: stockItem
			});
		}
	});

});

router.get('/getallstock', passport.authenticate('jwt', {session:false}), (req, res) => {
	Stock.getAllStock().then(stock => {
		res.json(stock);
	});
});

router.get('/getstockdetails', passport.authenticate('jwt', {session:false}), (req, res) => {
	let id = req.query.id;
	//console.log(req.query.id);
	Stock.getStockDetails(id, (err, stock) => {
		if (err || stock === null) {
			res.json({
				success: false,
				msg: 'Failed to find stock item'
			});
		} else {
			res.json({
				success: true,
				msg: 'Stock item found',
				stock: stock
			});
		}
	});
});

router.delete('/deletestockitem', passport.authenticate('jwt', {session:false}), (req, res) => {
	//console.log(req.query.id);
	let id = req.query.id;
    
	Stock.deleteStockById(id, (err) => {
		if (err) {
			res.json({
				success: false,
				msg: 'Failed to delete stock item'
			});
		} else {
			res.json({
				success: true,
				msg: 'Stock item deleted'
			});
		}
	});
});

router.patch('/updatestockitem', passport.authenticate('jwt', {session:false}), (req, res) => {
	let stockItem = req.body;
	//console.log(req.body);

	Stock.updateStockItem(stockItem._id, stockItem, (err) => {
		if (err.code === 11000) {
			res.json({
				sucess: false,
				msg: 'There is already a stock item with this name'
			});
		} else if (err) {
			//console.log(err);
			res.json({
				success: false,
				msg: 'Failed to update stock item.',
				err: err
			});
		} else {
			res.json({
				success: true,
				msg: 'Stock item updated successfully!',
				stockItem: stockItem
			});
		}
	});
});

router.get('/getstockforminfo', (req, res) => {
	Stock.getStockFormInfo().then(stock => {
		res.json(stock);
	});
});

module.exports = router;