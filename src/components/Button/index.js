import React from 'react';

const Button = ({ onClick, className, type, children }) => {
	return (
		<button
			className={`${className} bg-slate-800 p-1 rounded shadow-slate-500 shadow-sm border border-slate-800 hover:border-slate-300`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
