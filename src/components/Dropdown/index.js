import React, { useState } from 'react';
// buttonClassName
// menuClassName

const Dropdown = ({ buttonClassName, children, buttonName, menuClassName }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="static">
			<div className="dropdown">
				<button className={`${buttonClassName}    `} type="button" onClick={() => setOpen(!open)}>
					{buttonName}
				</button>
				{open && (
					<div
						onClick={() => setOpen(!open)}
						className={`${menuClassName}  bg-testPrimary border px-2 py-1 text-white divide-slate-200  divide-y flex flex-col rounded list-none  absolute`}
					>
						{children}
					</div>
				)}
			</div>
		</div>
	);
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
