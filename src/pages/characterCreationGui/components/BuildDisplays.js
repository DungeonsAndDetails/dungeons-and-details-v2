import React, { useState, useContext } from 'react';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import { characterCreationContext } from '../../../context/characterCreationContext';
import BuildClasses from './BuildClasses';

const BuildDisplays = ({
	step,
	setStep,
	validateField,
	errors,
	touched,
	values,
	classes,
	setFieldValue,
	selectedClass,
}) => {
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
							<div className="border-b">
								<span className="">Class Names</span>
							</div>
							<div>
								<div>
									<BuildClasses setFieldValue={setFieldValue} classes={classes} />
								</div>
							</div>
						</div>
						<div className="grid grid-rows-5 col-start-3 col-span-3 border-2">
							<label className=" border-b">Description</label>
							<div className="grid row-start-2 row-span-4">{values.class.description}</div>
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

export default BuildDisplays;
