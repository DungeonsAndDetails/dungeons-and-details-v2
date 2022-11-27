import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Durations = () => {
	const modifiers = useContext(modifierListContext);

	const saveDuration = async ({ values, id }) => {
		values.timeType = modifiers.state.modifiers.timeTypes.find(
			(timeType) => timeType._id === values.timeType,
		);
		const response = await axios.put(
			`http://localhost:4000/modifiers/durations/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createDuration = async (values) => {
		values.timeType = modifiers.state.modifiers.timeTypes.find(
			(timeType) => timeType._id === values.timeType,
		);
		const response = await axios.put('http://localhost:4000/modifiers/durations/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteDuration = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/durations/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.durations) {
		return null;
	}

	const durationHeaders = [
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
			label: 'Time Type',
			value: 'timeType',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.timeTypes,
		},
	];

	return (
		<>
			<div>
				<span className="">Durations List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.durations}
					headers={durationHeaders}
					onDelete={deleteDuration}
					onEditSave={saveDuration}
					onCreate={createDuration}
				/>
			</div>
		</>
	);
};

export default Durations;
