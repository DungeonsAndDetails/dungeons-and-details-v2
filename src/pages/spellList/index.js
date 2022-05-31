import React, { useContext } from 'react';
import { spellListContext } from '../../context/spellListContext';
import Table, { inputTypes } from '../../components/Table';
import { modifierListContext } from '../../context/modifiersContext';

const Spells = () => {
	const spells = useContext(spellListContext);
	const modifiers = useContext(modifierListContext);

	const spellListHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Value',
			value: 'value',
			type: inputTypes.TEXT,
		},
		{
			label: 'Spell level',
			value: 'spellLevel',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.spellLevels,
		},
		{
			label: 'Cast Time',
			value: 'castTime',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.durations,
		},
		{
			label: 'Spell School',
			value: 'spellSchool',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.spellSchools,
		},
		{
			label: 'Concentration?',
			value: 'concentration',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.concentrations,
		},
		{
			label: 'Range',
			value: 'range',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.ranges,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	const saveSpell = ({ values, id }) => {
		const newValues = {
			...values,
			spellLevel: modifiers.state.modifiers.spellLevels.find(
				(spellLevel) => spellLevel._id === values.spellLevel,
			),
			castTime: modifiers.state.modifiers.durations.find(
				(duration) => duration._id === values.castTime,
			),
			spellSchool: modifiers.state.modifiers.spellSchools.find(
				(spellSchool) => spellSchool._id === values.spellSchool,
			),
			concentration: modifiers.state.modifiers.concentrations.find(
				(concentration) => concentration._id === values.concentration,
			),
			range: modifiers.state.modifiers.ranges.find((range) => range._id === values.range),
		};
		spells.updateSpell({ values: newValues, id });
	};

	const createSpell = (values) => {
		const newValues = {
			...values,
			spellLevel: modifiers.state.modifiers.spellLevels.find(
				(spellLevel) => spellLevel._id === values.spellLevel,
			),
			castTime: modifiers.state.modifiers.durations.find(
				(duration) => duration._id === values.castTime,
			),
			spellSchool: modifiers.state.modifiers.spellSchools.find(
				(spellSchool) => spellSchool._id === values.spellSchool,
			),
			concentration: modifiers.state.modifiers.concentrations.find(
				(concentration) => concentration._id === values.concentration,
			),
			range: modifiers.state.modifiers.ranges.find((range) => range._id === values.range),
		};
		spells.createSpell(newValues);
	};

	return (
		<>
			<div>
				<span className="">Spell List</span>
			</div>
			<div className="py-3">
				<Table
					data={spells.state.spells}
					headers={spellListHeaders}
					onDelete={spells.deleteSpell}
					onEditSave={saveSpell}
					onCreate={createSpell}
				/>
			</div>
		</>
	);
};

export default Spells;
