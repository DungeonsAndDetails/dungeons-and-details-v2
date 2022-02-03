import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import TextInputField from './TextInputField';

const EditAttributeField = ({ id, name, description, onDelete, onSave }) => {
	const [edit, setEdit] = useState(false);

	const submit = (values) => {
		onSave(values, id);
		setEdit(false);
	};

	return (
		<>
			{!edit && (
				<div className="grid grid-cols-3 gap-5 text-white">
					<div>
						<span>{name}</span>
					</div>
					<div>
						<span>{description}</span>
					</div>
					<div className="flex justify-between">
						<button onClick={() => setEdit(!edit)}>Edit</button>
						<button onClick={() => onDelete(id)}>Delete</button>
					</div>
				</div>
			)}
			{edit && (
				<Formik
					// TODO: Add validation
					initialValues={{
						name,
						description,
					}}
					onSubmit={submit}
				>
					<Form>
						<div className="grid grid-cols-3 gap-5 text-white">
							<div>
								<TextInputField type="text" name="name" />
							</div>
							<div>
								<TextInputField type="text" name="description" />
							</div>
							<div className="flex justify-between">
								<button type="submit">Save</button>
								<button type="button" onClick={() => setEdit(!edit)}>
									Cancel
								</button>
							</div>
						</div>
					</Form>
				</Formik>
			)}
		</>
	);
};

EditAttributeField.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
};

EditAttributeField.defaultProps = {};

export default EditAttributeField;
