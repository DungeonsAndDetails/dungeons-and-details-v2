import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { alertContext, alertContextActions, alertTypes } from './alertContext';

// Inital Values of the Store

const initialState = {
	skills: [],
};
const skillListContext = createContext(initialState);
const { Provider } = skillListContext;

export const skillListContextActions = {
	SET_SKILLS: 'SET_SKILLS',
};

const SkillListContextStateProvider = ({ children }) => {
	const alerts = useContext(alertContext);
	const getSkills = async () => {
		const response = await axios.get('http://localhost:4000/skills/all');
		if (response.status === 200) {
			dispatch({
				type: skillListContextActions.SET_SKILLS,
				value: response.data,
			});
		} else {
			console.log('throw error');
		}
	};

	const createSkill = async (values) => {
		const response = await axios.put('http://localhost:4000/skills/create', values);
		if (response.status === 200) {
			getSkills();
			alerts.dispatch({
				type: alertContextActions.NEW_ALERT,
				value: {
					type: alertTypes.SUCCESS,
					text: 'SKILL CREATED',
				},
			});
		} else {
			console.log('throw error');
		}
	};

	const updateSkill = async (values, id) => {
		const response = await axios.put(`http://localhost:4000/skills/update/${id}`, values);
		if (response.status === 200 || response.status === 201) {
			getSkills();
		} else {
			console.log('throw error');
		}
	};

	const deleteSkill = async (value) => {
		const response = await axios.delete(`http://localhost:4000/skills/${value}`);
		if (response.status === 200) {
			getSkills();
		} else {
			console.log('throw error');
		}
	};

	useEffect(() => {
		getSkills();
	}, []);

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case skillListContextActions.SET_SKILLS:
				return {
					skills: action.value,
				};
			default:
				throw new Error();
		}
	}, initialState);

	return (
		<Provider value={{ state, dispatch, getSkills, createSkill, deleteSkill, updateSkill }}>
			{children}
		</Provider>
	);
};

export { skillListContext, SkillListContextStateProvider };
