import React, { useContext } from 'react';
import { skillListContext } from '../../context/skillListContext';
import { attributesContext } from '../../context/attributeContext';
import Table, { inputTypes } from '../../components/Table';

const Skills = () => {
	const skills = useContext(skillListContext);
	const attributes = useContext(attributesContext);

	const skillListHeaders = [
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
		{
			label: 'Attribute Reliance',
			value: 'attributeReliance',
			type: inputTypes.SELECT,
			options: attributes.state.attributes,
		},
	];

	return (
		<>
			<div>
				<span className="">Spell List</span>
			</div>
			<div className="py-3">
				<Table
					data={skills.state.skills}
					headers={skillListHeaders}
					onDelete={skills.deleteSkill}
					onEditSave={skills.updateSkill}
					onCreate={skills.createSkill}
				/>
			</div>
		</>
	);
};

export default Skills;
