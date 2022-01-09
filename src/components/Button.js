import React from 'react';

const Button = ({ label, onClick, className, type }) => {
	return (
		<button className={`${className} bg-blue-400`} onClick={onClick} type={type}>
			{label}
		</button>
	);
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
