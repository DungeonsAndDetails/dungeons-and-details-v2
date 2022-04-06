import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	spellSchools: [],
};
const spellSchoolListContext = createContext(initialState);
const { Provider } = spellSchoolListContext;

export const spellSchoolListContextActions = {
	SET_SPELL_SCHOOLS: 'SET_SPELL_SCHOOLS',
};

const SpellSchoolListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getSpellSchools = async () => {
		const response = await axios.get('http://localhost:4000/spell-schools/all');
		if (response.status === 200) {
			dispatch({
				type: spellSchoolListContextActions.SET_SPELL_SCHOOLS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createSpellSchool = async (values) => {
		const response = await axios.put('http://localhost:4000/spell-schools/create', values);
		if (response.status === 200) {
			getSpellSchools();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'SPELL SCHOOL CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateSpellSchool = async (values, id) => {
		const response = await axios.put(`http://localhost:4000/spell-schools/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getSpellSchools();
		} else {
			console.log('throw error');
		}
	};

	const deleteSpellSchool = async (value) => {
		const response = await axios.delete(`http://localhost:4000/spell-schools/${value}`);
		if (response.status === 200) {
			getSpellSchools();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getSpellSchools();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case spellSchoolListContextActions.SET_SPELL_SCHOOLS:
				return {
					spellSchools: action.value,
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
				getSpellSchools,
				createSpellSchool,
				deleteSpellSchool,
				updateSpellSchool,
			}}
		>
			{children}
		</Provider>
	);
};

export { spellSchoolListContext, SpellSchoolListContextStateProvider };
