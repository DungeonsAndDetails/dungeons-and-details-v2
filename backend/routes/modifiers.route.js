let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();
let componentsRoute = require('./modifiers/components.route');
let concentrationsRoute = require('./modifiers/concentrations.route');
let durationsRoute = require('./modifiers/durations.route');
let rangesRoute = require('./modifiers/ranges.route');
let sourcesRoute = require('./modifiers/sources.route');
let spellLevelsRoute = require('./modifiers/spell.levels.route');
let spellSchoolRoute = require('./modifiers/spell.schools.route');
let timesRoute = require('./modifiers/times.route');
let timeTypesRoute = require('./modifiers/time.types.route');

const db = mongoose.connection;
const componentsCollection = db.collection('Components');
const concentrationsCollection = db.collection('Concentrations');
const durationsCollection = db.collection('Durations');
const rangesCollection = db.collection('Ranges');
const sourcesCollection = db.collection('Sources');
const spellLevelsCollection = db.collection('Spell Levels');
const spellSchoolCollection = db.collection('Spell Schools');
const timesCollection = db.collection('Times');
const timeTypesCollection = db.collection('Time Types');

router.route('/all').get((req, res) => {
	const components = componentsCollection.find().toArray();
	const concentrations = concentrationsCollection.find().toArray();
	const durations = durationsCollection.find().toArray();
	const ranges = rangesCollection.find().toArray();
	const sources = sourcesCollection.find().toArray();
	const spellLevels = spellLevelsCollection.find().toArray();
	const spellSchools = spellSchoolCollection.find().toArray();
	const times = timesCollection.find().toArray();
	const timeTypes = timeTypesCollection.find().toArray();

	Promise.all([
		components,
		concentrations,
		durations,
		ranges,
		sources,
		spellLevels,
		spellSchools,
		times,
		timeTypes,
	])
		.then(
			([
				components,
				concentrations,
				durations,
				ranges,
				sources,
				spellLevels,
				spellSchools,
				times,
				timeTypes,
			]) => {
				res.send({
					components,
					concentrations,
					durations,
					ranges,
					sources,
					spellLevels,
					spellSchools,
					times,
					timeTypes,
				});
			},
		)
		.catch((error) => {
			res.send(error);
		});
});

router.use('/components', componentsRoute);
router.use('/concentrations', concentrationsRoute);
router.use('/durations', durationsRoute);
router.use('/ranges', rangesRoute);
router.use('/sources', sourcesRoute);
router.use('/spell-levels', spellLevelsRoute);
router.use('/spell-schools', spellSchoolRoute);
router.use('/times', timesRoute);
router.use('/time-types', timeTypesRoute);

module.exports = router;
