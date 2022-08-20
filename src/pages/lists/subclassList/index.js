import React, { useContext } from 'react';
import { classListContext } from '../../../context/classListContext';
import Table, { inputTypes } from '../../../components/Table';
import { subclassListContext } from '../../../context/subclassListContext';

const Subclasses = () => {
	const classes = useContext(classListContext);
	const subclasses = useContext(subclassListContext);

	const subclassListHeaders = [
		{
			label: 'Class',
			value: 'class',
			type: inputTypes.SELECT,
			options: classes.state.classes,
		},
		{
			label: 'Subclass',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	const saveSubclass = ({ values, id }) => {
		const newValues = {
			...values,
			class: classes.state.classes.find((i) => i._id === values.class),
		};
		subclasses.updateSubclass({ values: newValues, id });
	};

	const createSubclass = (values) => {
		const newValues = {
			...values,
			class: classes.state.classes.find((class_) => class_._id === values.class),
		};
		subclasses.createSubclass(newValues);
	};

	return (
		<>
			<div>
				<span className="">Subclass List</span>
			</div>
			<div className="py-3">
				<Table
					data={subclasses.state.subclasses}
					headers={subclassListHeaders}
					onDelete={subclasses.deleteSubclass}
					onEditSave={saveSubclass}
					onCreate={createSubclass}
				/>
			</div>
		</>
	);
};

export default Subclasses;
