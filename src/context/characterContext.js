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
};
const characterContext = createContext(initialState);
const { Provider } = characterContext;

export const characterContextActions = {
	UPDATE_ATTRIBUTES: 'UPDATE_ATTRIBUTES',
};

const CharacterContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case characterContextActions.UPDATE_ATTRIBUTES:
				console.log('action.value', action.value);
				const newState = {
					...state,
					attributes: action.value,
				};
				return newState;
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { characterContext, CharacterContextStateProvider };
