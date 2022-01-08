import React from 'react';

const Input = (props) => {
	return (
		<div>
			<div>
				<label>{props.label}</label>
			</div>
			<div>
				<input {...props} />
			</div>
		</div>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
