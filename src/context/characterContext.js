import React, { createContext, useReducer } from 'react';

// Inital Values of the Store

const initialState = {
	attributes: {
		strength: 10,
		constitution: 10,
		dexterity: 10,
		intellegence: 10,
		wisdom: 10,
		charisma: 10,
	},
	level: 0,
	hitDie: {
		wizard: 6,
		monk: 8,
		paladin: 10,
		barbarian: 12,
	},
	tempHp: 5,
	currentHitDie: 0,
};
const characterContext = createContext(initialState);
const { Provider } = characterContext;

export const characterContextActions = {
	UPDATE_ATTRIBUTES: 'UPDATE_ATTRIBUTES',
	UPDATE_NAME: 'UPDATE_NAME',
	UPDATE_LEVEL: 'UPDATE_LEVEL',
	UPDATE_CURRENTHITDIE: 'UPDATE_CURRENTHITDIE',
};

const CharacterContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case characterContextActions.UPDATE_NAME:
				return {
					...state,
					name: action.value,
				};
			case characterContextActions.UPDATE_ATTRIBUTES:
				return {
					...state,
					attributes: action.value,
				};
			case characterContextActions.UPDATE_LEVEL:
				return {
					...state,
					level: action.value,
				};
			case characterContextActions.UPDATE_CURRENTHITDIE:
				return {
					...state,
					level: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { characterContext, CharacterContextStateProvider };
