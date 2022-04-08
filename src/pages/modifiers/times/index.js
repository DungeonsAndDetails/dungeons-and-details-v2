import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import EditAttributeField from '../../../components/EditItemField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';

const Times = () => {
	const modifiers = useContext(modifierListContext);

	const saveTime = async (values, id) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/spell-schools/times/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createTime = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/times/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteTime = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/times/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.times) {
		return null;
	}

	return (
		<>
			<div>
				<span className="">Times List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Time Name</span>
					</div>
					<div>
						<span>Time Description</span>
					</div>
				</div>
				<div className="border">
					{modifiers.state.modifiers.times.map((time) => {
						return (
							<EditAttributeField
								key={time._id}
								id={time._id}
								name={time.name}
								description={time.description}
								onDelete={() => deleteTime(time._id)}
								onSave={saveTime}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Time</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={createTime}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Time Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Time Description" />
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

export default Times;
