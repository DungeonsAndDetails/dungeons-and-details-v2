import React, { createContext, useReducer } from 'react';

// Inital Values of the Store
const initialState = {
	loggedIn: false,
	username: '',
};
const loginContext = createContext(initialState);
const { Provider } = loginContext;

export const loginContextActions = {
	SIGN_IN: 'signIn',
};

const LoginContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case loginContextActions.SIGN_IN:
				console.log('hitting context action', action.value);
				const newState = action.value;
				return newState;
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { loginContext, LoginContextStateProvider };
