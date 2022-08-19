import React, { useState, useContext } from 'react';
import Button from '../../../../components/Button';
import TextInputField from '../../../../components/TextInputField';
import { characterCreationContext } from '../../../../context/characterCreationContext';
import BuildAbilityScores from './BuildAbilityScores';
import BuildBackground from './BuildBackground';
import BuildClasses from './BuildClasses';
import BuildEquipment from './BuildEquiment';
import BuildFinal from './BuildFinal';
import BuildGender from './BuildGender';
import BuildRaces from './BuildRaces';
import BuildSaves from './BuildSaves';
import BuildSkills from './BuildSkills';
import BuildSubclasses from './BuildSubclasses';
import BuildSubraces from './BuildSubraces';

const BuildDisplays = (props) => {
	const {
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
	} = props;
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

	switch (step) {
		case 0:
			return (
				// Click to import picture
				// Radio to un hide sub-race based on what race is selected. then un hide the example names
				<div>
					<div className="grid justify-between grid-flow-col">
						<div className="grid justify-center content-center">
							<div className="max-w-sm">
								<TextInputField type="text" name="name" placeholder="Name" />
								<TextInputField type="text" name="family" placeholder="Family Name" />
								<TextInputField type="text" name="title" placeholder="Title" />
							</div>
							<BuildGender />
						</div>
						<div className="border-2">Picture</div>
						<div className="w-fit h-fit">
							<span>Races</span>
							<div className="overflow-y-auto max-h-96">
								<BuildRaces setFieldValue={setFieldValue} races={races} />
							</div>
						</div>
						<div className="">
							<span>Sub-Races</span>
							<div className="overflow-y-auto h-96 border-2">
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
						<div className="border-2 col-span-2 col-start-1">
							<div className="border-b">
								<span className="">Class Names</span>
							</div>
							<div>
								<div className="overflow-y-auto min-w-fit max-h-96">
									<BuildClasses setFieldValue={setFieldValue} classes={classes} />
								</div>
							</div>
						</div>
						<div className="grid  my-auto   col-start-3 col-span-3 border-2">
							<span className="h-min border-b top-0 ">Description</span>
							<div className="">{values.class.description}</div>
						</div>
						<div className="col-start-7 col-span-2 ">
							<div className="max-h-96 overflow-y-auto">
								<BuildSubclasses
									selectedClass={values.class}
									subclasses={subclasses}
									setFieldValue={setFieldValue}
								/>
							</div>
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
						<div className="border-2">
							<div>
								<BuildBackground setFieldValue={setFieldValue} />
							</div>
							<div>{values.background.description}</div>
						</div>
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
				//Modifiers need to be implimented
				<div>
					<div className="">
						<div className="">
							<span>Ability Scores</span>
						</div>
						<div>
							<BuildAbilityScores values={values} setFieldValue={setFieldValue} />
						</div>
						<div>
							<span>Description of stat spreads *3 of them</span>
						</div>
					</div>
				</div>
			);
		case 4:
			return (
				<div className="flex flex-col-2 gap-8">
					<div>
						<div>
							<span className="font-bold underline">Skills</span>
						</div>
						<div>
							<BuildSkills values={values} setFieldValue={setFieldValue} />
						</div>
					</div>
					<div>
						<div>
							<span className="font-bold underline">Saves</span>
						</div>
						<div>
							<BuildSaves values={values} setFieldValue={setFieldValue} />
						</div>
					</div>
				</div>
			);
		case 5:
			return (
				<div>
					<div>
						<BuildEquipment setFieldValue={setFieldValue} />
					</div>
					<div>{values.kit.description}</div>
				</div>
			);
		case 6:
			return (
				<div>
					<BuildFinal values={values} />
				</div>
			);

		default:
			return null;
	}
};

export default BuildDisplays;
