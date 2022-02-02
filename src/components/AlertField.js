import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { alertContext, alertTypes, alertContextActions } from '../context/alertContext';

const AlertField = ({ type, text, id }) => {
	const alerts = useContext(alertContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			removeAlert();
		}, 10000);
		return () => clearTimeout(timer);
	}, []);

	const removeAlert = () => {
		alerts.dispatch({
			type: alertContextActions.REMOVE_ALERT,
			value: {
				id,
			},
		});
	};

	const title = (type) => {
		switch (type) {
			case alertTypes.ERROR:
				return 'Error';
			case alertTypes.WARNING:
				return 'Warning';
			case alertTypes.SUCCESS:
				return 'Success';
			case alertTypes.ALERT:
				return 'Alert';
			default:
				return 'Alert';
		}
	};

	const color = (type) => {
		switch (type) {
			case alertTypes.ERROR:
				return 'bg-red-400';
			case alertTypes.WARNING:
				return 'bg-yellow-400';
			case alertTypes.SUCCESS:
				return 'bg-green-400';
			case alertTypes.ALERT:
				return 'bg-blue-400';
			default:
				return 'bg-blue-400';
		}
	};

	return (
		<div
			className={`${color(
				type,
			)} shadow w-96 max-w-full cursor-pointer text-sm pointer-events-auto bg-clip-padding rounded-lg border shadow-gray-400`}
			id="static-example"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			data-mdb-autohide="false"
			onClick={() => {
				removeAlert();
			}}
		>
			<div className="flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-black rounded-t-lg">
				<p className="font-bold">{title(type)}</p>
				<div className="flex items-center">
					<p className="text-xs">11 mins ago</p>
				</div>
			</div>
			<div className="p-3 rounded-b-lg break-words text-gray-700">{text}</div>
		</div>
	);
};
AlertField.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

AlertField.defaultProps = {};

export default AlertField;
