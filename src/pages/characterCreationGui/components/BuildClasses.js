import React from 'react';
import ClassButton from '../../../components/ClassButton';
// key needs to be id from backend
const BuildClasses = ({ classes }) => {
	console.log(classes);
	return (
		<div>
			<div>
				{classes.map((classes, i) => {
					return (
						<div key={classes.name}>
							<ClassButton classInfo={classes} className="capitalize" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildClasses;
