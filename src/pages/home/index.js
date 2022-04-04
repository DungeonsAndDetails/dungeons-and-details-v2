import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';
import { loginContext, loginContextActions } from '../../context/loginContext';
import Skills from '../skillList';
import { homeRoutes, routes } from '../../routes';
import Attributes from '../attributes';
import TopNav from '../../components/TopNav';
import Landing from '../landing';
import Login from '../login';
import Profile from '../profile';
import SignUp from '../signUp';
import HomeNav from './components/HomeNav';
import CharacterSheet from '../characterSheet';
import Test from '../Test';

const Home = () => {
	return (
		<div className="text-white">
			<HomeNav />
			<Routes>
				<Route path={homeRoutes.LANDING} element={<Landing />} />
				<Route path={homeRoutes.LOGIN} element={<Login />} />
				<Route path={routes.TEST_PAGE} element={<Test />} />
				<Route path={homeRoutes.SIGN_UP} element={<SignUp />} />
				<Route path={homeRoutes.PROFILE} element={<Profile />} />
				<Route path={routes.CHARACTER_SHEET_PAGE} element={<CharacterSheet />} />
			</Routes>
		</div>
	);
};

export default Home;
