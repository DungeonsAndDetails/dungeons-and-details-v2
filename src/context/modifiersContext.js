import axios from 'axios';
import React, { createContext, useEffect, useReducer, useContext } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	modifiers: {},
};
const modifierListContext = createContext(initialState);
const { Provider } = modifierListContext;

export const modifierListContextActions = {
	SET_MODIFIERS: 'SET_MODIFIERS',
};

const ModifierListContextStateProvider = ({ children }) => {
	const getModifiers = async () => {
		const response = await axios.get('http://localhost:4000/modifiers/all');
		if (response.status === 200) {
			dispatch({
				type: modifierListContextActions.SET_MODIFIERS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getModifiers();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case modifierListContextActions.SET_MODIFIERS:
				return {
					modifiers: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch, getModifiers }}>{children}</Provider>;
};

export { modifierListContext, ModifierListContextStateProvider };
