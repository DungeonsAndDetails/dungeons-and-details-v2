import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const TopNav = () => {
	return (
		<div className="flex justify-between font-semibold text-lg text-white border-b mb-2">
			<Link to={routes.HOME_PAGE}>Home</Link>
			<Link to={routes.SKILLS_PAGE}>Skill List</Link>
			<Link to={routes.ATTRIBUTES_PAGE}>Attributes List</Link>
			<Link to={routes.CHARACTER_SHEET_PAGE}>Character Sheet</Link>
			<Link to={routes.LOGIN_PAGE}>Login</Link>
		</div>
	);
};

export default TopNav;
