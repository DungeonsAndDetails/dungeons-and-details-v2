import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputSelect = (props) => {
	const [focus, setFocus] = useState(false);
	return (
		<div className={`${props.labelLeft ? 'flex justify-between ' : ''}`}>
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
			<div className="w-full h-full">
				{(props.type === 'text' || props.type === 'number') && (
					<input
						name={props.name}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						className={`${props.className} w-full bg-slate-800 text-slate-200 h-full`}
					/>
				)}
				{props.type === 'select' && (
					<select
						id={props.id}
						name={props.name}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						className={`${props.className} w-full bg-slate-800 text-slate-200 h-full`}
					>
						<option hidden>Choose...</option>
						{props.options.map((option) => {
							return (
								<option key={option._id} value={option._id}>
									{option.name}
								</option>
							);
						})}
					</select>
				)}
				{props.meta.touched && props.meta.error && (
					<span className="flex text-center">{props.meta.error}</span>
				)}
			</div>
		</div>
	);
};

InputSelect.propTypes = {
	labelLeft: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	),
};

InputSelect.defaultProps = {
	labelleft: false,
};

export default InputSelect;
