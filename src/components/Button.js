import React from 'react';

const Button = ({ onClick, className, type, children }) => {
	return (
		<button className={`${className} bg-inputbackgroundcolor`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
