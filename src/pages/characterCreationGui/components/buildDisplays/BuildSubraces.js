import React, { useState, useContext, useEffect } from 'react';
import ClassButton from '../../../../components/ClassButton';
import { raceListContext } from '../../../../context/raceListContext';
import { subraceListContext } from '../../../../context/subraceListContext';

// key needs to be id from backend
const BuildSubraces = ({ setFieldValue, selectedRace }) => {
	const races = useContext(raceListContext);
	const subraces = useContext(subraceListContext);
	const [selectedSubrace, setSelectedSubrace] = useState(null);
	const [availableSubraces, setAvailableSubraces] = useState([]);
	useEffect(() => {
		if (selectedRace && subraces.state.subraces) {
			const test = subraces.state.subraces.filter((subrace) => {
				return subrace.race._id === selectedRace._id;
			});
			setAvailableSubraces(test);
		}
	}, [selectedRace, subraces.state.subraces]);
	const setSubrace = (values) => {
		setSelectedSubrace(values);
		setFieldValue('subrace', values);
	};

	// console.log('SUBRACE RACE', test);
	// console.log('selectedSubrace', selectedSubrace);
	// console.log('availableSubraces', availableSubraces);
	// console.log('selectedRace', selectedRace);

	return (
		<div>
			<div>
				{availableSubraces.map((subraceInfo, i) => {
					return (
						<div key={subraceInfo._id}>
							<ClassButton
								onClick={() => setSubrace(subraceInfo)}
								display={subraceInfo.name}
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

export default BuildSubraces;
