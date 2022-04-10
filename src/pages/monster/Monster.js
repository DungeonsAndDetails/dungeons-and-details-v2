import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { attributesContext } from '../../context/attributeContext';
import EditAttributeField from './components/EditMonsterField';

const Monsters = () => {
	const attributes = useContext(attributesContext);

	const save = (values, id) => {
		attributes.updateAttribute(values, id);
	};

	return (
		<>
			<div>
				<span className="text-white">Attribute List</span>
			</div>
			<div className="text-white py-3">
				<div className="grid grid-cols-3 gap-5">
					<div>
						<span>Attribute Name</span>
					</div>
					<div>
						<span>Attribute Description</span>
					</div>
				</div>
				<div className="border">
					{attributes.state.attributes.map((attribute) => {
						return (
							<EditAttributeField
								key={attribute._id}
								id={attribute._id}
								name={attribute.name}
								description={attribute.description}
								onDelete={() => attributes.deleteAttribute(attribute._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span className="text-white">Create New Attribute</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					// attributeReliance: null,
					description: '',
				}}
				onSubmit={attributes.createAttribute}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Attribute Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Attribute Description" />
						</div>
						<div className="flex">
							<Button
								className="bg-white border border-gray-1 mb-3 mt-auto py-2 w-full"
								type="submit"
							>
								Submit
							</Button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default Monsters;
