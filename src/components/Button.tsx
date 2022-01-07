import React from "react";

import "./Button.scss"

interface ButtonProps {
	className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={
				props.className !== undefined ? "button-" + props.className : "button"
			}
		>
			{props.children}
		</button>
	);
};

export default Button;
