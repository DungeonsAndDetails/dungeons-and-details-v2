import * as Yup from 'yup';
import { characterCreationContext } from '../../context/characterCreationContext';
import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import BuildDisplays from './components/BuildDisplays';
import BuildHeaders from './components/BuildHeaders';
import { classListContext } from '../../context/classListContext';

const CharacterCreationGui = ({ headers }) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		race: Yup.string().required('Required'),
		class: Yup.string().required('Required'),
		sex: Yup.string().required('Required'),
	});
	const characterCreation = useContext(characterCreationContext);
	const classes = useContext(classListContext);
	// console.log(characterCreation.state);
	console.log('Classes', classes);

	const [step, setStep] = useState(0);

	return (
		<>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					name: '',
					family: '',
					title: '',

					class: {},
					subClass: {},
					subRace: '',
					race: '',
					sex: '',
				}}
				onSubmit={characterCreation.createCharacterCreation}
			>
				{(props) => {
					console.log('props', props);
					return (
						<Form>
							<BuildHeaders step={step} setStep={setStep} headers={headers} />
							<BuildDisplays
								step={step}
								setStep={setStep}
								classes={classes.state.classes}
								{...props}
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
};

export default CharacterCreationGui;
