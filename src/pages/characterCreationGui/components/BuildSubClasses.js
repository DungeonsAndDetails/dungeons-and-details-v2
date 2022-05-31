import React, { useState } from 'react';
import ClassButton from '../../../components/ClassButton';
const BuildSubClasses = () => {
	return (
		<div>
			<div>
				{subClasses.map((classInfo, i) => {
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

export default BuildSubClasses;
