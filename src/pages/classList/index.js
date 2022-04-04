import React, { useContext } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { classListContext } from '../../context/classListContext';
import EditAttributeField from '../../components/EditItemField';

const Classes = () => {
	const classes = useContext(classListContext);

	const save = (values, id) => {
		classes.updateClass(values, id);
	};

	return (
		<>
			<div>
				<span className="">Class List</span>
			</div>
			<div className="py-3">
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>Class Name</span>
					</div>
					<div>
						<span>Class Description</span>
					</div>
				</div>
				<div className="border">
					{classes.state.classes.map((class_) => {
						return (
							<EditAttributeField
								key={class_._id}
								id={class_._id}
								name={class_.name}
								description={class_.description}
								onDelete={() => classes.deleteClass(class_._id)}
								onSave={save}
							/>
						);
					})}
				</div>
			</div>
			<div>
				<span>Create New Class</span>
			</div>
			<Formik
				initialValues={{
					name: '',
					description: '',
					attributeReliance: 0,
				}}
				onSubmit={classes.createClass}
			>
				<Form>
					<div className="grid grid-cols-3 gap-5">
						<div>
							<TextInputField type="text" name="name" label="Class Name" />
						</div>
						<div>
							<TextInputField type="text" name="description" label="Class Description" />
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

export default Classes;
