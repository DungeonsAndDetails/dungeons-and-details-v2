import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import EditAttributeField from '../../components/EditItemField';
import { spellSchoolListContext } from '../../context/spellSchoolListContext';

const SpellSchools = () => {
	const spellSchools = useContext(spellSchoolListContext);

	const save = (values, id) => {
		spellSchools.updateSpellSchools(values, id);
	};

	return (
		<>
			<div>
				<span className="">Spell School List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Spell School Name</span>
					</div>
					<div>
						<span>Spell School Description</span>
					</div>
				</div>
				<div className="border">
					{spellSchools.state.spellSchools.map((spellSchool) => {
						return (
							<EditAttributeField
								key={spellSchool._id}
								id={spellSchool._id}
								name={spellSchool.name}
								description={spellSchool.description}
								onDelete={() => spellSchools.deleteSpellSchool(spellSchool._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Spell</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
				}}
				onSubmit={spellSchools.createSpellSchool}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Spell School Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Spell School Description" />
						</div>
						<div className="flex">
							<Button className="border mb-3 mt-auto py-2 w-full" type="submit">
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default SpellSchools;
