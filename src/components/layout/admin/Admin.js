import { Fragment } from "react";
import Panel from "../../moleculas/Panel";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import Listas from "./Listas";
import Pedidos from "./Pedidos";
import Reclamos from "./Reclamos";
import Cuenta from "./Cuenta";

const Admin = () => {
	const history = useHistory();
	return (
		<Fragment>
			<Router>
				<div className="flex">
					<Panel />
					<Switch>
						<Route path={"/admin/listas"} component={Listas} />
						<Route path={"/admin/pedidos"} component={Pedidos} />
						<Route path={"/admin/reclamos"} component={Reclamos} />
						<Route path={"/admin/cuenta"} component={Cuenta} />
					</Switch>
				</div>
			</Router>
		</Fragment>
	);
};

export default Admin;
