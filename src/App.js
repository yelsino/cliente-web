import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/autenticacion/authState";
import AlertaState from "./context/alertas/alertaState";
import ProductoState from "./context/productos/productoState";
import tokenAuth from "./config/token";
import Login from "./components/layout/auth/Login";
import NuevaCuenta from "./components/layout/auth/NuevaCuenta";
import Tienda from "./components/layout/Tienda/Tienda";
import ListaState from "./context/listas/listaState";
import ElementState from "./context/elementos/elementState";
import Admin from "./components/layout/admin/Admin";

// revisar si existe token
const token = localStorage.getItem("token");
if (token) {
	tokenAuth(token);
}

function App() {
	return (
		<ElementState>
			<AlertaState>
				<ListaState>
					<ProductoState>
						<AuthState>
							<Router>
								<Switch>
									<Route exact path="/" component={Login} />
									<Route exact path="/registro" component={NuevaCuenta} />
									<Route exact path="/tienda" component={Tienda} />
									<Route exact path="/admin" component={Admin} />
								</Switch>
							</Router>
						</AuthState>
					</ProductoState>
				</ListaState>
			</AlertaState>
		</ElementState>
	);
}

export default App;
