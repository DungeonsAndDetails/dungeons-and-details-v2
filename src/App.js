import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateStudent from './components/createCharacter';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';

const App = () => {
	return (
		<div className="container mx-auto">
			<BrowserRouter>
				<div className="columns-3">
					<div>
						<Link to="/create-student">Home</Link>
					</div>
					<div>
						<Link to="/create-student">Create Student</Link>
					</div>
					<div>
						<Link to="/student-list">Student List</Link>
					</div>
				</div>
				<hr />
				<Routes>
					<Route path="/" element={<CreateStudent />} />
					<Route path="/create-student" element={<CreateStudent />} />
					<Route path="/edit-student/:id" element={<EditStudent />} />
					<Route path="/student-list" element={<StudentList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
