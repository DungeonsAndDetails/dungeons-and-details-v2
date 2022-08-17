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
					onEditSave={spells.updateSpell}
					onCreate={spells.createSpell}
				/>
			</div>
		</>
	);
};

export default Spells;
