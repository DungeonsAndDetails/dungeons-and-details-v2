import React, { useContext } from 'react';
import Table, { inputTypes } from '../../components/Table';
import { backgroundListContext } from '../../context/backgroundListContext';
import { skillListContext } from '../../context/skillListContext';

const Backgrounds = () => {
	const backgrounds = useContext(backgroundListContext);
	const skills = useContext(skillListContext);

	const backgroundListHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Proficiencies',
			value: 'proficiencies',
			type: inputTypes.SELECT,
			options: skills.state.skills,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	// TODO: Update Proficiencies to allow multi-select
	const saveBackground = ({ values, id }) => {
		const newValues = {
			...values,
			proficiencies: skills.state.skills.find((skill) => skill._id === values.proficiencies),
		};
		backgrounds.updateBackground({ values: newValues, id });
	};

	const createBackground = (values) => {
		const newValues = {
			...values,
			proficiencies: skills.state.skills.find((skill) => skill._id === values.proficiencies),
		};
		backgrounds.createBackground(newValues);
	};

	return (
		<>
			<div>
				<span className="">Background List</span>
			</div>
			<div className="py-3">
				<Table
					data={backgrounds.state.backgrounds}
					headers={backgroundListHeaders}
					onDelete={backgrounds.deleteBackground}
					onEditSave={saveBackground}
					onCreate={createBackground}
				/>
			</div>
		</>
	);
};

export default Backgrounds;
