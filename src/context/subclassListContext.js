import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	subclasses: [],
};
const subclassListContext = createContext(initialState);
const { Provider } = subclassListContext;

export const subclassListContextActions = {
	SET_SUBCLASSES: 'SET_SUBCLASSES',
};

const SubclassListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getSubclasses = async () => {
		const response = await axios.get('http://localhost:4000/subclasses/all');
		if (response.status === 200) {
			dispatch({
				type: subclassListContextActions.SET_SUBCLASSES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createSubclass = async (values) => {
		const response = await axios.put('http://localhost:4000/subclasses/create', values);
		if (response.status === 200) {
			getSubclasses();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'SUBCLASS CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateSubclass = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/subclasses/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getSubclasses();
		} else {
			console.log('throw error');
		}
	};

	const deleteSubclass = async (value) => {
		const response = await axios.delete(`http://localhost:4000/subclasses/${value}`);
		if (response.status === 200) {
			getSubclasses();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getSubclasses();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case subclassListContextActions.SET_SUBCLASSES:
				return {
					subclasses: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider
			value={{ state, dispatch, getSubclasses, createSubclass, deleteSubclass, updateSubclass }}
		>
			{children}
		</Provider>
	);
};

export { subclassListContext, SubclassListContextStateProvider };
