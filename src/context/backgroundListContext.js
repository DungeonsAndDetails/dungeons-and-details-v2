import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	backgrounds: [],
};
const backgroundListContext = createContext(initialState);
const { Provider } = backgroundListContext;

export const backgroundListContextActions = {
	SET_BACKGROUND: 'SET_BACKGROUND',
};

const BackgroundListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getBackgrounds = async () => {
		const response = await axios.get('http://localhost:4000/backgrounds/all');
		if (response.status === 200) {
			dispatch({
				type: backgroundListContextActions.SET_BACKGROUND,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createBackground = async (values) => {
		const response = await axios.put('http://localhost:4000/backgrounds/create', values);
		if (response.status === 200) {
			getBackgrounds();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'BACKGROUND CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateBackground = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/backgrounds/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getBackgrounds();
		} else {
			console.log('throw error');
		}
	};

	const deleteBackground = async (value) => {
		const response = await axios.delete(`http://localhost:4000/backgrounds/${value}`);
		if (response.status === 200) {
			getBackgrounds();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getBackgrounds();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case backgroundListContextActions.SET_BACKGROUND:
				return {
					backgrounds: action.value,
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
				getBackgrounds,
				createBackground,
				deleteBackground,
				updateBackground,
			}}
		>
			{children}
		</Provider>
	);
};

export { backgroundListContext, BackgroundListContextStateProvider };
