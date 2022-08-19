import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	genders: [],
};
const gendersListContext = createContext(initialState);
const { Provider } = gendersListContext;

export const gendersListContextActions = {
	SET_GENDERS: 'SET_GENDERS',
};

const GendersListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);

	const getGenders = async () => {
		const response = await axios.get('http://localhost:4000/genders/all');
		if (response.status === 200) {
			dispatch({
				type: gendersListContextActions.SET_GENDERS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createGender = async (values) => {
		const response = await axios.put('http://localhost:4000/genders/create', values);
		if (response.status === 200) {
			getGenders();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'GENDER CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateGender = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/genders/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getGenders();
		} else {
			console.log('throw error');
		}
	};

	const deleteGender = async (value) => {
		const response = await axios.delete(`http://localhost:4000/genders/${value}`);
		if (response.status === 200) {
			getGenders();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getGenders();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case gendersListContextActions.SET_GENDERS:
				return {
					genders: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getGenders, createGender, deleteGender, updateGender }}>
			{children}
		</Provider>
	);
};

export { gendersListContext, GendersListContextStateProvider };
