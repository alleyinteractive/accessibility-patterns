import propTypes from 'prop-types';
import React from 'react';

import './typescript-example.scss';

interface ButtonProps {
	primary: boolean;
}

const Button: React.FC<ButtonProps> = ({ primary }) => {
	return (
		<button style={{ backgroundColor: primary ? '#e55842' : 'gray' }}>
		Click me
		</button>
	);
};

Button.propTypes = {
	primary: propTypes.bool.isRequired,
};

export default Button;

