import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { skillListContext } from '../../context/skillListContext';
import { attributesContext } from '../../context/attributeContext';
import EditSkillsField from './components/EditSkillsField';

const Skills = (props) => {
	const skills = useContext(skillListContext);
	const attributes = useContext(attributesContext);

	const save = (values, id) => {
		skills.updateSkill(values, id);
	};

	const options = () => {
		const optionList = [
			<option value={0} hidden key={0}>
				Choose...
			</option>,
		];
		attributes.state.attributes.forEach((attribute) => {
			optionList.push(
				<option value={attribute._id} key={attribute._id}>
					{attribute.name}
				</option>,
			);
		});
		return optionList;
	};

	return (
		<>
			<div>
				<span className="">Attribute List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-5 gap-5 text-white">
					<div>
						<span>Attribute Name</span>
					</div>
					<div>
						<span>Attribute Description</span>
					</div>
					<div>
						<span>Attribute Reliance</span>
					</div>
				</div>
				<div className="border">
					{skills.state.skills.map((skill) => {
						return (
							<EditSkillsField
								key={skill._id}
								id={skill._id}
								name={skill.name}
								description={skill.description}
								onDelete={() => skills.deleteSkill(skill._id)}
								onSave={save}
								attributeReliance={skill.attributeReliance}
								attributeOptions={options()}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Skills</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					// attributeReliance: null,
					description: '',
					attributeReliance: 0,
				}}
				// onSubmit={skills.createSkill}
				onSubmit={skills.createSkill}
			>
				<Form>
					<div className="grid grid-cols-4 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Skill Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Skill Description" />
						</div>
						<div>
							<div>
								<label htmlFor="attributeReliance" className="text-gray-400">
									Attribute Reliance
								</label>
							</div>
							<div>
								<Field className="w-full" as="select" name="attributeReliance">
									{options()}
								</Field>
							</div>
						</div>
						<div className="flex">
							<Button
								className="bg-white border border-gray-1 mb-3 mt-auto py-2 w-full"
								type="submit"
							>
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default Skills;
