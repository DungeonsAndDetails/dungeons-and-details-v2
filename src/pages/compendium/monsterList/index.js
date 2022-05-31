import React, { useContext } from 'react';
import { monsterListContext } from '../../../context/monsterContext';
import Table, { inputTypes } from '../../../components/Table';

const Monsters = () => {
	const monsters = useContext(monsterListContext);

	const monsterListHeaders = [
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
				<span className="">Monster List</span>
			</div>
			<div className="py-3">
				<Table
					data={monsters.state.monsters}
					headers={monsterListHeaders}
					onDelete={monsters.deleteMonster}
					onEditSave={monsters.updateMonster}
					onCreate={monsters.createMonster}
				/>
			</div>
		</>
	);
};

export default Monsters;
