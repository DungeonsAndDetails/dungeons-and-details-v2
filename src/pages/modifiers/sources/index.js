import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Sources = () => {
	const modifiers = useContext(modifierListContext);

	const saveSource = async (values, id) => {
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

	return (
		<>
			<div>
				<span className="">Sources List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Source Name</span>
					</div>
					<div>
						<span>Source Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.sources.map((source) => {
						return (
							<EditAttributeField
								key={source._id}
								id={source._id}
								name={source.name}
								description={source.description}
								onDelete={() => deleteSource(source._id)}
								onSave={saveSource}
							/>
						);
					})}
				</div>
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
							<TextInputField type="text" name="name" label="Source Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Source Description" />
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
