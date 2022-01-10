import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import axios from 'axios';

const SignUp = (props) => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required').min(6, '6 Characters minimum'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	});
	const submit = async (values) => {
		const response = await axios.put('http://localhost:4000/profiles/create', values);
		console.log(response);
		console.log(values);
	};
	return (
		<div className="w-full max-w-md flex justify-center m-auto p-5 rounded-md mt-36 bg-indigo-100">
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					username: '',
					password: '',
					confirmPassword: '',
				}}
				onSubmit={submit}
			>
				<Form>
					<div className="flex justify-between">
						<label className={`text-center my-auto ${props.labelClassName}  text-black font-bold`}>
							Email
						</label>
						<TextInputField
							type="email"
							name="username"
							placeholder="Email"
							className="bg-indigo-100"
						/>
					</div>
					<div className="flex justify-between">
						<label className={` text-center my-auto text-black font-bold`}>Password</label>
						<TextInputField
							name="password"
							type="password"
							placeholder="Password"
							className="bg-indigo-100"
						/>
					</div>
					<div className="flex justify-between ">
						<label className={` text-center pr-5 my-auto text-black font-bold`}>
							Confirm Password
						</label>

						<TextInputField
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							className="bg-indigo-100 "
						/>
					</div>
					<div className="flex justify-center">
						<Button
							className="bg-blue-400 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-sm"
							label="Sign Up"
							type="submit"
						/>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default SignUp;
