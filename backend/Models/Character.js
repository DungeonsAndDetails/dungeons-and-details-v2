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
		subclass: {
			type: String,
		},
		race: {
			type: String,
		},
		subrace: {
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
