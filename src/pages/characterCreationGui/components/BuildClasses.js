import React, { useState } from 'react';
import ClassButton from '../../../components/ClassButton';

// key needs to be id from backend
const BuildClasses = ({ classes, setFieldValue }) => {
	const [selectedClass, setSelectedClass] = useState(null);
	const setClass = (values) => {
		setSelectedClass(values);
		setFieldValue('class', values);
	};
	console.log('selectedClass', selectedClass);
	console.log(classes);
	return (
		<div>
			<div>
				{classes.map((classInfo, i) => {
					return (
						<div key={classInfo.name}>
							<ClassButton
								onClick={() => setClass(classInfo)}
								classInfo={classInfo}
								className="capitalize"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildClasses;
