import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../../components/Button';
import TextInputField from '../../components/TextInputField';

const BuildDiceRolls = ({ rolls }) => {
	let sum = 0;
	let items = [];
	rolls.diceRolls.forEach((roll, i) => {
		sum = sum + roll;
		items.push(<div key={`${i} roll`}>{roll}</div>);
	});
	items.push(<div key={'sum'}>sum: {sum + rolls.diceModifier}</div>);
	items.push(<div key={'modifier'}>modifier: {rolls.diceModifier}</div>);

	return <div className="grid grid-cols-3">{items}</div>;
};
const Dice = (props) => {
	const [rolls, setRolls] = useState([]);
	const getRolls = (number, diceAmount) => {
		return Math.ceil(Math.random() * number);
	};
	const onSubmit = (values) => {
		// decontructed values from formik
		const { diceType, diceAmount, diceModifier } = values;
		let diceRolls = [];
		// for loop, i stands for iteration
		for (let i = 0; i < diceAmount; i++) {
			const roll = getRolls(diceType);
			diceRolls.push(roll);
		}

		const temp = [...rolls];
		temp.push({ diceRolls, diceModifier });
		setRolls(temp);
	};

	return (
		<Formik
			initialValues={{
				diceAmount: 1,
				diceType: 6,
				diceModifier: 0,
			}}
			onSubmit={onSubmit}
		>
			<Form>
				<div className="grid grid-cols-4">
					<TextInputField label="Amount" name="diceAmount" type="number" />
					<TextInputField label="Dice" name="diceType" type="number" />
					<TextInputField label="Mod" name="diceModifier" type="number" />

					<div className=" mt-auto">
						<Button type="submit">Roll</Button>
					</div>
					<div></div>

					<div>
						{rolls.map((rollCollection, i) => {
							return <BuildDiceRolls key={i} rolls={rollCollection} />;
						})}
					</div>
				</div>
			</Form>
		</Formik>
	);
};

Dice.defaultProps = {
	numbers: [
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
	],
};

export default Dice;
