import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Concentrations = () => {
	const modifiers = useContext(modifierListContext);

	const saveConcentration = async (values, id) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/concentrations/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createConcentration = async (values) => {
		const response = await axios.put(
			'http://localhost:4000/modifiers/concentrations/create',
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteConcentration = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/concentrations/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.concentrations) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Concentrations List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Concentrations Name</span>
					</div>
					<div>
						<span>Concentrations Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.concentrations.map((concentration) => {
						return (
							<EditAttributeField
								key={concentration._id}
								id={concentration._id}
								name={concentration.name}
								description={concentration.description}
								onDelete={() => deleteConcentration(concentration._id)}
								onSave={saveConcentration}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Concentration</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createConcentration}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Concentration Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Concentration Description" />
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

export default Concentrations;
