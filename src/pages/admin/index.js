import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Skills from '../skillList';
import { adminRoutes, compendiumRoutes, modifierRoutes } from '../../routes';
import Attributes from '../attributes';
import AdminTopNav from '../../components/AdminTopNav';
import Items from '../items';
import Profile from '../profile';
import Spells from '../spellList';
import Classes from '../classList';
import Feats from '../featList';
import SpellSchools from '../modifiers/spellSchools';
import Components from '../modifiers/components';
import Concentrations from '../modifiers/concentrations';
import Durations from '../modifiers/durations';
import Ranges from '../modifiers/ranges';
import Sources from '../modifiers/sources';
import SpellLevels from '../modifiers/spellLevels';
import TimeTypes from '../modifiers/timeTypes';
import Races from '../raceList';
import Subraces from '../subraceList';
import Subclasses from '../subclassList';
import Monsters from '../compendium/monsterList';
import DamageTypes from '../modifiers/damageTypes';
import Backgrounds from '../backgroundList';
import Npcs from '../compendium/npcList';

const Admin = () => {
	return (
		<div className="text-white">
			<AdminTopNav />
			<Routes>
				{/* Modifiers */}
				<Route path={modifierRoutes.COMPONENTS} element={<Components />} />
				<Route path={modifierRoutes.CONCENTRATIONS} element={<Concentrations />} />
				<Route path={modifierRoutes.DURATIONS} element={<Durations />} />
				<Route path={modifierRoutes.RANGES} element={<Ranges />} />
				<Route path={modifierRoutes.SOURCES} element={<Sources />} />
				<Route path={modifierRoutes.SPELL_LEVELS} element={<SpellLevels />} />
				<Route path={modifierRoutes.SPELL_SCHOOLS} element={<SpellSchools />} />
				<Route path={modifierRoutes.TIME_TYPES} element={<TimeTypes />} />
				<Route path={modifierRoutes.DAMAGE_TYPES} element={<DamageTypes />} />
				{/* Compendium */}
				<Route path={compendiumRoutes.MONSTERS} element={<Monsters />} />
				<Route path={compendiumRoutes.NPCS} element={<Npcs />} />
				{/* List */}
				<Route path={adminRoutes.SKILLS} element={<Skills />} />
				<Route path={adminRoutes.SPELLS} element={<Spells />} />
				<Route path={adminRoutes.CLASSES} element={<Classes />} />
				<Route path={adminRoutes.SUBCLASSES} element={<Subclasses />} />
				<Route path={adminRoutes.FEATS} element={<Feats />} />
				<Route path={adminRoutes.ATTRIBUTES} element={<Attributes />} />
				<Route path={adminRoutes.ITEMS} element={<Items />} />
				<Route path={adminRoutes.PROFILE} element={<Profile />} />
				<Route path={adminRoutes.RACES} element={<Races />} />
				<Route path={adminRoutes.SUBRACES} element={<Subraces />} />
				<Route path={adminRoutes.BACKGROUNDS} element={<Backgrounds />} />
			</Routes>
		</div>
	);
};

export default Admin;
