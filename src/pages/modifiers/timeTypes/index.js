import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const TimeTypes = () => {
	const modifiers = useContext(modifierListContext);

	const saveTimeType = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/time-types/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createTimeType = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/time-types/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteTimeType = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/time-types/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.timeTypes) {
		return null;
	}

	const timeTypeHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Abbreviation',
			value: 'abbreviation',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Time Type List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.timeTypes}
					headers={timeTypeHeaders}
					onDelete={deleteTimeType}
					onEditSave={saveTimeType}
					onCreate={createTimeType}
				/>
			</div>
		</>
	);
};

export default TimeTypes;
