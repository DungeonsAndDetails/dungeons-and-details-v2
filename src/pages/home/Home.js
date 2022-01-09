import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextInputField from '../../components/TextInputField';

const Home = () => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required').min(6, '6 Characters minimum'),
	});
	const submit = async (values) => {
		console.log(values);
	};
	return (
		<div className="w-full max-w-xs flex justify-center m-auto p-5 rounded-md mt-36 bg-indigo-100">
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={submit}
			>
				<Form>
					<TextInputField
						placeholder="Email"
						labelClassName="block text-black font-bold not-italic normal-case mb-2"
						className="focus:outline-none bg-indigo-100 focus:shadow-lg  focus:shadow-red-600 placeholder:font-semibold rounded border-0 shadow-black shadow-sm"
						type="email"
						name="username"
						label="Username"
					/>
					<TextInputField
						placeholder="********"
						labelClassName="block text-black font-bold not-italic normal-case mb-2"
						className="bg-indigo-100 placeholder:font-semibold rounded border-0 shadow-black shadow-sm"
						type="password"
						name="password"
						label="Password"
					/>
					<div className="grid grid-cols-2 gap-2 ">
						<div>
							<Button
								className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
								label="Sign In"
								type="submit"
							/>
						</div>
						<div className="flex justify-center">
							<Button
								className=" bg-indigo-100 font-semibold text-blue-400 hover:text-blue-800"
								label="Forgot Password"
								type="button"
							/>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Home;
