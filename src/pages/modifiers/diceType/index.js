import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const DiceType = () => {
	const modifiers = useContext(modifierListContext);

	const saveDiceType = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/dice-types/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createDiceType = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/dice-types/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteDiceType = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/dice-types/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.diceTypes) {
		return null;
	}

	const diceTypeHeaders = [
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
	];

	return (
		<>
			<div>
				<span className="">Dice Types List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.diceTypes}
					headers={diceTypeHeaders}
					onDelete={deleteDiceType}
					onEditSave={saveDiceType}
					onCreate={createDiceType}
				/>
			</div>
		</>
	);
};

export default DiceType;
