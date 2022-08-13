import React, { useContext } from 'react';
import { userContext } from '../../context/userContext';

const Landing = () => {
	const login = useContext(userContext);
	const { displayName } = login.state;
	return (
		<div className="text-white">
			<div>
				<span>Welcome to Dungeons and Details {displayName}!</span>
			</div>
			<div>
				<span>Create By Le Neode and Sir Oil Baron Mendashi</span>
			</div>
		</div>
	);
};

export default Landing;
