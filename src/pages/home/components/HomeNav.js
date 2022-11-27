import React, { useContext } from 'react';
import Dropdown from '../../../components/Dropdown';
import StyledLink from '../../../components/StyledLink';
import { userContext, userContextActions } from '../../../context/userContext';
import { adminRoutes, homeRoutes, routes } from '../../../routes';

const HomeNav = () => {
	const user = useContext(userContext);

	return (
		<div className=" container flex flex-wrap justify-between items-center  text-lg text-white border border-gray-300 rounded bg-testPrimary px-4 py-2">
			<div className="font-semibold">
				<StyledLink to={homeRoutes.LANDING}>Home</StyledLink>
			</div>
			<div className="font-semibold">
				<StyledLink to={homeRoutes.DICE}>Dice</StyledLink>
			</div>
			<div className="font-semibold">
				<StyledLink to={homeRoutes.CHARACTER_CREATION_GUI}>Character Creation</StyledLink>
			</div>
			<div className="font-semibold">
				<StyledLink to={routes.TEST_PAGE}>Test</StyledLink>
			</div>
			<Dropdown buttonClassName="" buttonName="Profile ▼">
				{user.state.loggedIn && <StyledLink to={adminRoutes.ADMIN}>Admin View</StyledLink>}
				{user.state.loggedIn ? (
					<StyledLink to={homeRoutes.PROFILE}>Manage Profile</StyledLink>
				) : (
					<StyledLink to={homeRoutes.LOGIN}>Login</StyledLink>
				)}
				{user.state.loggedIn && (
					<button
						className="font-semibold hover:text-blue-300 duration-200 ease-in-out"
						onClick={() => {
							user.dispatch({ type: userContextActions.SIGN_OUT });
						}}
					>
						Logout
					</button>
				)}
			</Dropdown>
		</div>
	);
};

export default HomeNav;
