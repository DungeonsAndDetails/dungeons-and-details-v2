import axios from 'axios';
import { Form, Formik } from 'formik';
import { Input } from 'postcss';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import * as Yup from 'yup';
import Radio from '../../components/Radio';
import TextInputField from '../../components/TextInputField';
import { characterCreationContext } from '../../context/characterCreationContext';
import { adminRoutes, homeRoutes, routes } from '../../routes';
// Name Class Race/Sex
// Build a context
// submit form and saves the current data on display and server
// Display ifmoration from server for each case bellow the form.

const submit = () => {};

const BuildHeaders = ({ headers, step, setStep }) => {
	console.log(headers);
	return (
		<div>
			<div className={`grid grid-cols-${headers.length} text-center`}>
				{headers.map((header, i) => {
					return (
						<div className={`${step === i ? 'font-bold  border-2' : ''}`} key={header.name}>
							<button type="button" onClick={() => setStep(i)}>
								{header.name}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
const BuildDisplays = ({ step, setStep }) => {
	const characterCreation = useContext(characterCreationContext);
	console.log(characterCreation.state);
	switch (step) {
		case 0:
			return (
				<div>
					<div>
						<TextInputField type="text" name="name" placeholder="Name" />
						<Button onClick={() => setStep(step + 1)} type="button">
							Next
						</Button>
					</div>
				</div>
			);
		case 1:
			return (
				<div>
					<div>
						<TextInputField type="text" name="class" placeholder="Class" />
						<Button onClick={() => setStep(step + 1)} type="button">
							Next
						</Button>
					</div>
				</div>
			);
		case 2:
			return (
				<div>
					<div>
						<TextInputField type="text" name="race" placeholder="Race" />
						<TextInputField type="text" name="sex" placeholder="Sex" />
						<Button onClick={() => setStep(step + 1)} type="button">
							Next
						</Button>
						<div>
							<Button type="submit">Submit</Button>
						</div>
					</div>
				</div>
			);
		case 3:
			return (
				<div>
					<div>hi</div>
				</div>
			);

		default:
			return null;
	}
};

const Test = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		race: Yup.string().required('Required'),
		class: Yup.string().required('Required'),
		sex: Yup.string().required('Required'),
	});
	const characterCreation = useContext(characterCreationContext);
	console.log(characterCreation.state);

	const [step, setStep] = useState(0);

	return (
		<>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					name: '',
					class: '',
					race: '',
					sex: '',
				}}
				onSubmit={characterCreation.createCharacterCreation}
			>
				{(props) => {
					console.log('Props', props);
					return (
						<Form onSubmit={props.handleSubmit}>
							<BuildHeaders step={step} setStep={setStep} headers={props.headers} />
							<BuildDisplays step={step} setStep={setStep} />
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

Test.defaultProps = {
	headers: [
		{
			name: 'name',
		},
		{
			name: 'class',
		},
		{
			name: 'raceSex',
		},
		{
			name: 'a',
		},
		{
			name: 'b',
		},
		{
			name: 'c',
		},
	],
};
export default Test;
