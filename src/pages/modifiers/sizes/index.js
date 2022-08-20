import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Sizes = () => {
	const modifiers = useContext(modifierListContext);

	const saveSize = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/modifiers/Sizes/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSize = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/Sizes/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSize = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/Sizes/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.Sizes) {
		return null;
	}

	const SizeHeaders = [
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
				<span className="">Sources List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.sources}
					headers={SizeHeaders}
					onDelete={deleteSize}
					onEditSave={saveSize}
					onCreate={createSize}
				/>
			</div>
		</>
	);
};

export default Sizes;
