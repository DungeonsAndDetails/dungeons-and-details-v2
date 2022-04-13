import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import { modifierListContext } from '../../../context/modifiersContext';
import axios from 'axios';
import Table, { inputTypes } from '../../../components/Table';

const TimeTypes = () => {
	const modifiers = useContext(modifierListContext);

	const saveTimeType = async ({ values, id }) => {
		const response = await axios.put(
			`http://localhost:4000/modifiers/time-types/update/${id}`,
			values,
		);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const createTimeType = async (values) => {
		const response = await axios.put('http://localhost:4000/modifiers/time-types/create', values);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	const deleteTimeType = async (value) => {
		const response = await axios.delete(`http://localhost:4000/modifiers/time-types/${value}`);
		if (response.status === 200 || response.status === 201) {
			modifiers.getModifiers();
		}
	};

	if (!modifiers.state.modifiers.timeTypes) {
		return null;
	}

	const timeTypeHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Abbreviation',
			value: 'abbreviation',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Time Type List</span>
			</div>
			<div className="py-3">
				<Table
					data={modifiers.state.modifiers.timeTypes}
					headers={timeTypeHeaders}
					onDelete={deleteTimeType}
					onEditSave={saveTimeType}
				/>
			</div>
			<div>
				<span>Create New Time Type</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					value: '',
					description: '',
				}}
				onSubmit={createTimeType}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Display Name" />
						</div>
						<div>
							<TextInputField type="text" name="abbreviation" label="Abbreviation" />
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

export default TimeTypes;
