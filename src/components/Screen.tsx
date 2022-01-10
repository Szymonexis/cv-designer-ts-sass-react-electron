import React from "react";

import Header from "./Header";
import "./Screen.scss";

export interface ScreenProps {
	className?: string;
	data?: Object;
}

const Screen: React.FC<ScreenProps> = (props) => {
	return (
		<React.Fragment>
			<Header />
			<div
				className={
					props.className !== undefined
						? "screen-" + props.className
						: "screen"
				}
			>
				{props.children}
			</div>
		</React.Fragment>
	);
};

export default Screen;
