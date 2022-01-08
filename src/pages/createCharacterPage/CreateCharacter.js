import React from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import Input from '../../components/Input';

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
						<Field type="text" name="name" as={Input} label="Name" />
					</div>
					<div>
						<Field type="number" name="level" as={Input} label="Level" />
					</div>
				</div>
				<div className="columns-2">
					<div>
						<Field type="text" name="class" as={Input} label="Class" />
					</div>
					<div>
						<Field type="text" name="subclass" as={Input} label="Subclass" />
					</div>
				</div>
				<div className="columns-2">
					<div>
						<Field type="text" name="race" as={Input} label="Race" />
					</div>
					<div>
						<Field type="text" name="subrace" as={Input} label="Subrace" />
					</div>
				</div>
				<div className="columns-1">
					<div>
						<Field type="text" name="alignment" as={Input} label="Alignment" />
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
