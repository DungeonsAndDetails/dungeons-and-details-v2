import { useEffect } from 'react';
import TextInputField from '../../../../components/TextInputField';

const BuildAbilityScores = ({ setFieldValue, values }) => {
	useEffect(() => {
		let value = values.attributes.strength.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.strength.mod', temp);
	}, [setFieldValue, values.attributes.strength.value]);
	useEffect(() => {
		let value = values.attributes.dexterity.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.dexterity.mod', temp);
	}, [setFieldValue, values.attributes.dexterity.value]);
	useEffect(() => {
		let value = values.attributes.constitution.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.constitution.mod', temp);
	}, [setFieldValue, values.attributes.constitution.value]);
	useEffect(() => {
		let value = values.attributes.intelligence.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.intelligence.mod', temp);
	}, [setFieldValue, values.attributes.intelligence.value]);
	useEffect(() => {
		let value = values.attributes.wisdom.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.wisdom.mod', temp);
	}, [setFieldValue, values.attributes.wisdom.value]);
	useEffect(() => {
		let value = values.attributes.charisma.value;
		let temp = 0;
		if (value >= 10) {
			temp = Math.floor(value / 2 - 5);
		} else {
			temp = Math.ceil(value / 2 - 5);
		}
		setFieldValue('attributes.charisma.mod', temp);
	}, [setFieldValue, values.attributes.charisma.value]);

	return (
		<div>
			<div className="w-min">
				<div className="">
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Strength</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.strength.value"
							type="number"
						/>
					</div>
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Dexterity</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.dexterity.value"
							type="number"
						/>
					</div>
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Constitution</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.constitution.value"
							type="number"
						/>
					</div>
				</div>
				<div className="">
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Intelligence</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.intelligence.value"
							type="number"
						/>
					</div>
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Wisdom</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.wisdom.value"
							type="number"
						/>
					</div>
					<div className="border-2 border-testTertiary">
						<div className="flex justify-center">
							<span className="m-1">Charisma</span>
						</div>
						<TextInputField
							className="text-center"
							placeholder=""
							name="attributes.charisma.value"
							type="number"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuildAbilityScores;
