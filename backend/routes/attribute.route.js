let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Character Model
let attributeSchema = require('../Models/Attributes');

// CREATE Character
router.route('/attributes/create').post((req, res) => {
	characterCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
