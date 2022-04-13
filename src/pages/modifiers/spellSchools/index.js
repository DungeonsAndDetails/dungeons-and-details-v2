import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const SpellSchools = () => {
	const modifiers = useContext(modifierListContext);

	const saveSpellSchool = async ({ values, id }) => {
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

	const spellSchoolHeaders = [
		{
			label: 'Spell School Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Value',
			value: 'value',
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
				<span className="">Spell School List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.spellSchools}
					headers={spellSchoolHeaders}
					onDelete={deleteSpellSchool}
					onEditSave={saveSpellSchool}
				/>
			</div>
			<div>
				<span>Create New Spell School</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					value: '',
					description: '',
				}}
				onSubmit={createSpellSchool}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Name" />
						</div>
						<div>
							<TextInputField type="text" name="value" label="Value" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Description" />
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
