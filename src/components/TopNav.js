import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

const TopNav = () => {
	return (
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
	);
};

export default TopNav;
