import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const Durations = () => {
	const modifiers = useContext(modifierListContext);

	const saveDuration = async ({ values, id }) => {
		values.timeType = modifiers.state.modifiers.timeTypes.find(
			(timeType) => timeType._id === values.timeType,
		);
		const response = await axios.put(
			`http://localhost:4000/modifiers/durations/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createDuration = async (values) => {
		values.timeType = modifiers.state.modifiers.timeTypes.find(
			(timeType) => timeType._id === values.timeType,
		);
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

	const durationHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Duration Name',
			value: 'value',
			type: inputTypes.TEXT,
		},
		{
			label: 'Time Type',
			value: 'timeType',
			type: inputTypes.SELECT,
			options: modifiers.state.modifiers.timeTypes,
		},
	];

	return (
		<>
			<div>
				<span className="">Durations List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.durations}
					headers={durationHeaders}
					onDelete={deleteDuration}
					onEditSave={saveDuration}
				/>
			</div>
			<div>
				<span>Create Duration</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					value: '',
					timeType: '',
				}}
				onSubmit={createDuration}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Name" />
						</div>
						<div>
							<TextInputField type="text" name="value" label="Duration Amount" />
						</div>
						<div>
							<TextInputField
								options={modifiers.state.modifiers.timeTypes}
								name="timeType"
								type={inputTypes.SELECT}
								className="border-0 p-1 pb-2"
								label="Time Type"
							/>
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
