import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';

// Inital Values of the Store

const initialState = {
	attributes: [],
};

const attributesContext = createContext(initialState);
const { Provider } = attributesContext;

export const attributesContextActions = {
	SET_ATTRIBUTES: 'SET_ATTRIBUTES',
};

const AttributesContextStateProvider = ({ children }) => {
	const getAttributes = async () => {
		const response = await axios.get('http://localhost:4000/attributes/all');
		if (response.status === 200) {
			dispatch({
				type: attributesContextActions.SET_ATTRIBUTES,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createAttribute = async (values) => {
		const response = await axios.put('http://localhost:4000/attributes/create', values);
		if (response.status === 200 || response.status === 201) {
			getAttributes();
		} else {
			console.log('throw error');
		}
	};

	const updateAttribute = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/attributes/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getAttributes();
		} else {
			console.log('throw error');
		}
	};

	const deleteAttribute = async (value) => {
		const response = await axios.delete(`http://localhost:4000/attributes/${value}`);
		if (response.status === 200) {
			getAttributes();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getAttributes();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case attributesContextActions.SET_ATTRIBUTES:
				return {
					attributes: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider
			value={{ state, dispatch, getAttributes, deleteAttribute, createAttribute, updateAttribute }}
		>
			{children}
		</Provider>
	);
};

export { attributesContext, AttributesContextStateProvider };
