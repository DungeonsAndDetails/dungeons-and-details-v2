import React from 'react';
//BG color of sheet TBD palceholder gray 600
const CharacterSheet = () => {
	return (
		<div className=" bg-gray-600">
			<div className="block  font-bold text-xl text-center underline border-b-black border-b-2">
				<span>Character Sheet</span>
			</div>
			<div className="max-w grid grid-cols-3 rounded shadow-lg">
				<div className="px-6 py-4 border-2">
					<div className="grid grid-cols-2">
						<div>
							<span className="ml-4 w-9">Name</span>
						</div>
						<div>
							<span className="ml-4">Age</span>
						</div>
					</div>
				</div>
				<div className="px-6 py-4 border-2">
					<div className="grid grid-cols-2">
						<div>
							<span className="ml-4 w-9">Class</span>
						</div>
						<div>
							<span className="ml-4">Subclass</span>
						</div>
					</div>
				</div>
				<div className="px-6 py-4 border-2">
					<div className="grid grid-cols-2">
						<div>
							<span className="ml-4 w-9 ">Race</span>
						</div>
						<div>
							<span className="ml-4">Subrace</span>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w grid grid-cols-3 rounded shadow-lg">
				<div>
					<div className="grid grid-cols-3 border-2 pl-10">
						<div className="w-1/5 border-2 ">-</div>
						<div className="w-3/5 border-2">
							<div>Strength</div>
							<div>Strength</div>
							<div>Strength</div>
							<div>Strength</div>
							<div>Strength</div>
							<div>Strength</div>
							<div>Strength</div>
						</div>
						<div className="w-1/5 border-2"> +</div>
					</div>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default CharacterSheet;
