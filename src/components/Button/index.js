import React from 'react';

const Button = ({ onClick, className, type, children, value }) => {
	return (
		<button
			className={`${className} bg-slate-800 rounded py-1 border border-slate-800 hover:border-slate-300 w-full h-10`}
			onClick={onClick}
			type={type}
			value={value}
		>
			{children}
		</button>
	);
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
