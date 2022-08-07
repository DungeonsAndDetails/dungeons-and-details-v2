import React, { useState } from 'react';
import PropTypes from 'prop-types';

//field and meta need to be their own objects inside of props

const InputSelect = (props) => {
	const [focus, setFocus] = useState(false);

	return (
		<div className={`${props.labelLeft ? 'flex justify-between ' : ''}`}>
			{props.label && !(props.type === 'radio') && (
				<div className={props.labelLeft ? 'm-auto pr-3 w-2/5' : ''}>
					<label
						htmlFor={props.name}
						className={`${props.labelClassName}  ${focus ? 'text-white' : 'text-gray-400'}`}
					>
						{props.label}
					</label>
				</div>
			)}
			<div className="">
				{(props.type === 'text' ||
					props.type === 'number' ||
					props.type === 'email' ||
					props.type === 'password') && (
					<input
						name={props.name}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						className={`${props.className} w-full bg-slate-800 text-slate-200 h-10`}
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
						className={`${props.className} w-full bg-slate-800 text-slate-200 h-10`}
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
				{props.type === 'multiSelect' && (
					<select
						id={props.id}
						name={props.name}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						onChange={props.onChange}
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						className={`${props.className} w-full bg-slate-800 text-slate-200 h-10`}
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
				{props.type === 'radio' && (
					<div>
						<input
							id={props.id}
							name={props.name}
							type={props.type}
							value={props.id}
							onChange={props.onChange}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-testPrimary checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
						/>
						<label className={` ${props.className} pl-2 form-check-label inline-block`}>
							{props.label}
						</label>
					</div>
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
