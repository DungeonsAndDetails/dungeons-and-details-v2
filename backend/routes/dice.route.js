let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

router.route('/four').get((req, res) => {
	const result = Math.floor(Math.random() * 4) + 1;
	res.send({ result });
});
router.route('/six').get((req, res) => {
	const result = Math.floor(Math.random() * 6) + 1;
	res.send({ result });
});
router.route('/eight').get((req, res) => {
	const result = Math.floor(Math.random() * 8) + 1;
	res.send({ result });
});
router.route('/ten').get((req, res) => {
	const result = Math.floor(Math.random() * 10) + 1;
	res.send({ result });
});
router.route('/twelve').get((req, res) => {
	const result = Math.floor(Math.random() * 12) + 1;
	res.send({ result });
});
router.route('/twenty').get((req, res) => {
	const result = Math.floor(Math.random() * 20) + 1;
	res.send({ result });
});
router.route('/hundred').get((req, res) => {
	const result = Math.floor(Math.random() * 100) + 1;
	res.send({ result });
});
module.exports = router;
