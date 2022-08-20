import React, { useContext } from 'react';
import { itemsContext } from '../../../context/itemsContext';
import Table, { inputTypes } from '../../../components/Table';

const Items = () => {
	const items = useContext(itemsContext);

	const itemsListHeaders = [
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
