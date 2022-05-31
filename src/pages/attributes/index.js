import React, { useContext } from 'react';
import { attributesContext } from '../../context/attributeContext';
import Table, { inputTypes } from '../../components/Table';

const Attributes = () => {
	const attributes = useContext(attributesContext);

	const attributeListHeaders = [
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
				<span className="">Attributes List</span>
			</div>
			<div className="py-3">
				<Table
					data={attributes.state.attributes}
					headers={attributeListHeaders}
					onDelete={attributes.deleteAttribute}
					onEditSave={attributes.updateAttribute}
					onCreate={attributes.createAttribute}
				/>
			</div>
		</>
	);
};

export default Attributes;
