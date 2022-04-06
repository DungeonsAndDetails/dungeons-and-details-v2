// import React, { useState } from 'react';
// import PropTypes, { string } from 'prop-types';
// import { Field, Form, Formik } from 'formik';
// import TextInputField from '../../TextInputField';

// // https://tailwindcss.com/docs/table-layout
// // https://tailwind-elements.com/docs/standard/components/tables/
// // Goal, expandable dataset wise.
// // prop toggle edit & delete buttons.
// // Rename to EditFieldTableRow

// const buildData = ({ columnCount, enableManageColumn, headers }) => {
// 	return (
// 		<div className={`grid grid-cols-${columnCount}`}>
// 			{data.map((item) => {
// 				return (
// 					<>
// 						{headers.map((header) => {
// 							return <div>{item[header.value]}</div>;
// 						})}
// 						{enableManageColumn && (
// 							<div>
// 								<button>x</button>
// 							</div>
// 						)}
// 					</>
// 				);
// 			})}
// 		</div>
// 	);
// };

// EditField.propTypes = {
// 	data: PropTypes.shape({
// 		_id: string,
// 	}).isRequired,
// };

// EditField.defaultProps = {
// 	enableEdit: true,
// 	enableDelete: true,
// };

// export default EditField;
