import React from 'react';
//DELETE border-2 border-black DELETE, using it for temp project
const Button = ({ onClick, className, type, children }) => {
	return (
		<button className={`${className} border-2 border-black `} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
