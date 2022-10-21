import React, { useContext } from 'react';
import Table, { inputTypes } from '../../../components/Table';
import { abilitiesListContext } from '../../../context/abilitiesContext';

const Abilities = () => {
	const abilities = useContext(abilitiesListContext);

	const abilityListHeaders = [
		{
			label: 'Name',
			value: 'name',
			type: inputTypes.TEXT,
		},

		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Ability List</span>
			</div>
			<div className="py-3">
				<Table
					data={abilities.state.abilities}
					headers={abilityListHeaders}
					onDelete={abilities.deleteAbility}
					onEditSave={abilities.updateAbility}
					onCreate={abilities.createAbility}
				/>
			</div>
		</>
	);
};

export default Abilities;
