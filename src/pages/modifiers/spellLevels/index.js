import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const SpellLevels = () => {
	const modifiers = useContext(modifierListContext);

	const saveSpellLevel = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/spell-levels/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSpellLevel = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/spell-levels/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSpellLevel = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/spell-levels/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.spellLevels) {
		return null;
	}

	const spellLevelHeaders = [
		{
			label: 'Spell Level Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Value',
			value: 'value',
			type: inputTypes.TEXT,
		},
		{
			label: 'Spell Level Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Spell Levels List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.spellLevels}
					headers={spellLevelHeaders}
					onDelete={deleteSpellLevel}
					onEditSave={saveSpellLevel}
					onCreate={createSpellLevel}
				/>
			</div>
		</>
	);
};

export default SpellLevels;
