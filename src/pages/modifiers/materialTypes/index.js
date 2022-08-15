import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const MaterialTypes = () => {
	const modifiers = useContext(modifierListContext);

	const saveMaterialTypes = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/material-types/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createMaterialTypes = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/material-types/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteMaterialTypes = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/material-types/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.materialTypes) {
		return null;
	}

	const materialTypesHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
		{
			label: 'Weapons',
			value: 'weapons',
			type: inputTypes.TEXT,
		},
		{
			label: 'Armor',
			value: 'armor',
			type: inputTypes.TEXT,
		},
		{
			label: 'Cost',
			value: 'cost',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Material Types List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.materialTypes}
					headers={materialTypesHeaders}
					onDelete={deleteMaterialTypes}
					onEditSave={saveMaterialTypes}
					onCreate={createMaterialTypes}
				/>
			</div>
		</>
	);
};

export default MaterialTypes;
