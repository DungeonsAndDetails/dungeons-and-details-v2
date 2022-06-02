import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { homeRoutes, routes } from '../../routes';
import Landing from '../landing';
import Login from '../login';
import Profile from '../profile';
import SignUp from '../signUp';
import HomeNav from './components/HomeNav';
import CharacterSheet from '../characterSheet';
import Test from '../Test';
import CharacterCreationGui from '../characterCreationGui';

const Home = () => {
	return (
		<div className="text-white">
			<HomeNav />
			<Routes>
				<Route path={homeRoutes.LANDING} element={<Landing />} />
				<Route path={homeRoutes.LOGIN} element={<Login />} />
				<Route path={routes.TEST_PAGE} element={<Test />} />
				<Route path={homeRoutes.CHARACTER_CREATION_GUI} element={<CharacterCreationGui />} />
				<Route path={homeRoutes.SIGN_UP} element={<SignUp />} />
				<Route path={homeRoutes.PROFILE} element={<Profile />} />
				<Route path={routes.CHARACTER_SHEET_PAGE} element={<CharacterSheet />} />
			</Routes>
		</div>
	);
};

export default Home;
