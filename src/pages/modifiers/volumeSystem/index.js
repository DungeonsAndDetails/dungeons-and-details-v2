import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const VolumeSystems = () => {
	const modifiers = useContext(modifierListContext);

	const saveVolumeSystems = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/volume-systems/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createVolumeSystems = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/volume-systems/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteVolumeSystems = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/volume-systems/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.volumeSystems) {
		return null;
	}

	const volumeSystemHeaders = [
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
				<span className="">Volume Measurement Systems List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.volumeSystems}
					headers={volumeSystemHeaders}
					onDelete={deleteVolumeSystems}
					onEditSave={saveVolumeSystems}
					onCreate={createVolumeSystems}
				/>
			</div>
		</>
	);
};

export default VolumeSystems;
