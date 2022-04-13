import React, { useContext, useEffect, useState } from 'react';
import AttributeButton from '../../components/AttributeButton';
import ButtonNumber from '../../components/ButtonNumber';
import SavingThrows from '../../components/SavingThrows';
import { characterContext, characterContextActions } from '../../context/characterContext';

//BG color of sheet TBD palceholder gray 600
const CharacterSheet = () => {
	const charContext = useContext(characterContext);
	const [hp, setHp] = useState(0);
	const [HitDice, setHitDice] = useState(0);

	useEffect(() => {
		const { attributes, hitDie, level, hitDice } = charContext.state;
		const conMod = Math.floor(attributes.constitution / 2 - 5);
		const newHpValue = (hitDie.wizard / 2 + (conMod > 0 ? conMod : 0)) * level;
		const newHitDice = hitDice + level;
		const currentHitDice = newHitDice >= 0 ? newHitDice : 0;
		setHp(newHpValue);
		setHitDice(currentHitDice);
	}, [charContext.state]);

	return (
		<div>
			<div>Character Sheet</div>
			<div className="grid grid-cols-3 bg-gray-600 border-2 border-white bg-gradient-to-r from-indigo-800 via-cyan-700 to-indigo-800">
				<div className="grid grid-cols-2">
					<div className=" grid border-2 border-black ">
						<AttributeButton
							label="Strength"
							value={charContext.state.attributes.strength}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										strength: charContext.state.attributes.strength - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										strength: charContext.state.attributes.strength + 1,
									},
								})
							}
						/>
						<AttributeButton
							label="Constitution"
							value={charContext.state.attributes.constitution}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										constitution: charContext.state.attributes.constitution - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										constitution: charContext.state.attributes.constitution + 1,
									},
								})
							}
						/>
						<AttributeButton
							label="Dexterity"
							value={charContext.state.attributes.dexterity}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										dexterity: charContext.state.attributes.dexterity - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										dexterity: charContext.state.attributes.dexterity + 1,
									},
								})
							}
						/>
						<AttributeButton
							label="Intellegence"
							value={charContext.state.attributes.intellegence}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										intellegence: charContext.state.attributes.intellegence - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										intellegence: charContext.state.attributes.intellegence + 1,
									},
								})
							}
						/>
						<AttributeButton
							label="Wisdom"
							value={charContext.state.attributes.wisdom}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										wisdom: charContext.state.attributes.wisdom - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										wisdom: charContext.state.attributes.wisdom + 1,
									},
								})
							}
						/>
						<AttributeButton
							label="Charisma"
							value={charContext.state.attributes.charisma}
							decrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										charisma: charContext.state.attributes.charisma - 1,
									},
								})
							}
							incrementOnChange={() =>
								charContext.dispatch({
									type: characterContextActions.UPDATE_ATTRIBUTES,
									value: {
										...charContext.state.attributes,
										charisma: charContext.state.attributes.charisma + 1,
									},
								})
							}
						/>
					</div>
					<div className="border-2 flex flex-col  border-black">
						<div className="mx-auto border-2 border-black rounded-md flex">
							<label className="flex text-xl text font-semibold my-auto pr-3">Level</label>
							<span className="my-auto text-4xl pr-4">{charContext.state.level}</span>
							<div className="flex flex-col">
								<ButtonNumber
									incrementOnChange={() =>
										charContext.dispatch({
											type: characterContextActions.UPDATE_LEVEL,
											value: charContext.state.level + 1,
										})
									}
									decrementOnChange={() =>
										charContext.dispatch({
											type: characterContextActions.UPDATE_LEVEL,
											value: charContext.state.level - 1,
										})
									}
								/>
							</div>
						</div>
						<div className=" shadow-[0px_5px_15px_1px_rgba(0,0,0,0.3)]  shadow-black flex-col place-items-start mb-6 mt-6 flex bg-black bg-opacity-10 border-black">
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.strength / 2 - 5)}
								label="Strength"
							/>
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.constitution / 2 - 5)}
								label="Constitution"
							/>
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.dexterity / 2 - 5)}
								label="Dexterity"
							/>
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
								label="Intellegence"
							/>
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
								label="Wisdom"
							/>
							<SavingThrows
								className=""
								value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
								label="Charisma"
							/>
						</div>
						<div className=" static border-2 bg-black bg-opacity-10 border-black">
							<div className="   border-black">
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.strength / 2 - 5)}
									label="Athletics"
									subLabel="(Str)"
									subLabelClassName=" text-red-600"
								/>
							</div>
							<div className="  border-black">
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
									label="Acrobatics"
									subLabel="(Dex)"
									subLabelClassName=" text-green-600"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.dexterity / 2 - 5)}
									label="Slight of Hand"
									subLabel="(Dex)"
									subLabelClassName=" text-green-600"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.dexterity / 2 - 5)}
									label="Stealth"
									subLabel="(Dex)"
									subLabelClassName=" text-green-600"
								/>
							</div>
							<div className="   border-black">
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
									label="Arcana"
									subLabel="(Int)"
									subLabelClassName=" text-blue-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
									label="History"
									subLabel="(Int)"
									subLabelClassName=" text-blue-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
									label="Investigation"
									subLabel="(Int)"
									subLabelClassName=" text-blue-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
									label="Nature"
									subLabel="(Int)"
									subLabelClassName=" text-blue-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.intellegence / 2 - 5)}
									label="Religion"
									subLabel="(Int)"
									subLabelClassName=" text-blue-400"
								/>
							</div>
							<div className="  border-black">
								<SavingThrows
									className="static"
									value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
									label="Animal Handling"
									subLabel="(Wis)"
									subLabelClassName=" text-pink-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
									label="Insight"
									subLabel="(Wis)"
									subLabelClassName=" text-pink-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
									label="Medicine"
									subLabel="(Wis)"
									subLabelClassName=" text-pink-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
									label="Perception"
									subLabel="(Wis)"
									subLabelClassName=" text-pink-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.wisdom / 2 - 5)}
									label="Survival"
									subLabel="(Wis)"
									subLabelClassName=" text-pink-400"
								/>
							</div>
							<div className="">
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
									label="Deception"
									subLabel="(Cha)"
									subLabelClassName=" text-purple-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
									label="Intimidation"
									subLabel="(Cha)"
									subLabelClassName=" text-purple-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
									label="Preformance"
									subLabel="(Cha)"
									subLabelClassName=" text-purple-400"
								/>
								<SavingThrows
									className=""
									value={Math.floor(charContext.state.attributes.charisma / 2 - 5)}
									label="Persuasion"
									subLabel="(Cha)"
									subLabelClassName=" text-purple-400"
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="grid grid-cols-3">
						<div className="flex border border-black rounded-md flex-col">
							<label className="felx font-semibold text-center">Armor Class</label>
							<input
								defaultValue={0}
								className="w-24 text text-3xl text-center flex m-auto bg-transparent focus:border-2 "
							/>
						</div>
						<div className="flex border border-black rounded-md flex-col">
							<label className="felx font-semibold text-center">Initiative</label>
							<span className="text-3xl text-center ">
								{Math.floor(charContext.state.attributes.dexterity / 2 - 5)}
							</span>
						</div>
						<div className="flex border border-black rounded-md flex-col">
							<label className="felx font-semibold text-center">Speed</label>
							<input
								defaultValue={30}
								className="w-24 text text-3xl text-center flex m-auto bg-transparent focus:border-2 "
							/>
						</div>
					</div>
					<div className="border-black border-2 flex flex-col items-center bg-opacity-10 bg-black ">
						<label className="font-semibold underline">Hit Points</label>
						<div className="flex flex-col items-center ">
							<label>Max HP</label>
							<span>({hp})</span>
						</div>
						<span className="text-4xl">{hp + charContext.state.tempHp}</span>
						<div className="flex flex-col items-center  ">
							<span>({charContext.state.tempHp})</span>
							<label>Temporary Hit Points</label>
						</div>
					</div>
					<div className="grid grid-cols-2 border-black border-2">
						<div className=" mx-auto">
							<label className="pl-1 pr-3">Hit Dice</label>
							<div className="flex flex-row">
								<div className=" w-10 m-auto border-2 grid grid-cols-3 border-black rounded-full">
									<span className="text-2xl text-center justify-center flex col-start-2">
										{HitDice}
									</span>
								</div>
								<div className=" text-transparent border-black border-2 transpar ">
									<ButtonNumber
										className=" border-transparent"
										incrementOnChange={() =>
											charContext.dispatch({
												type: characterContextActions.UPDATE_HITDICE,
												value: charContext.state.hitDice + 1,
											})
										}
										decrementOnChange={() =>
											charContext.dispatch({
												type: characterContextActions.UPDATE_HITDICE,
												value: charContext.state.hitDice - 1,
											})
										}
									/>
								</div>
							</div>
						</div>
						<div className="mx-auto">
							<span className="">Death Saves</span>
							<div className=" flex justify-center mb-2">
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1"></button>
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1"></button>
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1"></button>
							</div>
							<div className=" flex justify-center">
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1 "></button>
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1"></button>
								<button className="border-black border-2 w-4 h-4 rounded-full mr-1"></button>
							</div>
						</div>
					</div>
					<div className="border-2 bg-black bg-opacity-10 border-black">
						<div className="grid grid-cols-5">
							<div className="mx-auto col-span-2 col-start-2">
								<label className="">Gear Name</label>
							</div>
							<div className="mx-auto">
								<label>AC/Value</label>
							</div>
						</div>
						<div className="grid grid-flow-col-dense grid-cols-5">
							<div className="grid bg-gray-800  border-black border-2 grid-flow-row col-span-2 col-start-2">
								<input className="bg-gray-700 border-black border-2 my-2" />
								<input className="bg-gray-700 border-black border-2 mb-2" />
								<input className="bg-gray-700 border-black border-2 mb-2" />
								<input className="bg-gray-700 border-black border-2 mb-2" />
							</div>
							<div className="grid bg-gray-800 grid-flow-row grid-cols-3 border-black border-2 col-span-1 col-start-4">
								<input className="bg-gray-700 border-black border-2 my-2 col-start-2 text-center" />
								<input className="bg-gray-700 border-black border-2 mb-2 col-start-2 text-center" />
								<input className="bg-gray-700 border-black border-2 mb-2 col-start-2 text-center" />
								<input className="bg-gray-700 border-black border-2 mb-2 col-start-2 text-center" />
							</div>
						</div>
					</div>
					<div>
						<div className="border-2 border-black px-20">
							<div className=" py-2 grid grid-cols-5">
								<span className="border-2 border-black bg-copper shadow-[0px_5px_15px_2px_rgba(0,0,0,0.3)] mx-auto  w-6 h-6 rounded-full"></span>
								<span className="border-2 border-black bg-iron shadow-[0px_5px_15px_2px_rgba(0,0,0,0.3)] mx-auto  w-6 h-6 rounded-full"></span>
								<span className="border-2 border-black bg-silver shadow-[0px_5px_15px_2px_rgba(0,0,0,0.3)] mx-auto  w-6 h-6 rounded-full"></span>
								<span className="border-2 border-black bg-gold shadow-[0px_5px_15px_2px_rgba(0,0,0,0.3)] mx-auto  w-6 h-6 rounded-full"></span>
								<span className="border-2 border-black bg-platinum shadow-[0px_5px_15px_2px_rgba(0,0,0,0.3)] mx-auto  w-6 h-6 rounded-full"></span>
							</div>
							<div className=" pb-2 grid grid-cols-5 ">
								<input className="w-12 border-2 border-black mx-auto text-center rounded-lg bg-gray-700 bg-opacity-60" />
								<input className="w-12 border-2 border-black mx-auto text-center rounded-lg bg-gray-700 bg-opacity-60" />
								<input className="w-12 border-2 border-black mx-auto text-center rounded-lg bg-gray-700 bg-opacity-60" />
								<input className="w-12 border-2 border-black mx-auto text-center rounded-lg bg-gray-700 bg-opacity-60" />
								<input className="w-12 border-2 border-black mx-auto text-center rounded-lg bg-gray-700 bg-opacity-60" />
							</div>
						</div>
						<div className="border-2 border-black">inventory</div>
					</div>
				</div>
				<div>
					<div className=" grid grid-flow-col h-16 border border-black ">
						<div className=" border border-black">Alignment</div>
						<div>Inspiration</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CharacterSheet;
