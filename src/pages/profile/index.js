import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { loginContext } from '../../context/loginContext';

// change/show email, change password, change/show username,
// CREATE placeholder to display current email

const Profile = () => {
	const loginState = useContext(loginContext);

	console.log('loginState', loginState.state);
	const submit = () => {};
	return (
		<div className="w-full max-w-md flex justify-center m-auto p-5 rounded-md mt-36 bg-black">
			<Formik
				initialValues={{
					changeUsername: loginState.state.username,
					changeEmail: '',
					changePassword: '',
				}}
				onSubmit={submit}
			>
				<Form>
					<div className="flex  justify-between">
						<label className=" text-white text-center my-auto">Username</label>
						<TextInputField
							name="changeUsername"
							type="text"
							placeholder="123421"
							className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
						/>
					</div>
					<div className="flex justify-between">
						<label className="text-white text-center my-auto">Email</label>
						<TextInputField
							name="changeEmail"
							type="email"
							placeholder=""
							className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
						/>
					</div>
					<div className="flex justify-between">
						<label className="text-white text-center my-auto">Password</label>
						<TextInputField
							name="changePassword"
							type="password"
							placeholder=""
							className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
						/>
					</div>
					<div>
						<Button
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-sm"
							type="submit"
						>
							Change
						</Button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Profile;
