import React, { useContext } from 'react';
import { classListContext } from '../../context/classListContext';
import Table, { inputTypes } from '../../components/Table';

const Classes = () => {
	const classes = useContext(classListContext);

	const classListHeaders = [
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
				<span className="">Class List</span>
			</div>
			<div className="py-3">
				<Table
					data={classes.state.classes}
					headers={classListHeaders}
					onDelete={classes.deleteSpell}
					onEditSave={classes.updateClass}
					onCreate={classes.createSpell}
				/>
			</div>
		</>
	);
};

export default Classes;
