import React from "react";

import Screen, { ScreenProps } from "../Screen";
import Card from "../Card";
import Button from "../Button";

import "./00WelcomeScreen.scss";

const WelcomeScreen: React.FC<ScreenProps> = (props) => {
	const className = "welcome";

	return (
		<Screen className={className} platform={props.platform}>
			<Card className={className}>
				<div>
					<img
						className={"img-" + className}
						src={require("../../resources/logo/logo-transparent.gif")}
						alt="CV-designer logo"
						width="250"
					/>
					<br />
					<Button to={"/basicDataOne"}>Start</Button>
				</div>
			</Card>
		</Screen>
	);
};

export default WelcomeScreen;
