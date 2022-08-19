import { useContext } from 'react';
import TextInputField from '../../../../components/TextInputField';
import { gendersListContext } from '../../../../context/gendersContext';

const BuildGender = () => {
	const genders = useContext(gendersListContext);
	return (
		<div>
			{genders.state.genders.map((gendersInfo, i) => {
				return (
					<div key={gendersInfo._id}>
						<TextInputField type="radio" name="sex" label={gendersInfo.name} id={gendersInfo._id} />
					</div>
				);
			})}
		</div>
	);
};

export default BuildGender;
