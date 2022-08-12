import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../../components/Dropdown';
import { userContext, userContextActions } from '../../../context/userContext';
import { adminRoutes, homeRoutes, routes } from '../../../routes';

const HomeNav = () => {
	const user = useContext(userContext);
	return (
		<nav className="bg-testPrimary rounded border-gray-200 px-4 py-2 text-xl  ">
			<div className="text-white font-semibold container flex flex-wrap justify-between items-center mx-auto">
				<div>
					<Link to={homeRoutes.LANDING}>Home</Link>
				</div>
				<div>
					<Link to={homeRoutes.DICE}>Dice</Link>
				</div>
				<div>
					<Link to={routes.CHARACTER_SHEET_PAGE}>Character Sheet</Link>
				</div>
				<div>
					<Link to={routes.TEST_PAGE}>Test</Link>
				</div>

				<div>
					<Dropdown buttonClassName="font-semibold" buttonName="Profile ▼">
						{user.state.loggedIn && <Link to={adminRoutes.ADMIN}>Admin View</Link>}
						{user.state.loggedIn ? (
							<Link to={homeRoutes.PROFILE}>Manage Profile</Link>
						) : (
							<Link to={homeRoutes.LOGIN}>Login</Link>
						)}
						{user.state.loggedIn && (
							<button
								className="font-semibold"
								onClick={() => {
									user.dispatch({ type: userContextActions.SIGN_OUT });
								}}
							>
								Logout
							</button>
						)}
					</Dropdown>
				</div>
			</div>
		</nav>
		// <div className="flex justify-between font-semibold text-lg text-white border-b mb-2">
		// 	<Link to={homeRoutes.LANDING}>Home</Link>
		// 	<Link to={routes.CHARACTER_SHEET_PAGE}>Character Sheet</Link>
		// 	<Link to={routes.TEST_PAGE}>Test</Link>
		// 	<Link to={homeRoutes.MONSTERS}>Monsters</Link>
		// 	{login.state.loggedIn && <Link to={adminRoutes.ADMIN}>Admin View</Link>}
		// 	{login.state.loggedIn ? (
		// 		<Link to={homeRoutes.PROFILE}>Manage Profile</Link>
		// 	) : (
		// 		<Link to={homeRoutes.LOGIN}>Login</Link>
		// 	)}
		// 	{login.state.loggedIn && (
		// 		<button
		// 			className="font-semibold"
		// 			onClick={() => {
		// 				login.dispatch({ type: loginContextActions.SIGN_OUT });
		// 			}}
		// 		>
		// 			Logout
		// 		</button>
		// 	)}
		// </div>
	);
};

export default HomeNav;
