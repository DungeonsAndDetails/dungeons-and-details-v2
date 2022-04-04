import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	feats: [],
};
const featListContext = createContext(initialState);
const { Provider } = featListContext;

export const featListContextActions = {
	SET_FEATS: 'SET_FEATS',
};

const FeatListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getFeats = async () => {
		const response = await axios.get('http://localhost:4000/feats/all');
		if (response.status === 200) {
			dispatch({
				type: featListContextActions.SET_FEATS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createFeat = async (values) => {
		const response = await axios.put('http://localhost:4000/feats/create', values);
		if (response.status === 200) {
			getFeats();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'FEAT CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateFeat = async (values, id) => {
		const response = await axios.put(`http://localhost:4000/feats/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getFeats();
		} else {
			console.log('throw error');
		}
	};

	const deleteFeat = async (value) => {
		const response = await axios.delete(`http://localhost:4000/feats/${value}`);
		if (response.status === 200) {
			getFeats();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getFeats();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case featListContextActions.SET_FEATS:
				return {
					feats: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getFeats, createFeat, deleteFeat, updateFeat }}>
			{children}
		</Provider>
	);
};

export { featListContext, FeatListContextStateProvider };
