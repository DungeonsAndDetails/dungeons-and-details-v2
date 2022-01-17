import React, { useState, useEffect } from 'react';

const ButtonN = () => {
	const initialState = '+';
	const [buttonText, setButtonText] = useState('0'); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

	// the effect
	useEffect(() => {
		if (buttonText !== initialState) {
			setTimeout(() => setButtonText(initialState), [1000]);
		}
	}, [buttonText]);

	const changeText = (text) => setButtonText(text);

	return (
		<button type="button" onClick={() => changeText('+')}>
			{buttonText}
		</button>
	);
};
ButtonN.propTypes = {};

ButtonN.defaultProps = {};

export default ButtonN;
