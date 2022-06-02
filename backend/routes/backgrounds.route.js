let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Character Model
// let characterSchema = require('../Models/Character');

const db = mongoose.connection;
const backgroundsCollection = db.collection('Backgrounds');

// CREATE Character
router.route('/create').put((req, res) => {
	backgroundsCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	backgroundsCollection
		.find()
		.toArray()
		.then((result) => {
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/update/:id').put((req, res) => {
	const id = new mongoose.Types.ObjectId(req.params.id);
	backgroundsCollection
		.updateOne({ _id: id }, { $set: { ...req.body } })
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/:id').delete((req, res) => {
	const id = new mongoose.Types.ObjectId(req.params.id);
	backgroundsCollection
		.deleteOne({ _id: id })
		.then((result) => res.send(result))
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
