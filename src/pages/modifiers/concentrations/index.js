import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Concentrations = () => {
	const modifiers = useContext(modifierListContext);

	const saveConcentration = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/concentrations/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createConcentration = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/concentrations/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteConcentration = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/concentrations/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.concentrations) {
		return null;
	}

	const concentrationHeaders = [
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
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Concentrations List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.concentrations}
					headers={concentrationHeaders}
					onDelete={deleteConcentration}
					onEditSave={saveConcentration}
					onCreate={createConcentration}
				/>
			</div>
		</>
	);
};

export default Concentrations;
