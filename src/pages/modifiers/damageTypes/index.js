import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const DamageTypes = () => {
	const modifiers = useContext(modifierListContext);

	const saveComponent = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/damage-types/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createComponent = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/damage-types/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteComponent = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/damage-types/${value}`);
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
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Damage Type List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.damageTypes}
					headers={componentHeaders}
					onDelete={deleteComponent}
					onEditSave={saveComponent}
					onCreate={createComponent}
				/>
			</div>
		</>
	);
};

export default DamageTypes;
