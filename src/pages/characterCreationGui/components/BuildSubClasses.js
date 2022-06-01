import React, { useState, useContext, useEffect } from 'react';
import ClassButton from '../../../components/ClassButton';
import { classListContext } from '../../../context/classListContext';
import { subclassListContext } from '../../../context/subclassListContext';

// key needs to be id from backend
const BuildSubclasses = ({ setFieldValue, selectedClass }) => {
	const classes = useContext(classListContext);
	const subclasses = useContext(subclassListContext);
	const [selectedSubclass, setSelectedSubclass] = useState(null);
	const [availableSubclasses, setAvailableSubclasses] = useState([]);
	useEffect(() => {
		if (selectedClass && subclasses.state.subclasses) {
			const test = subclasses.state.subclasses.filter((subclass) => {
				return subclass.class._id === selectedClass._id;
			});
			setAvailableSubclasses(test);
		}
	}, [selectedClass, subclasses.state.subclasses]);
	const setSubclass = (values) => {
		setSelectedSubclass(values);
		setFieldValue('subclass', values);
	};

	// console.log('SUBRACE RACE', test);
	// console.log('selectedSubclass', selectedSubclass);
	// console.log('availableSubclasses', availableSubclasses);
	// console.log('Classes', classes.state.classes);
	// console.log('Subclasses', subclasses.state.subclasses);

	return (
		<div>
			<div>
				{availableSubclasses.map((subclassInfo, i) => {
					return (
						<div key={subclassInfo.name}>
							<ClassButton
								onClick={() => setSubclass(subclassInfo)}
								display={subclassInfo.name}
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

export default BuildSubclasses;
