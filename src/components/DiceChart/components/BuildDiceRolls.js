import '../styles.css';
const BuildDiceRolls = ({ rolls, mod, modd }) => {
	let sum = 0 + modd;
	let items = [];

	rolls.forEach((roll, i) => {
		sum = sum + roll;
		items.push(
			<div className="roll text-center" key={`${i} roll`}>
				{roll}
			</div>,
		);
	});
	items.push(
		<div className="font-bold" key="sum">
			= {sum}
		</div>,
	);
	console.log('items', items);

	return <div className="roll-output grid grid-flow-col max-w-sm">{items}</div>;
};

export default BuildDiceRolls;
