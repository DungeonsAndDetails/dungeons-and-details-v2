import React from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';

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
				<div className="columns-2">
					<div>
						<label htmlFor="name">Name</label>
						<Field type="text" name="name" />
					</div>
					<div>
						<label htmlFor="name">Level</label>
						<Field type="number" name="level" />
					</div>
				</div>
				<div className="columns-2">
					<div>
						<label htmlFor="name">Class</label>
						<Field type="text" name="class" />
					</div>
					<div>
						<label htmlFor="name">Subclass</label>
						<Field type="text" name="subclass" />
					</div>
				</div>
				<div className="columns-2">
					<div>
						<label htmlFor="name">Race</label>
						<Field type="text" name="race" />
					</div>
					<div>
						<label htmlFor="name">Subrace</label>
						<Field type="text" name="subrace" />
					</div>
				</div>
				<div className="columns-2">
					<div>
						<label htmlFor="name">Alignment</label>
						<Field type="text" name="alignment" />
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
