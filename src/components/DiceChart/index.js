import { useState } from 'react';
import Button from '../Button';
import BuildDiceRolls from './components/BuildDiceRolls';
import './styles.css';

const DiceChart = (value) => {
	const [rolls, setRolls] = useState([]);
	const [mod, setMod] = useState(0);
	const [modd, setModd] = useState(0);

	// mod is per die roll mod
	// modd is a mod added to the sum of all die rolled
	// *mendashi*

	const diceArr = [
		{
			name: 'd4',
			value: 4,
		},
		{
			name: 'd6',
			value: 6,
		},
		{
			name: 'd8',
			value: 8,
		},
		{
			name: 'd10',
			value: 10,
		},
		{
			name: 'd12',
			value: 12,
		},
		{
			name: 'd20',
			value: 20,
		},
		{
			name: 'd100',
			value: 100,
		},
	];
	const onChangeHandler1 = (e) => {
		setMod(parseInt(e.target.value, 10));
	};
	const onChangeHandler2 = (e) => {
		setModd(parseInt(e.target.value, 10));
	};

	const getRoll = (number, mod) => {
		return Math.ceil(Math.random() * number + mod);
	};
	const handleClick = ({ diceType, diceAmount, mod }) => {
		let diceRolls = [];
		// for loop, i stands for iteration
		for (let i = 0; i < diceAmount; i++) {
			const roll = getRoll(diceType, mod);

			diceRolls.push(roll);
		}
		// temp ...rolls is making sure that rolls is not overwritten saving the prevous values of rolls *i think
		const temp = [...rolls];
		temp.push(diceRolls);
		setRolls(temp);
	};

	return (
		<div className="">
			<div className=" roll-container">
				<div>
					<div className="grid grid-cols-6">
						<input
							placeholder="Mod"
							value={mod}
							type="number"
							onChange={onChangeHandler1}
							className="text-black border-2 text-center"
						/>
						<input
							placeholder="Modd"
							value={modd}
							type="number"
							onChange={onChangeHandler2}
							className="text-black border-2 text-center"
						/>
					</div>
				</div>
				<div className="grid grid-flow-col bg-black max-w-sm">
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button key={`${i} ${dice.name}`} className=" bg-transparent">
									{dice.name}
								</Button>
							);
						})}
					</div>
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button
									className="bg-transparent px-auto "
									onClick={(event) =>
										handleClick({ diceType: event.target.value, diceAmount: 1, mod: mod })
									}
									value={dice.value}
									key={`${i} ${dice.value}`}
								>
									1
								</Button>
							);
						})}
					</div>
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button
									className="bg-transparent"
									onClick={(event) =>
										handleClick({ diceType: event.target.value, diceAmount: 2, mod: mod })
									}
									value={dice.value}
									key={`${i} ${dice.value}`}
								>
									2
								</Button>
							);
						})}
					</div>
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button
									className="bg-transparent"
									onClick={(event) =>
										handleClick({ diceType: event.target.value, diceAmount: 3, mod: mod })
									}
									value={dice.value}
									key={`${i} ${dice.value}`}
								>
									3
								</Button>
							);
						})}
					</div>
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button
									className="bg-transparent"
									onClick={(event) =>
										handleClick({ diceType: event.target.value, diceAmount: 4, mod: mod })
									}
									value={dice.value}
									key={`${i} ${dice.value}`}
								>
									4
								</Button>
							);
						})}
					</div>
					<div>
						{diceArr.map((dice, i) => {
							return (
								<Button
									className="bg-transparent"
									onClick={(event) =>
										handleClick({ diceType: event.target.value, diceAmount: 5, mod: mod })
									}
									value={dice.value}
									key={`${i} ${dice.value}`}
								>
									5
								</Button>
							);
						})}
					</div>
				</div>

				<div className=" max-w-xl p-3 grid grid-flow-row border-2">
					{rolls.map((rollCollection, i) => {
						return <BuildDiceRolls key={i} mod={mod} modd={modd} rolls={rollCollection} />;
					})}
				</div>
			</div>
		</div>
	);
};

DiceChart.defaultProps = {};

export default DiceChart;
