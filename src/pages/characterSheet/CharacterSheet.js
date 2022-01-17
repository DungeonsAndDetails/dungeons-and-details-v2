import React, { useContext } from 'react';
import AttributeButton from '../../components/AttributeButton';
import Button from '../../components/Button';
import { characterContext, characterContextActions } from '../../context/characterContext';
//BG color of sheet TBD palceholder gray 600
const CharacterSheet = () => {
	const charContext = useContext(characterContext);
	console.log('charContext', charContext);

	const saveAttributes = () => {
		console.log('hello');
	};

	return (
		<div>
			<div className="grid grid-cols-6">
				<AttributeButton
					label="Strength"
					value={charContext.state.attributes.strength}
					decrementOnChange={() =>
						charContext.dispatch({
							type: characterContextActions.UPDATE_ATTRIBUTES,
							value: {
								...charContext.state.attributes,
								strength: charContext.state.attributes.strength - 1,
							},
						})
					}
					IncrementOnChange={() =>
						charContext.dispatch({
							type: characterContextActions.UPDATE_ATTRIBUTES,
							value: {
								...charContext.state.attributes,
								strength: charContext.state.attributes.strength + 1,
							},
						})
					}
				/>
				{/* <AttributeButton
					label="Constituition"
					value={count.constituition}
					decrementOnChange={() => setCount({ ...count, constituition: count.constituition - 1 })}
					IncrementOnChange={() => setCount({ ...count, constituition: count.constituition + 1 })}
				/>
				<AttributeButton
					label="Dexterity"
					value={count.dexterity}
					decrementOnChange={() => setCount({ ...count, dexterity: count.dexterity - 1 })}
					IncrementOnChange={() => setCount({ ...count, dexterity: count.dexterity + 1 })}
				/>
				<AttributeButton
					label="Intellegence"
					value={count.intellegence}
					decrementOnChange={() => setCount({ ...count, intellegence: count.intellegence - 1 })}
					IncrementOnChange={() => setCount({ ...count, intellegence: count.intellegence + 1 })}
				/>
				<AttributeButton
					label="Wisdom"
					value={count.wisdom}
					decrementOnChange={() => setCount({ ...count, wisdom: count.wisdom - 1 })}
					IncrementOnChange={() => setCount({ ...count, wisdom: count.wisdom + 1 })}
				/>
				<AttributeButton
					label="Charisma"
					value={count.charisma}
					decrementOnChange={() => setCount({ ...count, charisma: count.charisma - 1 })}
					IncrementOnChange={() => setCount({ ...count, charisma: count.charisma + 1 })}
				/> */}
			</div>
		</div>
	);
};
export default CharacterSheet;
