import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { alertContext } from '../context/alertContext';
import AlertField from './AlertField';

const Toast = () => {
	const alerts = useContext(alertContext);

	return (
		<>
			<div className="absolute space-y-2 right-0 m-2">
				{alerts.state.alerts.map((alert) => {
					return <AlertField {...alert} key={alert.id} />;
				})}
			</div>
		</>
	);
};
Toast.propTypes = {};

Toast.defaultProps = {};

export default Toast;
