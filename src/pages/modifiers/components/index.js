import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Components = () => {
	const modifiers = useContext(modifierListContext);

	const saveComponent = async (values, id) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/components/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createComponent = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/components/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteComponent = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/components/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.components) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Components List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Components Name</span>
					</div>
					<div>
						<span>Components Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.components.map((component) => {
						return (
							<EditAttributeField
								key={component._id}
								id={component._id}
								name={component.name}
								description={component.description}
								onDelete={() => deleteComponent(component._id)}
								onSave={saveComponent}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Component</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createComponent}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Component Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Component Description" />
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

export default Components;
