import React, { useContext } from 'react';
import Table, { inputTypes } from '../../components/Table';
import { raceListContext } from '../../context/raceListContext';

const Races = () => {
	const races = useContext(raceListContext);

	const raceListHeaders = [
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
		{
			label: 'Racial Traits',
			value: 'racialTraits',
			type: inputTypes.TEXT,
		},
	];

	return (
		<>
			<div>
				<span className="">Race List</span>
			</div>
			<div className="py-3">
				<Table
					data={races.state.races}
					headers={raceListHeaders}
					onDelete={races.deleteRace}
					onEditSave={races.updateRace}
					onCreate={races.createRace}
				/>
			</div>
		</>
	);
};

export default Races;
