import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	subraces: [],
};
const subraceListContext = createContext(initialState);
const { Provider } = subraceListContext;

export const subraceListContextActions = {
	SET_SUBRACES: 'SET_SUBRACES',
};

const SubraceListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getSubraces = async () => {
		const response = await axios.get('http://localhost:4000/subraces/all');
		if (response.status === 200) {
			dispatch({
				type: subraceListContextActions.SET_SUBRACES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createSubrace = async (values) => {
		const response = await axios.put('http://localhost:4000/subraces/create', values);
		if (response.status === 200) {
			getSubraces();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'SUBRACE CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateSubrace = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/subraces/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getSubraces();
		} else {
			console.log('throw error');
		}
	};

	const deleteSubrace = async (value) => {
		const response = await axios.delete(`http://localhost:4000/subraces/${value}`);
		if (response.status === 200) {
			getSubraces();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getSubraces();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case subraceListContextActions.SET_SUBRACES:
				return {
					subraces: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getSubraces, createSubrace, deleteSubrace, updateSubrace }}>
			{children}
		</Provider>
	);
};

export { subraceListContext, SubraceListContextStateProvider };
