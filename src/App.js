import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
	apiKey: "AIzaSyA-2y6FY9L6hFHxSAIq6tNvuhxcqNe5aGw",
	authDomain: "tienda-nscarlos-v1.firebaseapp.com",
	projectId: "tienda-nscarlos-v1",
	storageBucket: "tienda-nscarlos-v1.appspot.com",
	messagingSenderId: "604735862393",
	appId: "1:604735862393:web:f38fe5189a805444b246a8"
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
												<Redirect to="/tienda" />
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
