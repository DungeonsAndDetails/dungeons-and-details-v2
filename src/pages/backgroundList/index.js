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
					onEditSave={backgrounds.updateBackground}
					onCreate={backgrounds.createBackground}
				/>
			</div>
		</>
	);
};

export default Backgrounds;
