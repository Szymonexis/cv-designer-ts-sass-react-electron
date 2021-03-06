import { HashRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";

import WelcomeScreen from "./components/Screens/00WelcomeScreen";
import BasicDataScreen from "./components/Screens/01BasicDataScreenOne";

import "./App.scss";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={"/"}>
					<WelcomeScreen platform={"win32"} />
				</Route>
				<Route exact path={"/basicDataOne"}>
					<BasicDataScreen platform="win32" />
				</Route>
				<Redirect to={"/"} />
			</Switch>
		</Router>
	);
}

export default App;
