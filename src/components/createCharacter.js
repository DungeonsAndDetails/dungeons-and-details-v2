import React from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';

const createCharacter = () => {
	const submit = async (e) => {
		console.log(e);
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
				<div className="columns-3">
					<div>
						<div htmlFor="name">Name</div>
						<Field type="text" name="name" />
					</div>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</Form>
		</Formik>
	);
};

export default createCharacter;
