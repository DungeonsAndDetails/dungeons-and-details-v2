import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext, userContextActions } from '../../context/userContext';
import { adminRoutes, compendiumRoutes, homeRoutes, modifierRoutes } from '../../routes';
import Dropdown from '../Dropdown';
import StyledLink from '../StyledLink';

const AdminTopNav = () => {
	const navigate = useNavigate();
	const user = useContext(userContext);

	useEffect(() => {
		if (!user.state.loggedIn) {
			navigate('/');
		}
	}, [user.state.loggedIn, navigate]);

	return (
		<div className=" container flex flex-wrap justify-between items-center  text-lg text-white border border-gray-300 rounded bg-testPrimary px-4 py-2">
			<div className="font-semibold">
				<StyledLink to={homeRoutes.LANDING} className="text-white">
					Home
				</StyledLink>
			</div>
			<Dropdown buttonClassName="" menuClassName="font-normal" buttonName="Modifiers ▼">
				<StyledLink to={modifierRoutes.COMPONENTS}>Components</StyledLink>
				<StyledLink to={modifierRoutes.CONCENTRATIONS}>Concentrations</StyledLink>
				<StyledLink to={modifierRoutes.DURATIONS}>Durations</StyledLink>
				<StyledLink to={modifierRoutes.RANGES}>Ranges</StyledLink>
				<StyledLink to={modifierRoutes.SOURCES}>Sources</StyledLink>
				<StyledLink to={modifierRoutes.SPELL_LEVELS}>Spell Levels</StyledLink>
				<StyledLink to={modifierRoutes.SPELL_SCHOOLS}>Spell Schools</StyledLink>
				<StyledLink to={modifierRoutes.TIME_TYPES}>Time Types</StyledLink>
				<StyledLink to={modifierRoutes.DAMAGE_TYPES}>Damage Types</StyledLink>
			</Dropdown>
			<Dropdown buttonClassName="" menuClassName="font-normal" buttonName="Compendium ▼">
				<StyledLink to={compendiumRoutes.MONSTERS}>Monsters</StyledLink>
				<StyledLink to={compendiumRoutes.NPCS}>NPCs</StyledLink>
			</Dropdown>
			<Dropdown buttonClassName="" menuClassName="font-normal" buttonName="Lists ▼">
				<StyledLink to={adminRoutes.SKILLS}>Skill List</StyledLink>
				<StyledLink to={adminRoutes.SPELLS}>Spell List</StyledLink>
				<StyledLink to={adminRoutes.CLASSES}>Class List</StyledLink>
				<StyledLink to={adminRoutes.SUBCLASSES}>Subclass List</StyledLink>
				<StyledLink to={adminRoutes.FEATS}>Feat List</StyledLink>
				<StyledLink to={adminRoutes.ATTRIBUTES}>Attributes List</StyledLink>
				<StyledLink to={adminRoutes.ITEMS}>Items List</StyledLink>
				<StyledLink to={adminRoutes.RACES}>Race List</StyledLink>
				<StyledLink to={adminRoutes.SUBRACES}>Subrace List</StyledLink>
				<StyledLink to={adminRoutes.BACKGROUNDS}>Background List</StyledLink>
			</Dropdown>
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

export default AdminTopNav;
