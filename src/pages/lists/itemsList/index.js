import React, { useContext } from 'react';
import { itemsContext } from '../../../context/itemsContext';
import Table, { inputTypes } from '../../../components/Table';
import { modifierListContext } from '../../../context/modifiersContext';

const Items = () => {
	const items = useContext(itemsContext);
	const modifiers = useContext(modifierListContext);

	const itemsListHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Item Types',
			value: 'itemTypes',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.itemTypes.sort((a, b) => (a.name > b.name ? 1 : -1)),
		},
		{
			label: 'Stats',
			value: 'stats',
			type: inputTypes.TEXT,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},

		{
			label: 'Material',
			value: 'material',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.materialTypes.sort((a, b) => (a.name > b.name ? 1 : -1)),
		},

		{
			label: 'Cost',
			value: 'cost',
			type: inputTypes.TEXT,
		},
		{
			label: 'Stat Requirements',
			value: 'statRequirements',
			type: inputTypes.TEXT,
		},
		{
			label: 'Proficiency Requirements',
			value: 'proficiencyRequirements',
			type: inputTypes.TEXT,
		},
		{
			label: 'Source',
			value: 'source',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Items List</span>
			</div>
			<div className="py-3">
				<Table
					data={items.state.items}
					headers={itemsListHeaders}
					onDelete={items.deleteItem}
					onEditSave={items.updateItem}
					onCreate={items.createItem}
				/>
			</div>
		</>
	);
};

export default Items;
