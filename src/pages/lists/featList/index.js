import React, { useContext } from 'react';
import { featListContext } from '../../../context/featListContext';
import Table, { inputTypes } from '../../../components/Table';

const Feats = () => {
	const feats = useContext(featListContext);

	const featListHeaders = [
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
				<span className="">Feat List</span>
			</div>
			<div className="py-3">
				<Table
					data={feats.state.feats}
					headers={featListHeaders}
					onDelete={feats.deleteFeat}
					onEditSave={feats.updateFeat}
					onCreate={feats.createFeat}
				/>
			</div>
		</>
	);
};

export default Feats;
