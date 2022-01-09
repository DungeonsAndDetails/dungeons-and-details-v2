let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

const db = mongoose.connection;
const attributesCollection = db.collection('Attributes');

router.route('/attributes/create').post((req, res) => {
	attributesCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	attributesCollection
		.find()
		.toArray()
		.then((result) => {
			console.log(result);
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
