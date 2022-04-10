import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	spells: [],
};
const spellListContext = createContext(initialState);
const { Provider } = spellListContext;

export const spellListContextActions = {
	SET_SPELLS: 'SET_SPELLS',
};

const SpellListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getSpells = async () => {
		const response = await axios.get('http://localhost:4000/spells/all');
		if (response.status === 200) {
			dispatch({
				type: spellListContextActions.SET_SPELLS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createSpell = async (values) => {
		const response = await axios.put('http://localhost:4000/spells/create', values);
		if (response.status === 200) {
			getSpells();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'SPELL CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateSpell = async (values, id) => {
		const response = await axios.put(`http://localhost:4000/spells/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getSpells();
		} else {
			console.log('throw error');
		}
	};

	const deleteSpell = async (value) => {
		const response = await axios.delete(`http://localhost:4000/spells/${value}`);
		if (response.status === 200) {
			getSpells();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getSpells();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case spellListContextActions.SET_SPELLS:
				return {
					spells: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getSpells, createSpell, deleteSpell, updateSpell }}>
			{children}
		</Provider>
	);
};

export { spellListContext, SpellListContextStateProvider };
