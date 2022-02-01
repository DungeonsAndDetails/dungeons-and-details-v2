import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import { ItemsContextStateProvider } from './context/itemsContext';
import Items from './pages/items/Items';

const routes = {
	HOME_PAGE: '/',
	SIGN_UP_PAGE: 'sign-up',
	SKILLS_PAGE: '/skills',
	ATTRIBUTES_PAGE: '/attributes',
	PROFILE_PAGE: '/profile',
	CHARACTER_SHEET_PAGE: '/character-sheet',
	SPELLS_PAGE: '/spells',
	TEST_PAGE: '/test',
	ITEMS_PAGE: '/items',
};

const App = () => {
	return (
		<div className="container mx-auto">
			<AlertContextStateProvider>
				<Toast />
				<BrowserRouter>
					<div className="columns-5 font-semibold text-lg text-white">
						<div>
							<Link to={routes.HOME_PAGE}>Home</Link>
						</div>
						<div>
							<Link to={routes.SKILLS_PAGE}>Skill List</Link>
						</div>
						<div>
							<Link to={routes.ATTRIBUTES_PAGE}>Attributes List</Link>
						</div>
						<div>
							<Link to={routes.CHARACTER_SHEET_PAGE}>Character Sheet</Link>
						</div>
						<div>
							<Link to={routes.TEST_PAGE}>Test</Link>
						</div>
					</div>
					<hr />
					<ItemsContextStateProvider>
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
											<Route path={routes.ITEMS_PAGE} element={<Items />} />
										</Routes>
									</LoginContextStateProvider>
								</CharacterContextStateProvider>
							</SkillListContextStateProvider>
						</AttributesContextStateProvider>
					</ItemsContextStateProvider>
				</BrowserRouter>
			</AlertContextStateProvider>
		</div>
	);
};
export default App;
