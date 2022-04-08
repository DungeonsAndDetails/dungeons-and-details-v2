let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// Character Model
// let characterSchema = require('../Models/Character');

const db = mongoose.connection;
const classesCollection = db.collection('Classes');

// CREATE Character
router.route('/create').put((req, res) => {
	classesCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	classesCollection
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
	classesCollection
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
	classesCollection
		.deleteOne({ _id: id })
		.then((result) => res.send(result))
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
