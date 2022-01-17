import React, { useState } from 'react';
import Button from '../../components/Button';
//BG color of sheet TBD palceholder gray 600
const CharacterSheet = () => {
	const [count, setCount] = useState({
		strength: 10,
		constituition: 10,
		dexterity: 10,
		intellegence: 10,
		wisdom: 10,
		charisma: 10,
	});
	console.log(count);
	return (
		<div className=" bg-gray-600">
			{/* BG color of sheet TBD palceholder gray 600 */}
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
					<div name="body" className="relative flex grid-cols-3 border-2 ">
						<div className="relative flex grid-rows-3 grid-flow-col border-2 ml-auto ">
							<div className="text-xs font-semibold">Strength</div>
							<div className="static box-content h-10 justify-center ">
								<Button
									name="strength"
									className="py-1 px-1"
									onClick={() => setCount({ ...count, strength: count.strength - 1 })}
									label="-"
									type="button"
								/>
							</div>
							<div>
								<span className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold leading-none text-green-500 border-2 rounded-full">
									{count.strength}
								</span>
							</div>
							<div className=" ">
								<Button
									name="strength"
									className="py-1 px-1"
									onClick={() => setCount({ ...count, strength: count.strength + 1 })}
									label="+"
									type="button"
								/>
							</div>
						</div>
						<div className=" text-center border-2 mx-2 ">
							<div className="pb-2">Constitution</div>
							<div className="pb-2">Strength</div>
							<div className="pb-2">Strength</div>
							<div className="pb-2">Strength</div>
							<div className="pb-2">Strength</div>
							<div className="pb-2">Strength</div>
						</div>
						<div className=" mr-auto border-2">
							<div>
								<Button
									className="py-1 px-1"
									onClick={() => setCount({ ...count, strength: count.strength + 1 })}
									label="+"
									type="button"
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>hi</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default CharacterSheet;
