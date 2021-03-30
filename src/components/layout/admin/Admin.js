import { Fragment, useContext, useEffect } from "react";
import Panel from "../../moleculas/Panel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Listas from "./Listas";
import Pedidos from "./Pedidos";
import Reclamos from "./Reclamos";
import Cuenta from "./Cuenta";
import ListaContext from "../../../context/listas/listaContext";
import Lista from "../../organismos/lista";
import AuthContext from "../../../context/autenticacion/authContext";
import DireccionContext from "../../../context/direcciones/direccionContext";

const Admin = () => {
	const listasContext = useContext(ListaContext);
	const { listas, obtenerListas } = listasContext;
	const authContext = useContext(AuthContext);
	const { usuarioAutenticado } = authContext;
	const direccionesContext = useContext(DireccionContext);
	const {direcciones, obtenerDirecciones} = direccionesContext

	useEffect(() => {
		obtenerListas();
		usuarioAutenticado();
		obtenerDirecciones()
	}, []);
	return (
		<Fragment>
			<Router>
				<div className="flex">
					<div className="w-72 ">
						<Panel />
					</div>
					<div className="ml-36 mr-10  w-full mt-10 ">
						<Switch>
							<Route exact path={"/admin/listas"} component={Listas} />
							<Route path={"/admin/listas/:listaId"} component={Lista} />
							<Route exact path={"/admin/pedidos"} component={Pedidos} />
							<Route exact path={"/admin/reclamos"} component={Reclamos} />
							<Route exact path={"/admin/cuenta"} component={Cuenta} />
						</Switch>
					</div>
				</div>
			</Router>
		</Fragment>
	);
};

export default Admin;
