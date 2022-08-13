import React, { createContext, useEffect, useReducer } from 'react';

// Inital Values of the Store
const initialState = {
	loggedIn: false,
	email: '',
	displayName: '',
	password: '',
	confirmPasswrod: '',
};
const userContext = createContext(initialState);
const { Provider } = userContext;

export const userContextActions = {
	SIGN_IN: 'signIn',
	SIGN_OUT: 'signOut',
};

const reducer = (state, action) => {
	switch (action.type) {
		case userContextActions.SIGN_IN:
			const newState = action.value;
			return newState;
		case userContextActions.SIGN_OUT:
			localStorage.removeItem('login');
			const checkLogin = JSON.parse(localStorage.getItem('login'));
			console.log('checkLogin', checkLogin);
			return initialState;
		default:
			throw new Error();
	}
};

const UserContextStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const checkLogin = JSON.parse(localStorage.getItem('login'));
		if (checkLogin.loggedIn) {
			dispatch({
				type: userContextActions.SIGN_IN,
				value: checkLogin,
			});
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('login', JSON.stringify(state));
	}, [state]);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { userContext, UserContextStateProvider };
