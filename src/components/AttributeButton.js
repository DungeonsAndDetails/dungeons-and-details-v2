import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AttributeButton = ({ label, value, decrementOnChange, IncrementOnChange }) => {
	return (
		<div className="bg-white">
			<div className="justify-center">
				<span>{label}: </span>
			</div>
			<div className="flex p-2">
				<Button onClick={decrementOnChange} className="w-8 border">
					-
				</Button>
				<span className="w-8 text-center">{value}</span>
				<Button onClick={IncrementOnChange} className="w-8 border">
					+
				</Button>
			</div>
		</div>
	);
};
AttributeButton.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	decrementOnChange: PropTypes.func.isRequired,
	IncrementOnChange: PropTypes.func.isRequired,
};

AttributeButton.defaultProps = {};

export default AttributeButton;
