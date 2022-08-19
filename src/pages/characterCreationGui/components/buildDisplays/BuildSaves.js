import { useContext } from 'react';
import { attributesContext } from '../../../../context/attributeContext';
import BuildCheckBox from './BuildCheckBox';

const BuildSaves = ({ values }) => {
	const attributes = useContext(attributesContext);
	const proficiencyBonus = 2;
	return (
		<div>
			<div>
				{attributes.state.attributes.map((attribute, i) => {
					console.log(attribute);
					console.log(values.attributes[attribute.value].mod);

					return (
						<div key={attribute._id}>
							<BuildCheckBox
								name={attribute.name}
								value={values.attributes[attribute.value].mod}
								proficiencyBonus={proficiencyBonus}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BuildSaves;
