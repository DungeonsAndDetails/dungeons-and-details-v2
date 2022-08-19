import React, { useState } from 'react';
import ClassButton from '../../../../components/ClassButton';

// key needs to be id from backend
const BuildRaces = ({ races, setFieldValue }) => {
	const [selectedRace, setSelectedRace] = useState(null);
	const setRace = (values) => {
		setSelectedRace(values);
		setFieldValue('race', values);
	};
	// console.log('selectedRace', selectedRace);
	// console.log(races);
	return (
		<div>
			<div>
				{races.map((raceInfo, i) => {
					return (
						<div key={raceInfo._id}>
							<ClassButton
								onClick={() => setRace(raceInfo)}
								display={raceInfo.name}
								className="capitalize"
								type="button"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildRaces;
