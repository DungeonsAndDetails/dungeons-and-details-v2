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
import Test from './pages/Test';
import Skills from './pages/skillList/Skills';
import Attributes from './pages/attributes/Attributes';
import { SkillListContextStateProvider } from './context/skillListContext';
import { AttributesContextStateProvider } from './context/attributeContext';

const App = () => {
	return (
		<div className="container mx-auto">
			<BrowserRouter>
				<div className="columns-5 font-semibold text-lg text-white">
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/skills">Skill List</Link>
					</div>
					<div>
						<Link to="/attributes">Attributes List</Link>
					</div>
					<div>
						<Link to="/character-sheet">Character Sheet</Link>
					</div>
					<div>
						<Link to="/test">Test</Link>
					</div>
				</div>
				<hr />
				<AttributesContextStateProvider>
					<SkillListContextStateProvider>
						<CharacterContextStateProvider>
							<LoginContextStateProvider>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/sign-up" element={<SignUp />} />
									<Route path="/skills" element={<Skills />} />
									<Route path="/attributes" element={<Attributes />} />
									<Route path="/profile" element={<Profile />} />
									<Route path="/character-sheet" element={<CharacterSheet />} />
									<Route path="/spells" element={<Spells />} />
									<Route path="/test" element={<Test />} />
								</Routes>
							</LoginContextStateProvider>
						</CharacterContextStateProvider>
					</SkillListContextStateProvider>
				</AttributesContextStateProvider>
			</BrowserRouter>
		</div>
	);
};
export default App;
