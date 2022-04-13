import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const SpellLevels = () => {
	const modifiers = useContext(modifierListContext);

	const saveSpellLevel = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/spell-levels/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSpellLevel = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/spell-levels/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSpellLevel = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/spell-levels/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.spellLevels) {
		return null;
	}

	const spellLevelHeaders = [
		{
			label: 'Spell Level Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Value',
			value: 'value',
			type: inputTypes.TEXT,
		},
		{
			label: 'Spell Level Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Spell Levels List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.spellLevels}
					headers={spellLevelHeaders}
					onDelete={deleteSpellLevel}
					onEditSave={saveSpellLevel}
				/>
			</div>
			<div>
				<span>Create New Spell Level</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createSpellLevel}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Spell Level Name" />
						</div>
						<div>
							<TextInputField type="text" name="value" label="Spell Level Value" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Spell Level Description" />
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

export default SpellLevels;
