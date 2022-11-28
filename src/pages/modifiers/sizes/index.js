import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Sizes = () => {
	const modifiers = useContext(modifierListContext);

	const saveSize = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/modifiers/sizes/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSize = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/sizes/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSize = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/sizes/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.sizes) {
		return null;
	}

	const sizesHeaders = [
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
				<span className="">Sizes List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.sizes}
					headers={sizesHeaders}
					onDelete={deleteSize}
					onEditSave={saveSize}
					onCreate={createSize}
				/>
			</div>
		</>
	);
};

export default Sizes;
