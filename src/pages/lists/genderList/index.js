import React, { useContext } from 'react';
import Table, { inputTypes } from '../../../components/Table';
import { gendersListContext } from '../../../context/gendersContext';

const Genders = () => {
	const genders = useContext(gendersListContext);
	console.log(genders);

	const genderListHeaders = [
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
				<span className="">Gender List</span>
			</div>
			<div className="py-3">
				<Table
					data={genders.state.genders}
					headers={genderListHeaders}
					onDelete={genders.deleteGender}
					onEditSave={genders.updateGender}
					onCreate={genders.createGender}
				/>
			</div>
		</>
	);
};

export default Genders;
