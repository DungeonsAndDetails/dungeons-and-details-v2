import axios from 'axios';
import React, { createContext, useReducer } from 'react';

// Inital Values of the Store

const initialState = {
	characterCreation: {},
};

const characterCreationContext = createContext(initialState);
const { Provider } = characterCreationContext;

export const characterCreationContextActions = {
	SET_CHARACTERCREATION: 'SET_CHARACTERCREATION',
};

const CharacterCreationContextStateProvider = ({ children }) => {
	const createCharacterCreation = async (values) => {
		const response = await axios.put('http://localhost:4000/characters/create', values);
		if (response.status === 200 || response.status === 201) {
			// getCharacterCreation();
		} else {
			console.log('throw error');
		}
	};

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case characterCreationContextActions.SET_CHARACTERCREATION:
				return {
					characterCreation: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider
			value={{
				state,
				dispatch,
				createCharacterCreation,
			}}
		>
			{children}
		</Provider>
	);
};

export { characterCreationContext, CharacterCreationContextStateProvider };
