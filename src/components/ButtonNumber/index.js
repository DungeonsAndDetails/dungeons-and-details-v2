import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

const ButtonNumber = ({ decrementOnChange, incrementOnChange, className }) => {
	return (
		<div className="flex flex-col">
			<Button className={`${className} border-2 `} onClick={incrementOnChange}>
				+
			</Button>
			<Button className={`${className} border-2 `} onClick={decrementOnChange}>
				-
			</Button>
		</div>
	);
};

ButtonNumber.propTypes = {
	decrementOnChange: PropTypes.func.isRequired,
	incrementOnChange: PropTypes.func.isRequired,
};

ButtonNumber.defaultProps = {};

export default ButtonNumber;
