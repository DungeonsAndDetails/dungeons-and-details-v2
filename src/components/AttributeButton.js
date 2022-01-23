import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AttributeButton = ({ label, value, decrementOnChange, incrementOnChange }) => {
	return (
		<div className=" border-2 min-w-[55%] max-w-fit justify-self-center border-white rounded-full px-2">
			<div className="justify-center font-semibold  flex">
				<span>{label}: </span>
			</div>
			<div className="flex justify-center text-3xl">
				<span>{Math.floor(value / 2 - 5)}</span>
			</div>
			<div className="flex justify-center  pb-2 ">
				<Button
					onClick={decrementOnChange}
					className="w-6 h-5 items-center flex justify-center pb-1 my-auto text-bold text-2xl border"
				>
					-
				</Button>
				<span className="w-8 mx-2 border-2 rounded-xl text-semibold text-center">{value}</span>
				<Button
					onClick={incrementOnChange}
					className="w-6 h-5 items-center flex justify-center pb-1 my-auto text-bold text-2xl border"
				>
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
	incrementOnChange: PropTypes.func.isRequired,
};

AttributeButton.defaultProps = {};

export default AttributeButton;
