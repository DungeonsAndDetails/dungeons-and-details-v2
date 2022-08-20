import * as Yup from 'yup';
import { characterCreationContext } from '../../context/characterCreationContext';
import React, { useState, useContext, useEffect } from 'react';
import { Form, Formik } from 'formik';
import BuildDisplays from './components/buildDisplays';
import BuildHeaders from './components/BuildHeaders';
import { classListContext } from '../../context/classListContext';
import { raceListContext } from '../../context/raceListContext';
import { subraceListContext } from '../../context/subraceListContext';

//All buttons could be turned into dropdown; Cosmetic

const CharacterCreationGui = ({ headers }) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		race: Yup.string().required('Required'),
		class: Yup.string().required('Required'),
		sex: Yup.string().required('Required'),
	});
	const characterCreation = useContext(characterCreationContext);
	const classes = useContext(classListContext);
	const races = useContext(raceListContext);
	const subraces = useContext(subraceListContext);

	// console.log('characterCreation.state', characterCreation.state);
	// console.log('Classes', classes);
	// console.log('Races', races);
	// console.log('Subraces', subraces);

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
					subclass: {},
					subrace: '',
					race: '',
					sex: '',
					background: '',
					attributes: {
						strength: { value: 10, mod: 0 },
						dexterity: { value: 10, mod: 0 },
						constitution: { value: 10, mod: 0 },
						intelligence: { value: 10, mod: 0 },
						wisdom: { value: 10, mod: 0 },
						charisma: { value: 10, mod: 0 },
					},
					// skills might be broke*
					skills: {
						AnimalHandling: 0,
						Insight: 0,
						Medicine: 0,
						Perception: 0,
						Survival: 0,
						Deception: 0,
						Investigation: 0,
						Nature: 0,
						Religion: 0,
						Athletics: 0,
						Acrobatics: 0,
						stealth: 0,
					},
					kit: '',
				}}
				onSubmit={characterCreation.createCharacterCreation}
			>
				{(props) => {
					console.log('initialValues', props.values);

					return (
						<Form>
							<BuildHeaders step={step} setStep={setStep} headers={headers} />
							<BuildDisplays
								step={step}
								setStep={setStep}
								classes={classes.state.classes}
								races={races.state.races}
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
			name: 'ability scores',
		},
		{
			name: 'skills',
		},
		{
			name: 'equipment',
		},
		{
			name: 'Final',
		},
	],
};

export default CharacterCreationGui;
