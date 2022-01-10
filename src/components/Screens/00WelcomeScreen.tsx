import React from "react";
import { NavLink } from "react-router-dom";

import Screen from "../Screen";
import Card from "../Card";
import Button from "../Button";

import "./00WelcomeScreen.scss";

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = (props) => {
	const className = "welcome";

	return (
		<Screen className={className}>
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
