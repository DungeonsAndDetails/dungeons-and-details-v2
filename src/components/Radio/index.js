import React from 'react';
import { Field } from 'formik';

const Radio = ({ children, className, groupName }) => {
	return (
		<div className="flex justify-center">
			<div className="form-check">
				<Field>
					<input
						checked
						type="radio"
						name={groupName}
						className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-testPrimary checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
					/>
				</Field>
				<label className={` ${className} pl-2 form-check-label inline-block`}>{children}</label>
			</div>
		</div>
	);
};

Radio.propTypes = {};

Radio.defaultProps = {};

export default Radio;
