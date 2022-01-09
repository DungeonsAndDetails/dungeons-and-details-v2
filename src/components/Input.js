import React, { useState } from 'react';

const Input = (props) => {
	const [focus, setFocus] = useState(false);
	console.log(focus);
	return (
		<div key={props.name} className="pb-5 ">
			<div>
				<label
					htmlFor={props.name}
					className={`font-semibold uppercase italic ${focus ? 'text-white' : 'text-gray-400'}`}
				>
					{props.label}
				</label>
			</div>
			<div>
				<input
					{...props}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className="focus:font-semibold  w-full bg-inputbackgroundcolor"
				/>
			</div>
		</div>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
