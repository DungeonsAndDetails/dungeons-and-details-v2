import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	classes: [],
};
const classListContext = createContext(initialState);
const { Provider } = classListContext;

export const classListContextActions = {
	SET_CLASSES: 'SET_CLASSES',
};

const ClassListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getClasses = async () => {
		const response = await axios.get('http://localhost:4000/classes/all');
		if (response.status === 200) {
			dispatch({
				type: classListContextActions.SET_CLASSES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createClass = async (values) => {
		const response = await axios.put('http://localhost:4000/classes/create', values);
		if (response.status === 200) {
			getClasses();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'CLASS CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateClass = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/classes/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getClasses();
		} else {
			console.log('throw error');
		}
	};

	const deleteClass = async (value) => {
		const response = await axios.delete(`http://localhost:4000/classes/${value}`);
		if (response.status === 200) {
			getClasses();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getClasses();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case classListContextActions.SET_CLASSES:
				return {
					classes: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getClasses, createClass, deleteClass, updateClass }}>
			{children}
		</Provider>
	);
};

export { classListContext, ClassListContextStateProvider };
