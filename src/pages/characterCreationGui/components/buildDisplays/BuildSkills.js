import { useContext, useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import TextInputField from '../../../../components/TextInputField';
import { skillListContext } from '../../../../context/skillListContext';
import BuildCheckBox from './BuildCheckBox';

const BuildSkills = ({ setFieldValue, values }) => {
	const skills = useContext(skillListContext);
	const [check, setCheck] = useState(false);

	const proficiencyBonus = 2;
	//link proficiencyBonus up to a context or other methods

	return (
		<div>
			<div>
				{skills.state.skills.map((skill, i) => {
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
