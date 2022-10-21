import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	abilities: [],
};
const abilitiesListContext = createContext(initialState);
const { Provider } = abilitiesListContext;

export const abilitiesListContextActions = {
	SET_ABILITIES: 'SET_ABILITIES',
};

const AbilitiesListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);

	const getAbilities = async () => {
		const response = await axios.get('http://localhost:4000/abilities/all');
		if (response.status === 200) {
			dispatch({
				type: abilitiesListContextActions.SET_ABILITIES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createAbility = async (values) => {
		const response = await axios.put('http://localhost:4000/abilities/create', values);
		if (response.status === 200) {
			getAbilities();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'ABILITY CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateAbility = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/abilities/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getAbilities();
		} else {
			console.log('throw error');
		}
	};

	const deleteAbility = async (value) => {
		const response = await axios.delete(`http://localhost:4000/abilities/${value}`);
		if (response.status === 200) {
			getAbilities();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getAbilities();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case abilitiesListContextActions.SET_ABILITIES:
				return {
					abilities: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider
			value={{ state, dispatch, getAbilities, createAbility, deleteAbility, updateAbility }}
		>
			{children}
		</Provider>
	);
};

export { abilitiesListContext, AbilitiesListContextStateProvider };
