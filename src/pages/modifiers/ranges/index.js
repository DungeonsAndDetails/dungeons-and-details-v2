import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Ranges = () => {
	const modifiers = useContext(modifierListContext);

	const saveRange = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/modifiers/ranges/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createRange = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/ranges/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteRange = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/ranges/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.ranges) {
		return null;
	}

	const rangesHeaders = [
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
				<span className="">Ranges List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.ranges}
					headers={rangesHeaders}
					onDelete={deleteRange}
					onEditSave={saveRange}
					onCreate={createRange}
				/>
			</div>
		</>
	);
};

export default Ranges;
