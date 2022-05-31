import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Sources = () => {
	const modifiers = useContext(modifierListContext);

	const saveSource = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/sources/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSource = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/sources/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSource = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/sources/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.sources) {
		return null;
	}

	const sourceHeaders = [
		{
			label: 'Source Name',
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
				<span className="">Sources List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.sources}
					headers={sourceHeaders}
					onDelete={deleteSource}
					onEditSave={saveSource}
					onCreate={createSource}
				/>
			</div>
		</>
	);
};

export default Sources;
