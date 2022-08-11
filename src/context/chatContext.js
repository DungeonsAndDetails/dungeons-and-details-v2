import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';

// Inital Values of the Store

const initialState = {
	chat: [],
};

const chatContext = createContext(initialState);
const { Provider } = chatContext;

export const chatContextActions = {
	SET_CHAT: 'SET_CHAT',
};

const ChatContextStateProvider = ({ children }) => {
	const getChat = async () => {
		const response = await axios.get('http://localhost:4000/chat/all');
		if (response.status === 200) {
			dispatch({
				type: chatContextActions.SET_CHAT,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createChat = async (values) => {
		const response = await axios.put('http://localhost:4000/chat/create', values);
		if (response.status === 200 || response.status === 201) {
			getChat();
		} else {
			console.log('throw error');
		}
	};

	const updateChat = async ({ values, id }) => {
		const response = await axios.put(`http://localhost:4000/chat/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getChat();
		} else {
			console.log('throw error');
		}
	};

	const deleteChat = async (value) => {
		const response = await axios.delete(`http://localhost:4000/chat/${value}`);
		if (response.status === 200) {
			getChat();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getChat();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case chatContextActions.SET_CHAT:
				return {
					chat: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getChat, deleteChat, createChat, updateChat }}>
			{children}
		</Provider>
	);
};

export { chatContext, ChatContextStateProvider };
