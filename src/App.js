import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateStudent from './pages/createCharacterPage/CreateCharacter';
import EditStudent from './pages/editCharacter/EditCharacter';
import StudentList from './pages/characterList/characterList';
import Home from './pages/home/Home';

const App = () => {
	return (
		<div className="container mx-auto">
			<BrowserRouter>
				<div className="columns-3">
					<div>
						<Link to="/">Home</Link>
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
					<Route path="/" element={<Home />} />
					<Route path="/create-student" element={<CreateStudent />} />
					<Route path="/edit-student/:id" element={<EditStudent />} />
					<Route path="/student-list" element={<StudentList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
