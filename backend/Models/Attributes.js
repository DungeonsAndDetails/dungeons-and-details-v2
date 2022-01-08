const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema(
	{
		name: {
			type: String,
		},
	},
	{
		collection: 'Characters',
	},
);

module.exports = mongoose.model('Characters', characterSchema);
