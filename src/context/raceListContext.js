import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	races: [],
};
const raceListContext = createContext(initialState);
const { Provider } = raceListContext;

export const raceListContextActions = {
	SET_RACES: 'SET_RACES',
};

const RaceListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getRaces = async () => {
		const response = await axios.get('http://localhost:4000/races/all');
		if (response.status === 200) {
			dispatch({
				type: raceListContextActions.SET_RACES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createRace = async (values) => {
		const response = await axios.put('http://localhost:4000/races/create', values);
		if (response.status === 200) {
			getRaces();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'RACE CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateRace = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/races/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getRaces();
		} else {
			console.log('throw error');
		}
	};

	const deleteRace = async (value) => {
		const response = await axios.delete(`http://localhost:4000/races/${value}`);
		if (response.status === 200) {
			getRaces();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getRaces();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case raceListContextActions.SET_RACES:
				return {
					races: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getRaces, createRace, deleteRace, updateRace }}>
			{children}
		</Provider>
	);
};

export { raceListContext, RaceListContextStateProvider };
