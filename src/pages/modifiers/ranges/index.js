import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Ranges = () => {
	const modifiers = useContext(modifierListContext);

	const saveRange = async (values, id) => {
		const response = await axios.put(`http://localhost:4000/modifiers/ranges/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createRange = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/ranges/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteRange = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/ranges/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.ranges) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Ranges List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Range Name</span>
					</div>
					<div>
						<span>Range Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.ranges.map((range) => {
						return (
							<EditAttributeField
								key={range._id}
								id={range._id}
								name={range.name}
								description={range.description}
								onDelete={() => deleteRange(range._id)}
								onSave={saveRange}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create Range</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createRange}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Range Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Range Description" />
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

export default Ranges;
