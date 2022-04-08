import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Durations = () => {
	const modifiers = useContext(modifierListContext);

	const saveDuration = async (values, id) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/durations/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createDuration = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/durations/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteDuration = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/durations/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.durations) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Durations List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Duration Name</span>
					</div>
					<div>
						<span>Duration Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.durations.map((duration) => {
						return (
							<EditAttributeField
								key={duration._id}
								id={duration._id}
								name={duration.name}
								description={duration.description}
								onDelete={() => deleteDuration(duration._id)}
								onSave={saveDuration}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create Duration</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createDuration}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Duration Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Duration Description" />
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

export default Durations;
