import React from 'react';
import './output.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Home from './pages/home';
import Admin from './pages/admin';
import Toast from './components/Toast';
import { CharacterContextStateProvider } from './context/characterContext';
import { SkillListContextStateProvider } from './context/skillListContext';
import { AttributesContextStateProvider } from './context/attributeContext';
import { AlertContextStateProvider } from './context/alertContext';
import { ItemsContextStateProvider } from './context/itemsContext';
import { SpellListContextStateProvider } from './context/spellListContext';
import { ClassListContextStateProvider } from './context/classListContext';
import { FeatListContextStateProvider } from './context/featListContext';
import { CharacterCreationContextStateProvider } from './context/characterCreationContext';
import { ModifierListContextStateProvider } from './context/modifiersContext';
import { RaceListContextStateProvider } from './context/raceListContext';
import { SubraceListContextStateProvider } from './context/subraceListContext';
import { SubclassListContextStateProvider } from './context/subclassListContext';
import { MonsterListContextStateProvider } from './context/monsterContext';
import { BackgroundListContextStateProvider } from './context/backgroundListContext';
import { NpcListContextStateProvider } from './context/npcContext';
import { ChatContextStateProvider } from './context/chatContext';
import { UserContextStateProvider } from './context/userContext';

const App = () => {
	return (
		<div className="container mx-auto">
			<AlertContextStateProvider>
				<Toast />
				<BrowserRouter>
					<ChatContextStateProvider>
						<NpcListContextStateProvider>
							<BackgroundListContextStateProvider>
								<CharacterCreationContextStateProvider>
									<MonsterListContextStateProvider>
										<RaceListContextStateProvider>
											<SubraceListContextStateProvider>
												<ModifierListContextStateProvider>
													<FeatListContextStateProvider>
														<ClassListContextStateProvider>
															<SubclassListContextStateProvider>
																<ItemsContextStateProvider>
																	<AttributesContextStateProvider>
																		<SkillListContextStateProvider>
																			<SpellListContextStateProvider>
																				<CharacterContextStateProvider>
																					<UserContextStateProvider>
																						<Routes>
																							<Route path={routes.HOME} element={<Home />} />
																							<Route path={routes.ADMIN} element={<Admin />} />
																						</Routes>
																					</UserContextStateProvider>
																				</CharacterContextStateProvider>
																			</SpellListContextStateProvider>
																		</SkillListContextStateProvider>
																	</AttributesContextStateProvider>
																</ItemsContextStateProvider>
															</SubclassListContextStateProvider>
														</ClassListContextStateProvider>
													</FeatListContextStateProvider>
												</ModifierListContextStateProvider>
											</SubraceListContextStateProvider>
										</RaceListContextStateProvider>
									</MonsterListContextStateProvider>
								</CharacterCreationContextStateProvider>
							</BackgroundListContextStateProvider>
						</NpcListContextStateProvider>
					</ChatContextStateProvider>
				</BrowserRouter>
			</AlertContextStateProvider>
		</div>
	);
};

export default App;
