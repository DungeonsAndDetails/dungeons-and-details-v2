import React from 'react';

const CharacterSheet = () => {
	return (
		<div>
			<div className="block font-bold text-xl text-center">
				<span>Character Sheet</span>
			</div>
			<div className="max-w grid grid-cols-3 rounded overflow-hidden shadow-lg ">
				<div className="px-6 py-4">
					<div className="col-2">
						<div>
							<span className="ml-4 w-9">Name</span>
							<span className="ml-4">Age</span>
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div>hi</div>
			</div>
		</div>
	);
};

export default CharacterSheet;
