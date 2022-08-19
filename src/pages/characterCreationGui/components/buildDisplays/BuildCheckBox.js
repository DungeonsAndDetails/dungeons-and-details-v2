import { useState } from 'react';

const BuildCheckBox = ({ values, value, name, proficiencyBonus }) => {
	const [check, setCheck] = useState(false);

	return (
		<div className="flex gap-2 my-1">
			<div>
				<input type="checkbox" onClick={() => setCheck(!check)} />
			</div>
			<div>
				<span>{!check ? value : value + proficiencyBonus}</span>
				<span> {name}</span>
			</div>
		</div>
	);
};

export default BuildCheckBox;
