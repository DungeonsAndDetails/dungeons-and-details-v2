import React from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';

const createCharacter = () => {
	const submit = async (e) => {
		const response = await axios.put('http://localhost:4000/characters/create', e);
		console.log('response', response.data);
	};

	return (
		<Formik
			initialValues={{
				name: '',
			}}
			onSubmit={submit}
		>
			<Form>
				<div className="grid grid-cols-3 gap-5">
					<div>
						<TextInputField type="text" name="name" label="Name" />
					</div>
					<div>
						<TextInputField type="number" name="level" label="Level" />
					</div>

					<div>
						<TextInputField type="text" name="class" label="Class" />
					</div>
					<div>
						<TextInputField type="text" name="subclass" label="Subclass" />
					</div>

					<div>
						<TextInputField type="text" name="race" label="Race" />
					</div>
					<div>
						<TextInputField type="text" name="subrace" label="Subrace" />
					</div>

					<div className="col-start-1">
						<TextInputField type="text" name="alignment" label="Alignment" />
					</div>
				</div>
				<div className="flex justify-center">
					<Button
						className="p-4 bg-red-500 rounded py-3 font-bold text-white focus:shadow-outline"
						type="submit"
						label="Submit"
					/>
				</div>
			</Form>
		</Formik>
	);
};

export default createCharacter;
