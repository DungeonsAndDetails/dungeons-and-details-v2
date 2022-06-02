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
		{
			label: 'Hit Points',
			value: 'hitPoints',
			type: inputTypes.NUMBER,
		},
		{
			label: 'Armor Class',
			value: 'armorClass',
			type: inputTypes.NUMBER,
		},
		{
			label: 'Speed',
			value: 'movementSpeed',
			type: inputTypes.NUMBER,
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
