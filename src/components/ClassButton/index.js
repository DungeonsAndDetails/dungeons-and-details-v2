import React from 'react';

const ClassButton = ({ onClick, className, type, children, display }) => {
	return (
		<button
			className={`${className} bg-slate-800 p-1 rounded shadow-slate-500 shadow-sm border border-slate-800 hover:border-slate-300`}
			onClick={onClick}
			type={type}
		>
			{display}
		</button>
	);
};

ClassButton.propTypes = {};

ClassButton.defaultProps = {};

export default ClassButton;
