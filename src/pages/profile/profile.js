import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';

// change/show email, change password, change/show username,
// CREATE placeholder to display current email

const Profile = () => {
	return (
		<div className="w-full max-w-md flex justify-center m-auto p-5 rounded-md mt-36 bg-black">
			<Formik>
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
							name="changePassowrd"
							type="password"
							placeholder=""
							className="text-black placeholder:text-black bg-indigo-100 shadow rounded-md border-white shadow-white"
						/>
					</div>
					<div>
						<Button
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-sm"
							label="Change"
							type="submit"
						/>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default Profile;
