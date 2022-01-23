import React, { useState } from 'react';

const SavingThrows = ({ value, label, subLabel, subLabelClassName }) => {
	const [check, setCheck] = useState(false);
	//const [check, setCheck] = useState(false) throws an error -- Warning: Received `false` for a non-boolean attribute `check`.

	return (
		<div className=" flex text-sm max-w-fit justify-center">
			<div className="px-2 flex items-center form-check">
				<input
					value={check}
					onClick={() => setCheck(!check)}
					className="form-check-input border-gray-300 rounded-sm checked:bg-transparent checked:border checked:border-gray-300 checked:hover:bg-transparent focus:bg-transparent checked:focus:bg-transparent checked:hover:border-white  cursor-pointer bg-transparent"
					type="checkbox"
					id=""
				/>
			</div>
			<div className=" px-2">{!check ? value : value + 4}</div>
			<div className="pl-2 ">
				<span className="">{label}</span>
				<span className={`${subLabelClassName} ml-2 text-xs `}>{subLabel}</span>
			</div>
		</div>
	);
};

export default SavingThrows;
