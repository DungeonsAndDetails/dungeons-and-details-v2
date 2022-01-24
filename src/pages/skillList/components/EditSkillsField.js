import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import TextInputField from '../../../components/TextInputField';

const EditSkillsField = ({
	id,
	name,
	description,
	onDelete,
	onSave,
	attributeReliance,
	attributeOptions,
}) => {
	const [edit, setEdit] = useState(false);

	const submit = (values) => {
		console.log('saving');
		onSave(values, id);
		setEdit(false);
	};

	return (
		<>
			{!edit && (
				<div className="grid grid-cols-5 gap-5 text-white">
					<div>
						<span>{name}</span>
					</div>
					<div>
						<span>{description}</span>
					</div>
					<div>
						<span>{attributeOptions.filter((item) => item.props.value === attributeReliance)}</span>
					</div>
					<div className="">
						<button onClick={() => setEdit(!edit)}>Edit</button>
					</div>
					<div>
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
						attributeReliance,
					}}
					onSubmit={submit}
				>
					<Form>
						<div className="grid grid-cols-5 gap-5">
							<div>
								<TextInputField type="text" name="name" />
							</div>
							<div>
								<TextInputField type="text" name="description" />
							</div>
							<div>
								<Field as="select" name="attributeReliance">
									{attributeOptions}
								</Field>
							</div>
							<div className="">
								<button type="submit">Save</button>
							</div>
							<div>
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

EditSkillsField.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	attributeReliance: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	attributeOptions: PropTypes.array.isRequired,
};

EditSkillsField.defaultProps = {};

export default EditSkillsField;
