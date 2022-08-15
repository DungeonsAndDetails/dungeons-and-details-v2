import React, { useContext } from 'react';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const ItemModifiers = () => {
	const modifiers = useContext(modifierListContext);

	const saveItemModifiers = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/item-modifiers/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createItemModifiers = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/item-modifiers/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteItemModifiers = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/item-modifiers/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.itemModifiers) {
		return null;
	}

	const itemModifiersHeaders = [
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
			label: 'Cost',
			value: 'cost',
			type: inputTypes.NUMBER,
		},
		{
			label: 'Item Type',
			value: 'itemType',
			type: inputTypes.TEXT,
		},
		{
			label: 'Armor/Weapon',
			value: 'armorWeapon',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Item Modifiers List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.itemModifiers}
					headers={itemModifiersHeaders}
					onDelete={deleteItemModifiers}
					onEditSave={saveItemModifiers}
					onCreate={createItemModifiers}
				/>
			</div>
		</>
	);
};

export default ItemModifiers;
