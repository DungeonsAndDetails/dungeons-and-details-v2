import React from 'react';
import { Form, Formik, Field } from 'formik';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import Select from 'react-select';

const CustomSelect = (props) => {
	const { form, field, options, defaultValue } = props;
	const onChange = (value) => {
		form.setFieldValue(field.name, value);
		console.log('value', value);
	};
	console.log('props', props);
	return (
		<Select
			defaultValue={defaultValue}
			isMulti
			name="colors"
			options={props.options}
			onChange={onChange}
			className="basic-multi-select text-black"
			classNamePrefix="select"
		/>
	);
};

const Test = (props) => {
	const onCreate = () => {
		console.log('submitted');
	};
	const { options, name, type, defaultValue } = props;
	return (
		<Formik
			initialValues={{
				singleLanguage: '',
				color: [],
			}}
		>
			{(props) => {
				console.log('Formik Values', props.values);
				return (
					<Field
						defaultValue={defaultValue}
						className="custom-select"
						name="multiLanguages"
						options={options}
						component={CustomSelect}
						placeholder="Select multi languages..."
						isMulti={true}
					/>
				);
			}}
		</Formik>
	);
};

Test.defaultProps = {
	defaultValue: { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
	options: [
		{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
		{ value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
		{ value: 'purple', label: 'Purple', color: '#5243AA' },
		{ value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
		{ value: 'orange', label: 'Orange', color: '#FF8B00' },
		{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
		{ value: 'green', label: 'Green', color: '#36B37E' },
		{ value: 'forest', label: 'Forest', color: '#00875A' },
		{ value: 'slate', label: 'Slate', color: '#253858' },
		{ value: 'silver', label: 'Silver', color: '#666666' },
	],
};

export default Test;
