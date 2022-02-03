import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp';
import Profile from './pages/profile';
import CharacterSheet from './pages/characterSheet';
import { LoginContextStateProvider } from './context/loginContext';
import Spells from './pages/characterSheet/Spells';
import { CharacterContextStateProvider } from './context/characterContext';
import Test from './pages/Test';
import Skills from './pages/skillList';
import Attributes from './pages/attributes';
import { SkillListContextStateProvider } from './context/skillListContext';
import { AttributesContextStateProvider } from './context/attributeContext';
import Toast from './components/Toast';
import { AlertContextStateProvider } from './context/alertContext';
import { ItemsContextStateProvider } from './context/itemsContext';
import Items from './pages/items';
import { routes } from './routes';
import TopNav from './components/TopNav';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admin';

const App = () => {
	return (
		<div className="container mx-auto">
			<AlertContextStateProvider>
				<Toast />
				<BrowserRouter>
					<ItemsContextStateProvider>
						<AttributesContextStateProvider>
							<SkillListContextStateProvider>
								<CharacterContextStateProvider>
									<LoginContextStateProvider>
										<Routes>
											<Route path={routes.HOME} element={<Home />} />
											<Route path={routes.ADMIN} element={<Admin />} />
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
