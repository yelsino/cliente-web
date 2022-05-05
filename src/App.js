import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect  } from "react-router-dom";
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
import DireccionState from "./context/direcciones/direccionState";
import Pedido from "./components/layout/Tienda/Pedido";
import PedidoState from "./context/pedidos/pedidoState";
// import Home from "./components/layout/home/homepage";
import ReclamoState from "./context/reclamos/reclamosState";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyB6sLIdAcgZsRhFWBOTDIJB4Sh1NAsJwbo",
	authDomain: "front-v1-ns.firebaseapp.com",
	projectId: "front-v1-ns",
	storageBucket: "front-v1-ns.appspot.com",
	messagingSenderId: "129750331895",
	appId: "1:129750331895:web:f6117f2da566cbd740fef2"
  };

initializeApp(firebaseConfig);

// revisar si existe token
const token = localStorage.getItem("token");
if (token) {
	tokenAuth(token);
}

function App() {
	return (
		<ReclamoState>
			<PedidoState>
				<DireccionState>
					<ElementState>
						<AlertaState>
							<ListaState>
								<ProductoState>
									<AuthState>
										<Router>
											<Switch>
												<Route exact path="/login" component={Login} />
												<Route exact path="/registro" component={NuevaCuenta} />
												<Route path="/tienda" component={Tienda} />
												<Route path="/admin" component={Admin} />
												<Route path="/pedido" component={Pedido} />
												{/* <Route path="/" component={Home} /> */}
												{/* redirect to /tienda */}
												<Redirect to="/" />
											</Switch>
										</Router>
									</AuthState>
								</ProductoState>
							</ListaState>
						</AlertaState>
					</ElementState>
				</DireccionState>
			</PedidoState>
		</ReclamoState>
	);
}

export default App;
