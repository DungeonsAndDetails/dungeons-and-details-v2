import React, { createContext, useEffect, useReducer } from 'react';

// Inital Values of the Store
const initialState = {
	loggedIn: false,
	username: '',
};
const loginContext = createContext(initialState);
const { Provider } = loginContext;

export const loginContextActions = {
	SIGN_IN: 'signIn',
	SIGN_OUT: 'signOut',
};

const reducer = (state, action) => {
	switch (action.type) {
		case loginContextActions.SIGN_IN:
			const newState = action.value;
			return newState;
		case loginContextActions.SIGN_OUT:
			return initialState;
		default:
			throw new Error();
	}
};

const LoginContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const checkLogin = JSON.parse(localStorage.getItem('login'));
		if (checkLogin.loggedIn) {
			dispatch({
				type: loginContextActions.SIGN_IN,
				value: checkLogin,
			});
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('login', JSON.stringify(state));
	}, [state]);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { loginContext, LoginContextStateProvider };
