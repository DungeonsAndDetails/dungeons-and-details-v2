import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const [focus, setFocus] = useState(false);

	return (
		<div key={props.name} className={`${props.labelLeft ? 'flex justify-between ' : ''}pb-3`}>
			{props.label && (
				<div className={props.labelLeft ? 'm-auto pr-3 w-2/5' : ''}>
					<label
						htmlFor={props.name}
						className={`${props.labelClassName}  ${focus ? 'text-white' : 'text-gray-400'}`}
					>
						{props.label}
					</label>
				</div>
			)}
			<div className="w-full">
				<input
					name={props.name}
					type={props.type}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={`${props.className} w-full bg-inputbackgroundcolor`}
				/>
				{props.meta.touched && props.meta.error && (
					<span className="flex text-center">{props.meta.error}</span>
				)}
			</div>
		</div>
	);
};

Input.propTypes = {
	labelLeft: PropTypes.string,
	label: PropTypes.string,
};

Input.defaultProps = {
	labelleft: false,
};

export default Input;
