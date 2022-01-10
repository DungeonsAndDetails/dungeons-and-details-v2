import React, { useState } from 'react';

const Input = (props) => {
	const [focus, setFocus] = useState(false);
	console.log(props);
	return (
		<div key={props.name} className="p-5">
			<div>
				<label
					htmlFor={props.name}
					className={`${props.labelClassName}  ${focus ? 'text-white' : 'text-gray-400'}`}
				>
					{props.label}
				</label>
			</div>
			<div>
				<input
					name={props.name}
					type={props.type}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={`${props.className}   w-full bg-inputbackgroundcolor`}
				/>
				{props.meta.touched && props.meta.error && (
					<span className="flex text-center">{props.meta.error}</span>
				)}
			</div>
		</div>
	);
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
