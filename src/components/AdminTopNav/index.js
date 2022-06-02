import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginContext, loginContextActions } from '../../context/loginContext';
import { adminRoutes, compendiumRoutes, homeRoutes, modifierRoutes } from '../../routes';
import Dropdown from '../Dropdown';

const AdminTopNav = () => {
	const navigate = useNavigate();
	const login = useContext(loginContext);

	useEffect(() => {
		if (!login.state.loggedIn) {
			navigate('/');
		}
	}, [login.state.loggedIn, navigate]);

	return (
		<div className=" container flex flex-wrap justify-between items-center  text-lg text-white border border-gray-300 rounded bg-testPrimary px-4 py-2">
			<div className="font-semibold">
				<Link to={homeRoutes.LANDING}>Home</Link>
			</div>
			<Dropdown
				buttonClassName="font-semibold text-lg"
				menuClassName="font-normal"
				buttonName="Modifiers ▼"
			>
				<Link to={modifierRoutes.COMPONENTS}>Components</Link>
				<Link to={modifierRoutes.CONCENTRATIONS}>Concentrations</Link>
				<Link to={modifierRoutes.DURATIONS}>Durations</Link>
				<Link to={modifierRoutes.RANGES}>Ranges</Link>
				<Link to={modifierRoutes.SOURCES}>Sources</Link>
				<Link to={modifierRoutes.SPELL_LEVELS}>Spell Levels</Link>
				<Link to={modifierRoutes.SPELL_SCHOOLS}>Spell Schools</Link>
				<Link to={modifierRoutes.TIME_TYPES}>Time Types</Link>
				<Link to={modifierRoutes.DAMAGE_TYPES}>Damage Types</Link>
			</Dropdown>
			<Dropdown
				buttonClassName="font-semibold text-lg"
				menuClassName="font-normal"
				buttonName="Compendium ▼"
			>
				<Link to={compendiumRoutes.MONSTERS}>Monsters</Link>
			</Dropdown>
			<Dropdown
				buttonClassName="font-semibold text-lg"
				menuClassName="font-normal"
				buttonName="Lists ▼"
			>
				<Link to={adminRoutes.SKILLS}>Skill List</Link>
				<Link to={adminRoutes.SPELLS}>Spell List</Link>
				<Link to={adminRoutes.CLASSES}>Class List</Link>
				<Link to={adminRoutes.SUBCLASSES}>Subclass List</Link>
				<Link to={adminRoutes.FEATS}>Feat List</Link>
				<Link to={adminRoutes.ATTRIBUTES}>Attributes List</Link>
				<Link to={adminRoutes.ITEMS}>Items List</Link>
				<Link to={adminRoutes.RACES}>Race List</Link>
				<Link to={adminRoutes.SUBRACES}>Subrace List</Link>
				<Link to={adminRoutes.BACKGROUNDS}>Background List</Link>
			</Dropdown>
			<Dropdown buttonClassName="font-semibold text-lg" buttonName="Profile ▼">
				{login.state.loggedIn && <Link to={adminRoutes.ADMIN}>Admin View</Link>}
				{login.state.loggedIn ? (
					<Link to={homeRoutes.PROFILE}>Manage Profile</Link>
				) : (
					<Link to={homeRoutes.LOGIN}>Login</Link>
				)}
				{login.state.loggedIn && (
					<button
						className="font-semibold"
						onClick={() => {
							login.dispatch({ type: loginContextActions.SIGN_OUT });
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
