function dice(data) {
	const diceSplit = data.split('d');
	const modSplit = diceSplit[1].split('+');
	const rollAmount = diceSplit[0];
	const rollDie = modSplit[0];
	const rollMod = modSplit[1] ? modSplit[1] : 0;
	const dieMod = 0;

	let command = '/roll ' + data;
	let diceRolls = [];

	const getRoll = () => {
		return Math.ceil(Math.random() * rollDie + dieMod);
	};

	for (let i = 0; i < rollAmount; i++) {
		const roll = getRoll();
		diceRolls.push(roll);
	}

	const diceRollsSum = diceRolls.reduce((a, b) => a + b, 0) + parseInt(rollMod);
	let result = {
		diceRolls: diceRolls,
		sum: diceRollsSum,
		command: command,
		diceMod: parseInt(rollMod),
	};

	return result;
}

module.exports = { dice };
