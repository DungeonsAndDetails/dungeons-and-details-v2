const mongoose = require('mongoose');

const { Schema } = mongoose;

const characteristicsSchema = new Schema(
	{
		character: {
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
			alignment: {
				type: String,
			},
		},
		classes: {
			barbarian: {
				name: {
					type: String,
				},
			},
		},
	},
	{
		collection: 'Characters',
	},
);

module.exports = mongoose.model('Characters', characteristicsSchema);

// example

const attributes = {
	strength: {
		display: 'Strength',
		id: 123,
	},
	dexterity: {
		display: 'Dexterity',
		id: 123,
	},
	constitution: {
		display: 'Constitution',
		id: 123,
	},
	intelligence: {
		display: 'Intelligence',
		id: 123,
	},
	charisma: {
		display: 'Charisma',
		id: 123,
	},
	wisdom: {
		display: 'Wisdom',
		id: 123,
	},
};

const skills = {
	athletics: {
		display: 'Athletics',
		attributeReliance: [attributes.strength.id],
		id: 123,
		description: 'stuff',
	},
	acrobatics: {
		display: 'Acrobatics',
		attributeReliance: [attributes.dexterity.id],
		id: 123,
		description: 'stuff',
	},
	slightOfHand: {
		display: 'Slight Of Hand',
		attributeReliance: [attributes.dexterity.id],
		id: 123,
		description: 'stuff',
	},
	stealth: {
		display: 'Stealth',
		attributeReliance: [attributes.dexterity.id],
		id: 123,
		description: 'stuff',
	},
	arcana: {
		display: 'Arcana',
		attributeReliance: [attributes.intelligence.id],
		id: 123,
		description: 'stuff',
	},
	history: {
		display: 'History',
		attributeReliance: [attributes.intelligence.id],
		id: 123,
		description: 'stuff',
	},
	investigation: {
		display: 'Investigation',
		attributeReliance: [attributes.intelligence.id],
		id: 123,
		description: 'stuff',
	},
	nature: {
		display: 'Nature',
		attributeReliance: [attributes.intelligence.id],
		id: 123,
		description: 'stuff',
	},
	animalHandling: {
		display: 'Animal Handling',
		attributeReliance: [attributes.wisdom.id],
		id: 123,
		description: 'stuff',
	},
	insight: {
		display: 'Insight',
		attributeReliance: [attributes.wisdom.id],
		id: 123,
		description: 'stuff',
	},
	medicine: {
		display: 'Medicine',
		attributeReliance: [attributes.wisdom.id],
		id: 123,
		description: 'stuff',
	},
	perception: {
		display: 'Perception',
		attributeReliance: [attributes.wisdom.id],
		id: 123,
		description: 'stuff',
	},
	survival: {
		display: 'Survival',
		attributeReliance: [attributes.wisdom.id],
		id: 123,
		description: 'stuff',
	},
	deception: {
		display: 'Deception',
		attributeReliance: [attributes.charisma.id],
		id: 123,
		description: 'stuff',
	},
	intimidation: {
		display: 'Intimidation',
		attributeReliance: [attributes.charisma.id],
		id: 123,
		description: 'stuff',
	},
	performance: {
		display: 'Performance',
		attributeReliance: [attributes.charisma.id],
		id: 123,
		description: 'stuff',
	},
	persuasion: {
		display: 'Persuasion',
		attributeReliance: [attributes.charisma.id],
		id: 123,
		description: 'stuff',
	},
};

const dice = {
	d4: {
		display: 'd4',
		id: 123,
	},
	d6: {
		display: 'd6',
		id: 123,
	},
	d8: {
		display: 'd8',
		id: 123,
	},
	d10: {
		display: 'd10',
		id: 123,
	},
	d12: {
		display: 'd12',
		id: 123,
	},
	d20: {
		display: 'd20',
		id: 123,
	},
	d100: {
		display: 'd100',
		id: 123,
	},
};

const classes = {
	barbarian: {
		display: 'Barbarian',
		id: 123,
		hitDie: dice.d12.id,
		primaryAttributes: [attributes.strength.id],
		saves: [attributes.strength.id, attributes.constitution.id],
	},
};

const alignments = {
	law: {
		lawful: {
			display: 'Lawful',
			id: 123,
		},
		neutral: {
			display: 'Neutral',
			id: 123,
		},
		chaotic: {
			display: 'Chaotic',
			id: 123,
		},
	},
	nature: {
		good: {
			display: 'Good',
			id: 123,
		},
		neutral: {
			display: 'Neutral',
			id: 123,
		},
		evil: {
			display: 'Evil',
			id: 123,
		},
	},
};

const example = {
	character: {
		id: 123,
		name: 'neode',
		attributes: {
			strength: {
				value: 20,
				modifier: 5,
			},
			dexterity: {
				value: 18,
				modifier: 4,
			},
			constitution: {
				value: 18,
				modifier: 4,
			},
			intelligence: {
				value: 8,
				modifier: -1,
			},
			charisma: {
				value: 16,
				modifier: 3,
			},
			wisdom: {
				value: 10,
				modifier: 0,
			},
		},
		level: 1,
		class: classes.barbarian.id,
		subclass: null,
		alignment: {
			law: alignments.chaotic.id,
			nature: alignments.evil.id,
		},
		skills: [skills.persuasion.id, skills.intimidation.id],
	},
};
