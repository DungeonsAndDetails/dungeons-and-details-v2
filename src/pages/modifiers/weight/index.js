import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Weight = () => {
	const modifiers = useContext(modifierListContext);
	console.log('Modifiers', modifiers);

	const saveWeight = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/weight-systems/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createWeight = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/weight-systems/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteWeight = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/weight-systems/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.weightSystems) {
		return null;
	}

	const weightSystemHeaders = [
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
			label: 'System',
			value: 'system',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Weight Measurement Systems List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.weightSystems}
					headers={weightSystemHeaders}
					onDelete={deleteWeight}
					onEditSave={saveWeight}
					onCreate={createWeight}
				/>
			</div>
		</>
	);
};

export default Weight;
