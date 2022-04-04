import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import EditAttributeField from '../../components/EditItemField';
import { featListContext } from '../../context/featListContext';

const Feats = () => {
	const feats = useContext(featListContext);

	const save = (values, id) => {
		feats.updateFeat(values, id);
	};

	return (
		<>
			<div>
				<span className="">Feat List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Feat Name</span>
					</div>
					<div>
						<span>Feat Description</span>
					</div>
				</div>
				<div className="border">
					{feats.state.feats.map((feat) => {
						return (
							<EditAttributeField
								key={feat._id}
								id={feat._id}
								name={feat.name}
								description={feat.description}
								onDelete={() => feats.deleteFeat(feat._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Feat</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
					attributeReliance: 0,
				}}
				onSubmit={feats.createFeat}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Feat Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Feat Description" />
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

export default Feats;
