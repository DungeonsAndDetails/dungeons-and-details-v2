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
						className={`${menuClassName}  bg-white divide-y flex flex-col rounded list-none text-black absolute`}
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
