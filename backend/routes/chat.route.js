let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();
let dice = require('../utilities/dice');

const db = mongoose.connection;
const chatCollection = db.collection('Chat');
const commandKeys = { command: '/', roll: '/roll' };

const chatActions = (text) => {
	if (text.charAt(0) === commandKeys.command) {
		const words = text.split(' ');

		switch (words[0]) {
			case '/roll':
				if (words[1].match(/^([\d]{1,2}[d](4|6|8|10|12|20|100)([+]{1}[\d]{1,2})?)/)) {
					return dice.dice(words[1]);
				} else {
					console.log('error');
				}

				break;
			default:
		}
	}
};

router.route('/create').put((req, res) => {
	const response = chatActions(req.body.text);
	const newData = { ...req.body, commandData: response };
	chatCollection
		.insertOne(newData)
		.then((result) => {
			res.send(result.ops);
		})
		.catch((error) => {
			res.send(error);
		});
});

router.route('/all').get((req, res) => {
	chatCollection
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
	chatCollection
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
	chatCollection
		.deleteOne({ _id: id })
		.then((result) => res.send(result))
		.catch((error) => {
			res.send(error);
		});
});

module.exports = router;
