import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateStudent from './pages/createCharacterPage/CreateCharacter';
import EditStudent from './pages/editCharacter/EditCharacter';
import StudentList from './pages/characterList/characterList';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/SignUp';
import Profile from './pages/profile/profile';
import CharacterSheet from './pages/characterSheet/CharacterSheet';
import { LoginContextStateProvider } from './context/loginContext';
import Spells from './pages/characterSheet/Spells';
import { CharacterContextStateProvider } from './context/characterContext';

const App = () => {
	return (
		<div className="container mx-auto">
			<BrowserRouter>
				<div className="columns-4 font-semibold text-lg text-white">
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/create-student">Create Student</Link>
					</div>
					<div>
						<Link to="/character-sheet">Character Sheet</Link>
					</div>
					<div>
						<Link to="/student-list">Student List</Link>
					</div>
				</div>
				<hr />
				<CharacterContextStateProvider>
					<LoginContextStateProvider>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/sign-up" element={<SignUp />} />
							<Route path="/create-student" element={<CreateStudent />} />
							<Route path="/edit-student/:id" element={<EditStudent />} />
							<Route path="/student-list" element={<StudentList />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/character-sheet" element={<CharacterSheet />} />
							<Route path="/spells" element={<Spells />} />
						</Routes>
					</LoginContextStateProvider>
				</CharacterContextStateProvider>
			</BrowserRouter>
		</div>
	);
};
export default App;
