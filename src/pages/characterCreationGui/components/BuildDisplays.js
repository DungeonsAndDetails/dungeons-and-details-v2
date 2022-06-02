import React, { useState, useContext } from 'react';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';
import { characterCreationContext } from '../../../context/characterCreationContext';
import BuildClasses from './BuildClasses';
import BuildRaces from './BuildRaces';
import BuildSubclasses from './BuildSubclasses';
import BuildSubraces from './BuildSubraces';

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
	races,
	subraces,
	subclasses,
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
	// console.log('errors', errors);
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
							<BuildRaces setFieldValue={setFieldValue} races={races} />
						</div>

						<div className="grid w-fit h-fit col-start-11 col-span-2">
							<span>Sub-Races</span>
							<div className=" overflow-auto h-44 border-2">
								<BuildSubraces
									selectedRace={values.race}
									setFieldValue={setFieldValue}
									subraces={subraces}
								/>
							</div>
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
					<div className="grid  grid-cols-12">
						<div className="border-2 col-span-1 col-start-1">
							<div className="border-b">
								<span className="">Class Names</span>
							</div>
							<div>
								<div>
									<BuildClasses setFieldValue={setFieldValue} classes={classes} />
								</div>
							</div>
						</div>
						<div className="grid  my-auto   col-start-3 col-span-3 border-2">
							<span className="h-min border-b top-0 ">Description</span>
							<div className="">{values.class.description}</div>
						</div>
						<div className="col-start-7 col-span-1 ">
							<span className="border-b">
								<BuildSubclasses
									selectedClass={values.class}
									subclasses={subclasses}
									setFieldValue={setFieldValue}
								/>
							</span>
						</div>
						<div className="col-start-9 col-span-3 ">
							<span className="border-b">{values.subclass.description}</span>
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
						<div className="border-2">DM sponsered heritage backgrounds</div>
						<div className="border-2">Decriptions of heritage/background</div>
						<div>
							<TextInputField
								className="bg-transparent"
								type="text"
								name="backstory"
								placeholder="Custom Backstory Information"
							/>
						</div>
						<div>
							<Button onClick={validateStepThree} type="button">
								Next
							</Button>
						</div>
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
