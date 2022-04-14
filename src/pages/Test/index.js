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
const BuildDisplays = ({ step, setStep, validateField, errors, touched, values }) => {
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
				<div className="grid grid-cols-12 ">
					<div className=" grid col-span-2 col-start-3 pt-2 justify-center items-center content-center">
						<div className="   max-w-sm">
							<TextInputField type="text" name="name" placeholder="Name" />
							<TextInputField type="text" name="family" placeholder="Family Name" />
							<TextInputField type="text" name="title" placeholder="Title" />
						</div>

						<TextInputField type="radio" id="male" name="sex" label="Male" value="male" />
						<TextInputField type="radio" id="female" name="sex" label="Female" value="female" />

						<Button onClick={validateStepOne} type="button">
							Next
						</Button>
					</div>
					<div className="grid w-fit h-fit col-span-2 col-start-8">
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
					<div className="grid w-fit h-fit col-start-10 col-span-2">
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
			);
		case 1:
			return (
				<div>
					<div>
						<TextInputField type="text" name="class" placeholder="Class" />
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

const Test = ({ headers }) => {
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
};
export default Test;
