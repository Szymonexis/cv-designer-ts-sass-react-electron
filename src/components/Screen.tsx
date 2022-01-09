import React from "react";

import "./Screen.scss";

export interface ScreenProps {
	className?: string;
	data?: Object;
}

const Screen: React.FC<ScreenProps> = (props) => {
	return (
		<div
			className={
				props.className !== undefined
					? "screen-" + props.className
					: "screen"
			}
		>
			{props.children}
		</div>
	);
};

export default Screen;
