import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginContext } from '../context/loginContext';
import { routes, adminRoutes, homeRoutes } from '../routes';

const AdminTopNav = () => {
	const navigate = useNavigate();
	const login = useContext(loginContext);

	useEffect(() => {
		if (!login.state.loggedIn) {
			navigate('/');
		}
	}, [login.state.loggedIn, navigate]);

	return (
		<div className="flex justify-between font-semibold text-lg text-white border-b mb-2">
			<Link to={homeRoutes.LANDING}>Home</Link>
			<Link to={adminRoutes.SKILLS}>Skill List</Link>
			<Link to={adminRoutes.ATTRIBUTES}>Attributes List</Link>
			<Link to={adminRoutes.ITEMS}>Items List</Link>
			<Link to={adminRoutes.PROFILE}>Manage Profile</Link>
		</div>
	);
};

export default AdminTopNav;
