import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loginContext } from '../../context/loginContext';
import Skills from '../skillList';
import { adminRoutes } from '../../routes';
import Attributes from '../attributes';
import AdminTopNav from '../../components/AdminTopNav';
import Items from '../items';
import Profile from '../profile';
import Spells from '../spellList';
import Classes from '../classList';
import Feats from '../featList';

const Admin = () => {
	const login = useContext(loginContext);
	console.log('login', login);

	return (
		<div className="text-white">
			<AdminTopNav />
			<Routes>
				<Route path={adminRoutes.SKILLS} element={<Skills />} />
				<Route path={adminRoutes.SPELLS} element={<Spells />} />
				<Route path={adminRoutes.CLASSES} element={<Classes />} />
				<Route path={adminRoutes.FEATS} element={<Feats />} />
				<Route path={adminRoutes.ATTRIBUTES} element={<Attributes />} />
				<Route path={adminRoutes.ITEMS} element={<Items />} />
				<Route path={adminRoutes.PROFILE} element={<Profile />} />
			</Routes>
		</div>
	);
};

export default Admin;
