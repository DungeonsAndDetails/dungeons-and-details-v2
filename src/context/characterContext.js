import React, { createContext, useReducer } from 'react';

// Inital Values of the Store
const initialState = {
	attributes: {
		strength: 10,
		constituition: 10,
		dexterity: 10,
		intellegence: 10,
		wisdom: 10,
		charisma: 10,
	},
	name: '',
};
const characterContext = createContext(initialState);
const { Provider } = characterContext;

export const characterContextActions = {
	UPDATE_ATTRIBUTES: 'UPDATE_ATTRIBUTES',
	UPDATE_NAME: 'UPDATE_NAME',
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
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { characterContext, CharacterContextStateProvider };
