import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';

const BuildEquipment = (props) => {
	const { setFieldValue } = props;
	const [selectedKit, setSelectedKit] = useState();
	const setKit = (value) => {
		setSelectedKit(value);
		setFieldValue('kit', value);
	};
	return (
		<div>
			<div>
				{props.starter.map((kit, i) => {
					return (
						<div key={kit._id}>
							<Button onClick={() => setKit(kit)} type="button">
								{kit.name}
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

BuildEquipment.defaultProps = {
	starter: [
		{
			_id: 'paladin321',
			name: 'paladin',
			value: 'items',
			description: 'description paladin',
		},
		{
			_id: 'scholar231',
			name: 'scholar',
			value: 'items',
			description: 'description scholar',
		},
		{
			_id: 'adventurer412',
			name: 'adventurer',
			value: 'items',
			description: 'description adventurer',
		},
	],
};

export default BuildEquipment;
