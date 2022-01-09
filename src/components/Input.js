import React, { useState } from 'react';

const Input = (props) => {
	const [focus, setFocus] = useState(false);

	console.log(props);
	return (
		<div className="pb-5" key={props.name}>
			<div>
				<label className={`font-semibold ${focus ? 'text-white' : 'text-gray-400'}`}>
					{props.label}
				</label>
			</div>
			<div>
				<input
					{...props}
					className="underline w-full"
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>
			</div>
		</div>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
