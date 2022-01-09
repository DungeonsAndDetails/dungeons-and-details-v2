let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

const db = mongoose.connection;
const profileCollection = db.collection('Profiles');

// CREATE Character
router.route('/create').put((req, res) => {
	profileCollection
		.insertOne(req.body)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	profileCollection
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
