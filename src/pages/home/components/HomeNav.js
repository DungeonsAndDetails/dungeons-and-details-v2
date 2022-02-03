import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { loginContext } from '../../../context/loginContext';
import { adminRoutes, homeRoutes, routes } from '../../../routes';

const HomeNav = () => {
	const login = useContext(loginContext);
	console.log('login', login);
	return (
		<div className="flex justify-between font-semibold text-lg text-white border-b mb-2">
			<Link to={homeRoutes.LANDING}>Home</Link>
			{login.state.loggedIn && <Link to={adminRoutes.ADMIN}>Admin View</Link>}
			{login.state.loggedIn ? (
				<Link to={homeRoutes.PROFILE}>Manage Profile</Link>
			) : (
				<Link to={homeRoutes.LOGIN}>Login</Link>
			)}
		</div>
	);
};

export default HomeNav;
