import { Field } from 'formik';
import React from 'react';
import Input from '../Input';

const TextInputField = (props) => {
	return (
		<Field name={props.name}>
			{({ field, meta }) => <Input {...props} {...field} meta={meta} />}
		</Field>
	);
};

TextInputField.propTypes = {};

TextInputField.defaultProps = {};

export default TextInputField;
