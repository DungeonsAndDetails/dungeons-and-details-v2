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
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.post('/login', (req, res) => {
	console.log('request', req.body);
	profileCollection
		.findOne({ email: req.body.email, password: req.body.password })
		.then((result) => {
			if (result) {
				console.log('result', result);
				res.send(result);
			} else {
				throw new Error('Does not Exist');
			}
		})
		.catch((error) => {
			res.send(error);
		});
});

router.post('/update', (req, res) => {
	const { body } = req;
	const newValues = {
		$set: {
			...body,
		},
	};
	const id = new mongoose.Types.ObjectId(body._id);
	profileCollection
		.updateOne({ _id: id }, newValues)
		.then((result) => {
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
