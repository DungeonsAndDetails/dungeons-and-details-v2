import React, { useContext } from 'react';
import Table, { inputTypes } from '../../components/Table';
import { raceListContext } from '../../context/raceListContext';
import { subraceListContext } from '../../context/subraceListContext';

const Subraces = () => {
	const subraces = useContext(subraceListContext);
	const races = useContext(raceListContext);

	const subraceListHeaders = [
		{
			label: 'Race',
			value: 'race',
			type: inputTypes.SELECT,
			options: races.state.races,
		},
		{
			label: 'Subrace',
			value: 'name',
			type: inputTypes.TEXT,
		},
		{
			label: 'Description',
			value: 'description',
			type: inputTypes.TEXT,
		},
	];

	const saveSubrace = ({ values, id }) => {
		const newValues = {
			...values,
			race: races.state.races.find((race) => race._id === values.race),
		};
		subraces.updateSubrace({ values: newValues, id });
	};

	const createSubrace = (values) => {
		const newValues = {
			...values,
			race: races.state.races.find((race) => race._id === values.race),
		};
		subraces.createSubrace(newValues);
	};

	return (
		<>
			<div>
				<span className="">Subrace List</span>
			</div>
			<div className="py-3">
				<Table
					data={subraces.state.subraces}
					headers={subraceListHeaders}
					onDelete={subraces.deleteSubrace}
					onEditSave={saveSubrace}
					onCreate={createSubrace}
				/>
			</div>
		</>
	);
};

export default Subraces;
