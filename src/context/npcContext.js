import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	npcs: [],
};
const npcListContext = createContext(initialState);
const { Provider } = npcListContext;

export const npcListContextActions = {
	SET_NPCS: 'SET_NPCS',
};

const NpcListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getNpcs = async () => {
		const response = await axios.get('http://localhost:4000/npcs/all');
		if (response.status === 200) {
			dispatch({
				type: npcListContextActions.SET_NPCS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createNpc = async (values) => {
		const response = await axios.put('http://localhost:4000/npcs/create', values);
		if (response.status === 200) {
			getNpcs();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'NPC CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateNpc = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/npcs/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getNpcs();
		} else {
			console.log('throw error');
		}
	};

	const deleteNpc = async (value) => {
		const response = await axios.delete(`http://localhost:4000/npcs/${value}`);
		if (response.status === 200) {
			getNpcs();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getNpcs();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case npcListContextActions.SET_NPCS:
				return {
					npcs: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getNpcs, createNpc, deleteNpc, updateNpc }}>
			{children}
		</Provider>
	);
};

export { npcListContext, NpcListContextStateProvider };
