let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Character Model
// let characterSchema = require('../Models/Character');

const db = mongoose.connection;
const characterCollection = db.collection('Characters');

// CREATE Character
router.route('/create').put((req, res) => {
	characterCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	characterCollection
		.find()
		.toArray()
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
