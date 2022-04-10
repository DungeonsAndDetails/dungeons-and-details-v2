import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Sources = () => {
	const modifiers = useContext(modifierListContext);

	const saveSource = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/sources/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createSource = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/sources/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteSource = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/sources/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.sources) {
		return null;
	}

	const sourceHeaders = [
		{
			label: 'Source Name',
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
				<span className="">Sources List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.sources}
					headers={sourceHeaders}
					onDelete={deleteSource}
					onEditSave={saveSource}
				/>
			</div>
			<div>
				<span>Create New Source</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createSource}
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

export default Sources;
