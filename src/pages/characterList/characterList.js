import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StudentTableRow from '../../components/StudentTableRow';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);

	const getStudents = async () => {
		const { data } = await axios.get('http://localhost:4000/characters/all');
		console.log('data', data);
		setCharacters(data);
	};

	useEffect(() => {
		getStudents();
	}, []);

	const DataTable = () => {
		return characters.map((res, i) => {
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

export default CharacterList;
