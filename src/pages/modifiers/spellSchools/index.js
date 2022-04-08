import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const SpellSchools = () => {
	const modifiers = useContext(modifierListContext);
	console.log('dsjhkfghjlskdfgljkhsgdlfkhj', modifiers.state);

	const saveSpellSchool = async (values, id) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/spell-schools/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSpellSchool = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/spell-schools/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSpellSchool = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/spell-schools/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.spellSchools) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Spell School List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Spell School Name</span>
					</div>
					<div>
						<span>Spell School Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.spellSchools.map((spellSchool) => {
						return (
							<EditAttributeField
								key={spellSchool._id}
								id={spellSchool._id}
								name={spellSchool.name}
								description={spellSchool.description}
								onDelete={() => deleteSpellSchool(spellSchool._id)}
								onSave={saveSpellSchool}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Spell School</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createSpellSchool}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Spell School Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Spell School Description" />
						</div>
						<div className="flex">
							<Button className="border mt-auto py-2 w-full" type="submit">
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default SpellSchools;
