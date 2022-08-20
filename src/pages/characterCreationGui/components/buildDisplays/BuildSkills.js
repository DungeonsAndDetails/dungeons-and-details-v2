import { useContext, useEffect, useState } from 'react';
import { skillListContext } from '../../../../context/skillListContext';
import BuildCheckBox from './BuildCheckBox';

const BuildSkills = ({ setFieldValue, values }) => {
	const skills = useContext(skillListContext);
	const sortedSkills = [...skills.state.skills].sort((a, b) => (a.name > b.name ? 1 : -1));

	const proficiencyBonus = 2;
	//link proficiencyBonus up to a context or other methods

	return (
		<div>
			<div>
				{sortedSkills.map((skill, i) => {
					// console.log('skill', skill);
					// console.log(values.attributes[skill.attributeReliance.value]);
					return (
						<div key={skill._id}>
							<BuildCheckBox
								name={skill.name}
								value={values.attributes[skill.attributeReliance.value].mod}
								proficiencyBonus={proficiencyBonus}
							/>
						</div>
					);
				})}
			</div>
			<div></div>
		</div>
	);
};

export default BuildSkills;
