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
import ClassButton from '../../components/ClassButton';
// Name Class Race/Sex
// use yup to validate
// make sub-race hidden until checked with race radio

const submit = () => {};

const BuildHeaders = ({ headers, step, setStep }) => {
	console.log(headers);
	return (
		<div>
			<div className={`grid grid-cols-${headers.length} text-center`}>
				{headers.map((header, i) => {
					return (
						<div className={`${step === i ? 'font-bold ' : ''} border-b-2`} key={header.name}>
							<button
								className={`${step === i ? 'font-bold border-2 ' : ''} capitalize my-2 p-1 `}
								type="button"
								onClick={() => setStep(i)}
							>
								{header.name}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
const BuildClasses = ({ classes }) => {
	console.log(classes);
	return (
		<div>
			<div>
				{classes.map((classes, i) => {
					return (
						<div>
							<ClassButton className="capitalize">{classes.name}</ClassButton>
						</div>
					);
				})}
			</div>
		</div>
	);
};
const BuildDisplays = ({ step, setStep, validateField, errors, touched, values, classes }) => {
	const characterCreation = useContext(characterCreationContext);
	const validateStepOne = async () => {
		if (!errors.name) {
			setStep(step + 1);
		}
	};
	const validateStepTwo = async () => {
		if (!errors.class) {
			setStep(step + 1);
		}
	};
	const validateStepThree = async () => {
		if (!errors.sex && !errors.race) {
			setStep(step + 1);
		}
	};
	const validateStepFour = async () => {
		if (!errors.name) {
			setStep(step + 1);
		}
	};
	// console.log(characterCreation.state);
	console.log('errors', errors);
	console.log('values', values);

	switch (step) {
		case 0:
			return (
				// Click to import picture
				// Radio to un hide sub-race based on what race is selected. then un hide the example names
				<div>
					<div className="grid pt-2 grid-cols-12 ">
						<div className=" grid col-span-2 col-start-2  justify-center items-center content-center">
							<div className="   max-w-sm">
								<TextInputField type="text" name="name" placeholder="Name" />
								<TextInputField type="text" name="family" placeholder="Family Name" />
								<TextInputField type="text" name="title" placeholder="Title" />
							</div>

							<TextInputField type="radio" id="male" name="sex" label="Male" value="male" />
							<TextInputField type="radio" id="female" name="sex" label="Female" value="female" />
						</div>
						<div className="grid border-2 col-start-5 col-span-3">Picture</div>
						<div className="grid w-fit h-fit col-span-2 col-start-9">
							<span>Races</span>
							<TextInputField type="radio" id="human" name="race" label="Human" value="human" />
							<TextInputField type="radio" id="elf" name="race" label="Elf" value="elf" />
							<TextInputField type="radio" id="dwarf" name="race" label="Dwarf" value="dwarf" />
							<TextInputField type="radio" id="orc" name="race" label="Orc" value="orc" />
							<TextInputField
								type="radio"
								id="celestial"
								name="race"
								label="Celestial"
								value="celestial"
							/>
							<TextInputField type="radio" id="male" name="race" label="Custom" value="custom" />
						</div>

						<div className="grid w-fit h-fit col-start-11 col-span-2">
							<span>Sub-Races</span>
							<TextInputField
								type="radio"
								id="redorc"
								name="subRace"
								label="Red Orc"
								value="redorc"
							/>
							<TextInputField
								type="radio"
								id="cavedwarf"
								name="subRace"
								label="Cave Dwarf"
								value="cavedwarf"
							/>
							<TextInputField
								type="radio"
								id="darkelf"
								name="subRace"
								label="Dark Elf"
								value="darkelf"
							/>
						</div>
					</div>
					<div className="grid pt-4 grid-cols-12">
						<span className="grid col-start-1 col-span-4 border-2 text-center">
							Selecting a race will give you example names of that race
						</span>
						<span className="grid col-start-9 col-span-4 border-2 text-center">
							Stats of the selected race
						</span>
					</div>
					<div className="grid grid-cols-12 pt-10 ">
						<div className="grid col-start-6 col-span-1">
							<Button onClick={validateStepOne} type="button">
								Next
							</Button>
						</div>
					</div>
				</div>
			);
		case 1:
			return (
				// make an array that adds more class buttons
				<div className="grid pt-2">
					<div className="grid grid-cols-12">
						<div className="border-2">
							<span>Class Names</span>
							<div>
								<div>
									<BuildClasses classes={classes} />
								</div>
							</div>
						</div>
					</div>
					<div>
						<Button onClick={validateStepTwo} type="button">
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
						<Button onClick={validateStepThree} type="button">
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
					<div>{values.name}</div>
				</div>
			);

		default:
			return null;
	}
};

const Test = ({ headers, classes }) => {
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

Test.defaultProps = {
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

export default Test;
