import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { spellListContext } from '../../context/spellListContext';
import EditAttributeField from '../../components/EditItemField';

const Spells = () => {
	const spells = useContext(spellListContext);

	const save = (values, id) => {
		spells.updateSpells(values, id);
	};

	return (
		<>
			<div>
				<span className="">Spell List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Spell Name</span>
					</div>
					<div>
						<span>Spell Description</span>
					</div>
				</div>
				<div className="border">
					{spells.state.spells.map((spell) => {
						return (
							<EditAttributeField
								key={spell._id}
								id={spell._id}
								name={spell.name}
								description={spell.description}
								onDelete={() => spells.deleteSpell(spell._id)}
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
					attributeReliance: 0,
				}}
				onSubmit={spells.createSpell}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Skill Name" />
						</div>
						<div>
							<TextInputField type="text" name="level" label="Spell Level" />
						</div>
						<div>
							<TextInputField type="number" name="castingTime" label="Casting Time" />
						</div>
						<div>
							<TextInputField type="text" name="school" label="Spell School" />
						</div>
						<div>
							<TextInputField type="text" name="concentration" label="Concentration?" />
						</div>
						<div>
							<TextInputField type="text" name="range" label="Spell Range" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Skill Description" />
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

export default Spells;
