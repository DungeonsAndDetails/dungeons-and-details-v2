import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
import { adminRoutes, homeRoutes, routes } from '../../routes';

const Test = () => {
	return (
		<Dropdown buttonName="Test">
			<Link to={homeRoutes.LANDING}>Home</Link>
		</Dropdown>
	);
};

export default Test;
