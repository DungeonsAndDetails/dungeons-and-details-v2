import * as Yup from 'yup';
import { characterCreationContext } from '../../context/characterCreationContext';
import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import BuildDisplays from './components/BuildDisplays';
import BuildHeaders from './components/BuildHeaders';

const CharacterCreationGui = ({ headers, classes }) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		race: Yup.string().required('Required'),
		class: Yup.string().required('Required'),
		sex: Yup.string().required('Required'),
	});
	const characterCreation = useContext(characterCreationContext);
	// console.log(characterCreation.state);

	const [step, setStep] = useState(0);

	return (
		<>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					name: '',
					family: '',
					title: '',

					class: '',
					subRace: '',
					race: '',
					sex: '',
				}}
				onSubmit={characterCreation.createCharacterCreation}
			>
				{({ validateField, errors, touched, values }) => {
					return (
						<Form>
							<BuildHeaders step={step} setStep={setStep} headers={headers} />
							<BuildDisplays
								step={step}
								setStep={setStep}
								errors={errors}
								values={values}
								touched={touched}
								classes={classes}
							/>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

CharacterCreationGui.defaultProps = {
	headers: [
		{
			name: 'name',
		},
		{
			name: 'class',
		},
		{
			name: 'background',
		},
		{
			name: 'ablitlity scores',
		},
		{
			name: 'skills',
		},
		{
			name: 'Final',
		},
	],
	classes: [
		{
			name: 'wizard',
		},
		{
			name: 'paladin',
		},
		{
			name: 'monk',
		},
	],
};

export default CharacterCreationGui;
