import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import StyledLink from '../../components/StyledLink';

const SignUp = (props) => {
	const navigate = useNavigate();

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email format').required('Required'),
		displayName: Yup.string().min(6, '6 Characters minimum'),
		password: Yup.string().required('Required').min(3, '3 Characters minimum'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	});

	const onSubmit = async (values) => {
		const time = moment();
		const dateCreated = time.format('LLL');
		const email = values.email;
		const displayName = values.displayName;
		const password = values.password;
		const confirmPassword = values.confirmPassword;

		const response = await axios.put('http://localhost:4000/profiles/create', {
			email,
			displayName,
			password,
			confirmPassword,
			dateCreated,
		});

		// need to add error*
		if (response.status === 200) {
			navigate('/login');
		}
	};

	return (
		<div className="w-full max-w-xs flex justify-center m-auto p-5 rounded-md mt-36 bg-gradient-to-tl from-testPrimary to-testSecondary  ">
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					email: '',
					displayName: '',
					password: '',
					confirmPassword: '',
				}}
				onSubmit={onSubmit}
			>
				<Form className="w-full">
					<div>
						{/* HEADER */}
						<p className="mb-1 font-bold text-lg">Sign Up</p>
						<div className="flex mb-5 text-xs">
							<p className="">Already have an account?</p>
							<StyledLink to="/login" className="ml-2  ">
								Sign In
							</StyledLink>
						</div>
						{/* BODY */}
						<TextInputField
							label="Email"
							labelClassName="font-bold"
							type="email"
							name="email"
							placeholder="Email"
							className="mb-3"
						/>
						<TextInputField
							label="Display Name"
							labelClassName="font-bold"
							type="text"
							name="displayName"
							placeholder="Display Name"
							className="mb-3"
						/>
						<TextInputField
							label="Password"
							labelClassName="font-bold"
							name="password"
							type="password"
							placeholder="Password"
							className="mb-2"
						/>
						<TextInputField
							label=""
							labelClassName="font-bold"
							name="confirmPassword"
							type="password"
							placeholder="Confirm Password"
							className=" mb-2"
						/>
					</div>
					{/* FOOTER */}
					<div className="flex justify-center pt-2">
						<Button className="bg-gray-900 rounded-md" type="submit">
							Sign up
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default SignUp;
