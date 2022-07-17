import React, { useContext } from 'react';
import Table, { inputTypes } from '../../../components/Table';
import { npcListContext } from '../../../context/npcContext';

const Npcs = () => {
	const npcs = useContext(npcListContext);

	const npcListHeaders = [
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
	console.log('npcs', npcs.state.npcs);
	return (
		<>
			<div>
				<span className="">Npc List</span>
			</div>
			<div className="py-3">
				<Table
					data={npcs.state.npcs}
					headers={npcListHeaders}
					onDelete={npcs.deleteNpc}
					onEditSave={npcs.updateNpc}
					onCreate={npcs.createNpc}
				/>
			</div>
		</>
	);
};

export default Npcs;
