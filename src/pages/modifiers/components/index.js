import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Components = () => {
	const modifiers = useContext(modifierListContext);

	const saveComponent = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/components/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createComponent = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/components/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteComponent = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/components/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.components) {
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
	console.log('modifiers', modifiers);
	return (
		<>
			<div>
				<span className="">Components List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.components}
					headers={componentHeaders}
					onDelete={deleteComponent}
					onEditSave={saveComponent}
					onCreate={createComponent}
				/>
			</div>
		</>
	);
};

export default Components;
