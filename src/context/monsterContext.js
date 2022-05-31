import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	monsters: [],
};
const monsterListContext = createContext(initialState);
const { Provider } = monsterListContext;

export const monsterListContextActions = {
	SET_MONSTERS: 'SET_MONSTERS',
};

const MonsterListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getMonsters = async () => {
		const response = await axios.get('http://localhost:4000/monsters/all');
		if (response.status === 200) {
			dispatch({
				type: monsterListContextActions.SET_MONSTERS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createMonster = async (values) => {
		const response = await axios.put('http://localhost:4000/monsters/create', values);
		if (response.status === 200) {
			getMonsters();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'MONSTER CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateMonster = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/monsters/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getMonsters();
		} else {
			console.log('throw error');
		}
	};

	const deleteMonster = async (value) => {
		const response = await axios.delete(`http://localhost:4000/monsters/${value}`);
		if (response.status === 200) {
			getMonsters();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getMonsters();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case monsterListContextActions.SET_MONSTERS:
				return {
					monsters: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getMonsters, createMonster, deleteMonster, updateMonster }}>
			{children}
		</Provider>
	);
};

export { monsterListContext, MonsterListContextStateProvider };
