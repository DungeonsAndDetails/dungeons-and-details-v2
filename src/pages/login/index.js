import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import StyledLink from '../../components/StyledLink';
import TextInputField from '../../components/TextInputField';
import { userContext, userContextActions } from '../../context/userContext';

const Login = () => {
	const user = useContext(userContext);
	const navigate = useNavigate();
	const [showError, setShowError] = useState(null);
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required'),
	});

	const submit = async (values) => {
		const request = {
			email: values.email,
			password: values.password,
		};
		const response = await axios.post('http://localhost:4000/profiles/login', request);
		if (response.data.email) {
			user.dispatch({
				type: userContextActions.SIGN_IN,
				value: {
					email: response.data.email,
					displayName: response.data.displayName,
					loggedIn: true,
				},
			});
			navigate('/');
		} else {
			setShowError('Incorrect Username and Password');
		}
	};

	return (
		<>
			<div className="w-full max-w-xs flex justify-center m-auto p-5 rounded-md mt-36 bg-gradient-to-tl from-testPrimary to-testSecondary ">
				<Formik
					validationSchema={validationSchema}
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={submit}
				>
					<Form className="w-full">
						{showError && (
							<div>
								<span>{showError}</span>
								<button
									className="ml-3"
									type="button"
									onClick={() => {
										setShowError(null);
									}}
								>
									x
								</button>
							</div>
						)}
						<p className="font-bold text-lg mb-1">Login</p>
						<div className="flex mb-5">
							<p className="text-xs">Don't have an account yet?</p>
							<StyledLink to="/sign-up" className="text-xs ml-2 ">
								Sign Up
							</StyledLink>
						</div>
						<TextInputField
							placeholder="Email"
							labelClassName="text-sm font-bold"
							className="mb-2"
							type="email"
							name="email"
							label="Username"
						/>
						<TextInputField
							placeholder="********"
							labelClassName="text-sm font-bold"
							className=""
							type="password"
							name="password"
							label="Password"
						/>
						<div className="">
							<div className="my-5">
								<Button className=" bg-gray-900 rounded-md" type="submit">
									Sign In
								</Button>
							</div>
							<div className="flex justify-center">
								<StyledLink to="/forgot-password" className="text-xs ">
									Forgot Password?
								</StyledLink>
							</div>
						</div>
						<div></div>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Login;
