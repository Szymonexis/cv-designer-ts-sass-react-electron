import React from "react";

import "./Card.scss";

interface CardProps {
	className?: string;
	data?: Object;
}

const Card: React.FC<CardProps> = (props) => {
	return (
		<div
			className={
				props.className !== undefined
					? "card-" + props.className
					: "card"
			}
		>
			{props.children}
		</div>
	);
};

export default Card;
