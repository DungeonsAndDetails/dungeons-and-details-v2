import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentTableRow from './StudentTableRow';

const StudentList = () => {
	const [students, setStudents] = useState([]);

	const getStudents = async () => {
		const { data } = await axios.get('http://localhost:4000/students/');
		console.log(data);
		setStudents(data);
	};

	useEffect(() => {
		getStudents();
	}, []);

	const DataTable = () => {
		return students.map((res, i) => {
			return <StudentTableRow obj={res} key={i} />;
		});
	};

	return (
		<table className="table-auto">
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Roll No</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>{DataTable()}</tbody>
		</table>
	);
};

export default StudentList;
