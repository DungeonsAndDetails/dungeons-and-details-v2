import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StudentTableRow = (props) => {
	const deleteStudent = () => {
		axios
			.delete('http://localhost:4000/students/delete-student/' + props.obj._id)
			.then(() => {
				console.log('Student successfully deleted!');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<tr>
			<td>{props.obj.name}</td>
			<td>{props.obj.email}</td>
			<td>{props.obj.rollno}</td>
			<td>
				<Link className="edit-link" to={'/edit-student/' + props.obj._id}>
					Edit
				</Link>
				<button onClick={deleteStudent}>Delete</button>
			</td>
		</tr>
	);
};

StudentTableRow.propTypes = {
	obj: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		rollno: PropTypes.number,
		_id: PropTypes.any,
	}),
};

StudentTableRow.defaultProps = {};

export default StudentTableRow;
