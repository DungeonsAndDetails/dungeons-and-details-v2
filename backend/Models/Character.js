const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema(
	{
		name: {
			type: String,
		},
		level: {
			type: Number,
		},
		class: {
			type: String,
		},
		subClass: {
			type: String,
		},
		race: {
			type: String,
		},
		subRace: {
			type: String,
		},
		Alignment: {
			type: String,
		},
	},
	{
		collection: 'Characters',
	},
);

module.exports = mongoose.model('Characters', characterSchema);
