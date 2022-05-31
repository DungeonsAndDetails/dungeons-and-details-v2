import React from 'react';
import './output.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Home from './pages/home';
import Admin from './pages/admin';
import Toast from './components/Toast';
import { LoginContextStateProvider } from './context/loginContext';
import { CharacterContextStateProvider } from './context/characterContext';
import { SkillListContextStateProvider } from './context/skillListContext';
import { AttributesContextStateProvider } from './context/attributeContext';
import { AlertContextStateProvider } from './context/alertContext';
import { ItemsContextStateProvider } from './context/itemsContext';
import { SpellListContextStateProvider } from './context/spellListContext';
import { ClassListContextStateProvider } from './context/classListContext';
import { FeatListContextStateProvider } from './context/featListContext';
import { ModifierListContextStateProvider } from './context/modifiersContext';
import { RaceListContextStateProvider } from './context/raceListContext';
import { SubraceListContextStateProvider } from './context/subraceListContext';

const App = () => {
	return (
		<div className="container mx-auto">
			<AlertContextStateProvider>
				<Toast />
				<BrowserRouter>
					<RaceListContextStateProvider>
						<SubraceListContextStateProvider>
							<ModifierListContextStateProvider>
								<FeatListContextStateProvider>
									<ClassListContextStateProvider>
										<ItemsContextStateProvider>
											<AttributesContextStateProvider>
												<SkillListContextStateProvider>
													<SpellListContextStateProvider>
														<CharacterContextStateProvider>
															<LoginContextStateProvider>
																<Routes>
																	<Route path={routes.HOME} element={<Home />} />
																	<Route path={routes.ADMIN} element={<Admin />} />
																</Routes>
															</LoginContextStateProvider>
														</CharacterContextStateProvider>
													</SpellListContextStateProvider>
												</SkillListContextStateProvider>
											</AttributesContextStateProvider>
										</ItemsContextStateProvider>
									</ClassListContextStateProvider>
								</FeatListContextStateProvider>
							</ModifierListContextStateProvider>
						</SubraceListContextStateProvider>
					</RaceListContextStateProvider>
				</BrowserRouter>
			</AlertContextStateProvider>
		</div>
	);
};

export default App;
