import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';

// Inital Values of the Store

const initialState = {
	items: [],
};

const itemsContext = createContext(initialState);
const { Provider } = itemsContext;

export const itemsContextActions = {
	SET_ITEMS: 'SET_ITEMS',
};

const ItemsContextStateProvider = ({ children }) => {
	const getItems = async () => {
		const response = await axios.get('http://localhost:4000/items/all');
		if (response.status === 200) {
			dispatch({
				type: itemsContextActions.SET_ITEMS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createItem = async (values) => {
		const response = await axios.put('http://localhost:4000/items/create', values);
		if (response.status === 200 || response.status === 201) {
			getItems();
		} else {
			console.log('throw error');
		}
	};

	const updateItem = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/items/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getItems();
		} else {
			console.log('throw error');
		}
	};

	const deleteItem = async (value) => {
		const response = await axios.delete(`http://localhost:4000/items/${value}`);
		if (response.status === 200) {
			getItems();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case itemsContextActions.SET_ITEMS:
				return {
					items: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getItems, deleteItem, createItem, updateItem }}>
			{children}
		</Provider>
	);
};

export { itemsContext, ItemsContextStateProvider };
