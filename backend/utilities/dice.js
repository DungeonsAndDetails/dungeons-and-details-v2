function dice(data) {
	const tempData = data.split('d');
	const tempData2 = tempData[1].split('+');
	const rollAmount = tempData[0];
	const rollDie = tempData2[0];
	const rollMod = tempData2[1] ? tempData2[1] : 0;
	const dieMod = 0;

	let command = '/roll ' + data;

	let rolls = [];
	let diceRolls = [];

	const getRoll = () => {
		return Math.ceil(Math.random() * rollDie + dieMod);
	};

	if (data) {
		for (let i = 0; i < rollAmount; i++) {
			const roll = getRoll();

			diceRolls.push(roll);
			// console.log('Roll', roll);
		}
		const temp = [...rolls];
		temp.push(diceRolls);
		rolls = temp;
	} else {
		console.log('ERROR');
	}
	const diceRollsSum = diceRolls.reduce((a, b) => a + b, 0) + parseInt(rollMod);
	let result = {
		diceRolls: diceRolls,
		sum: diceRollsSum,
		command: command,
		diceMod: parseInt(rollMod),
	};
	// console.log('sum', diceRollsSum);
	// console.log('Rolls', diceRolls);
	// console.log('Final Data', result);
	return result;
}

module.exports = { dice };
