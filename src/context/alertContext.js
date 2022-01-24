import React, { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const alertTypes = {
	ERROR: 'ERROR',
	WARNING: 'WARNING',
	SUCCESS: 'SUCCESS',
	ALERT: 'ALERT',
};

const initialState = {
	alerts: [
		{
			type: alertTypes.ERROR,
			text: 'ERROR ERROR',
			id: uuidv4(),
		},
		{
			type: alertTypes.WARNING,
			text: 'WARNING WARNING',
			id: uuidv4(),
		},
		{
			type: alertTypes.SUCCESS,
			text: 'SUCCESS SUCCESS',
			id: uuidv4(),
		},
		{
			type: alertTypes.ALERT,
			text: 'ALERT ALERT',
			id: uuidv4(),
		},
	],
};
const alertContext = createContext(initialState);
const { Provider } = alertContext;

// everytime an alert is created, create a timeout associated to the alert.
// When the timeout expires, remove the alert.
// Ensure ability to manually remove alert and also remove the timer associated.

export const alertContextActions = {
	NEW_ALERT: 'NEW_ALERT',
	REMOVE_ALERT: 'REMOVE_ALERT',
};

const AlertContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case alertContextActions.REMOVE_ALERT:
				const alerts = state.alerts.filter((alert) => alert.id !== action.value.id);
				return {
					...state,
					alerts,
				};
			case alertContextActions.NEW_ALERT:
				console.log('hitting alert context action', action.value);
				return {
					...state,
					alerts: [...state.alerts, { ...action.value, id: uuidv4() }],
				};
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { alertContext, AlertContextStateProvider, alertTypes };
