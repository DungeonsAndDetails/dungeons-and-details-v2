import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import EditAttributeField from '../../components/EditItemField';
import { modifierListContext } from '../../context/modifiersContext';

const Modifiers = () => {
	const modifierList = useContext(modifierListContext);

	const save = (values, id) => {
		modifierList.updateModifier(values, id);
	};

	return (
		<>
			<div>
				<span>Modifier List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-2 gap-5 text-white">
					<div>
						<span>Modifier Name</span>
					</div>
					<div>
						<span>Modifier Value</span>
					</div>
				</div>
				<div className="border">
					{modifierList.state.modifiers.map((modifier) => {
						return (
							<EditAttributeField
								key={modifier._id}
								id={modifier._id}
								name={modifier.name}
								description={modifier.value}
								onDelete={() => modifierList.deleteModifier(modifier._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Modifier</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					value: '',
					values: [],
				}}
				onSubmit={modifierList.createModifier}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Modifier Name" />
						</div>
						<div>
							<TextInputField type="text" name="value" label="Modifier Value" />
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

export default Modifiers;
