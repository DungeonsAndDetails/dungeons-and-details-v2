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
let damageTypesRoute = require('./modifiers/damage.types.route');
let diceTypesRoute = require('./modifiers/dice.types.route');
let weightSystemsRoute = require('./modifiers/weight.systems.route');
let materialTypesRoute = require('./modifiers/material.types.route');
let enhancementLevelsRoute = require('./modifiers/enhancement.levels.route');
let itemModifiersRoute = require('./modifiers/item.modifiers.route');
let volumeSystemsRoute = require('./modifiers/volume.systems.route');
let sizesRoute = require('./modifiers/sizes.route');

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
const damageTypesCollection = db.collection('Damage Types');
const diceTypesCollection = db.collection('Dice Types');
const weightSystemsCollection = db.collection('Weight Systems');
const materialTypesCollection = db.collection('Material Types');
const enhancementLevelsCollection = db.collection('Enhancement Levels');
const itemModifiersCollection = db.collection('Item Modifiers');
const volumeSystemsCollection = db.collection('Volume Systems');
const sizesCollection = db.collection('Sizes');

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
	const damageTypes = damageTypesCollection.find().toArray();
	const diceTypes = diceTypesCollection.find().toArray();
	const weightSystems = weightSystemsCollection.find().toArray();
	const materialTypes = materialTypesCollection.find().toArray();
	const enhancementLevels = enhancementLevelsCollection.find().toArray();
	const itemModifiers = itemModifiersCollection.find().toArray();
	const volumeSystems = volumeSystemsCollection.find().toArray();
	const sizes = sizesCollection.find().toArray();

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
		damageTypes,
		diceTypes,
		weightSystems,
		materialTypes,
		enhancementLevels,
		itemModifiers,
		volumeSystems,
		sizes,
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
				damageTypes,
				diceTypes,
				weightSystems,
				materialTypes,
				enhancementLevels,
				itemModifiers,
				volumeSystems,
				sizes,
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
					damageTypes,
					diceTypes,
					weightSystems,
					materialTypes,
					enhancementLevels,
					itemModifiers,
					volumeSystems,
					sizes,
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
router.use('/damage-types', damageTypesRoute);
router.use('/dice-types', diceTypesRoute);
router.use('/weight-systems', weightSystemsRoute);
router.use('/material-types', materialTypesRoute);
router.use('/enhancement-levels', enhancementLevelsRoute);
router.use('/item-modifiers', itemModifiersRoute);
router.use('/volume-systems', volumeSystemsRoute);
router.use('/sizes', sizesRoute);

module.exports = router;
