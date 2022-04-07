import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';
import Dropdown from '../../components/Dropdown';
import Radio from '../../components/Radio';
import { adminRoutes, homeRoutes, routes } from '../../routes';

const Test = () => {
	return (
		<div>
			<Checkbox>check</Checkbox>
			<Checkbox>check</Checkbox>
			<Checkbox>check</Checkbox>
			<Checkbox>check</Checkbox>
			<Radio groupName="test">radio1</Radio>
			<Radio groupName="test">radio1</Radio>
			<Radio groupName="tesla">radio2</Radio>
			<Radio groupName="tesla">radio2</Radio>
			<Radio groupName="tesla">radio2</Radio>
		</div>
		// <div className="flex justify-center">
		// 	<div>
		// 		<div className="form-check">
		// 			<input
		// 				type="checkbox"
		// 				className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-testPrimary checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
		// 			/>
		// 			<label className="form-check-label inline-block">TEST</label>
		// 		</div>
		// 		<div>
		// 			<input
		// 				type="checkbox"
		// 				className="form-check-input appearance-none h-4 w-4  float-left mr-2 cursor-pointer"
		// 			/>
		// 			<label className="form-check-label inline-block">TEST</label>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Test;
