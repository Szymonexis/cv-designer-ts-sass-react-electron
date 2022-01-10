import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

interface ButtonProps {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	to?: string;
	dark?: true;
}

const Button: React.FC<ButtonProps> = (props) => {
	let returnElement;

	if (props.to === undefined) {
		returnElement = (
			<div className="button-div">
				<button
					className={
						props.className !== undefined
							? "button-" + props.className
							: "button"
					}
					onClick={props.onClick}
				>
					{props.children}
				</button>
			</div>
		);
	} else {
		returnElement = (
			<div className="button-div">
				<Link
					className={
						props.className !== undefined
							? "button-" + props.className
							: "button"
					}
					to={props.to}
				>
					<button
						className={
							props.className !== undefined
								? "button-" + props.className
								: "button"
						}
					>
						{props.children}
					</button>
				</Link>
			</div>
		);
	}

	return returnElement;
};

export default Button;
