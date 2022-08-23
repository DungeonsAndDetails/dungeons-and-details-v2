import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Proficiencies = () => {
	const modifiers = useContext(modifierListContext);
	console.log(modifiers);

	const saveComponent = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/proficiencies/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createComponent = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/proficiencies/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteComponent = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/proficiencies/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.proficiencies) {
		return null;
	}

	const componentHeaders = [
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
				<span className="">Proficiencies List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.proficiencies}
					headers={componentHeaders}
					onDelete={deleteComponent}
					onEditSave={saveComponent}
					onCreate={createComponent}
				/>
			</div>
		</>
	);
};

export default Proficiencies;
