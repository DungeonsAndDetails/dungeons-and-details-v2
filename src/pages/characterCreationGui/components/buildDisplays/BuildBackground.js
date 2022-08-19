import { useContext, useState } from 'react';
import Button from '../../../../components/Button';
import { backgroundListContext } from '../../../../context/backgroundListContext';

const BuildBackground = ({ setFieldValue }) => {
	const backgrounds = useContext(backgroundListContext);
	const [selectedBackground, setSelectedBackground] = useState();
	const setBackground = (values) => {
		setSelectedBackground(values);
		setFieldValue('background', values);
	};

	// console.log('SBG', selectedBackground);
	return (
		<div>
			<div>
				{backgrounds.state.backgrounds.map((backgroundInfo, i) => {
					return (
						<div key={backgroundInfo._id}>
							<Button type="button" onClick={() => setBackground(backgroundInfo)}>
								{backgroundInfo.name}
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildBackground;
