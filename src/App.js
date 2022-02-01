import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Toast from './components/Toast';
import { AlertContextStateProvider } from './context/alertContext';
import { routes } from './routes';
import TopNav from './components/TopNav';

const App = () => {
	return (
		<div className="container mx-auto">
			<AlertContextStateProvider>
				<Toast />
				<BrowserRouter>
					<TopNav />
					<AttributesContextStateProvider>
						<SkillListContextStateProvider>
							<CharacterContextStateProvider>
								<LoginContextStateProvider>
									<Routes>
										<Route path={routes.HOME_PAGE} element={<Home />} />
										<Route path={routes.SIGN_UP_PAGE} element={<SignUp />} />
										<Route path={routes.SKILLS_PAGE} element={<Skills />} />
										<Route path={routes.ATTRIBUTES_PAGE} element={<Attributes />} />
										<Route path={routes.PROFILE_PAGE} element={<Profile />} />
										<Route path={routes.CHARACTER_SHEET_PAGE} element={<CharacterSheet />} />
										<Route path={routes.SPELLS_PAGE} element={<Spells />} />
										<Route path={routes.TEST_PAGE} element={<Test />} />
									</Routes>
								</LoginContextStateProvider>
							</CharacterContextStateProvider>
						</SkillListContextStateProvider>
					</AttributesContextStateProvider>
				</BrowserRouter>
			</AlertContextStateProvider>
		</div>
	);
};

export default App;
