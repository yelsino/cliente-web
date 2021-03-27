import { Fragment } from "react";
import Panel from "../../moleculas/Panel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listas from "./Listas";

const Admin = () => {
	return (
		<Router>
			<Panel />
			<Switch>
				<Route exact path="/" component={Listas} />
			</Switch>
		</Router>
	);
};

export default Admin;
