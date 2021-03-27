import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";
import {
	OBTENER_USUARIO,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	REGISTRO_EXITOSO,
	REGISTRO_ERROR,
	CERRAR_SESION,
} from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "../../context/autenticacion/authReducer";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		autenticado: null,
		usuario: null,
		mensaje: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// d las funcioens
	const registrarUsuario = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("api/auth/signup", datos);

			dispatch({
				type: REGISTRO_EXITOSO,
				payload: respuesta.data,
			});

			// obtener usuario autenticado
			usuarioAutenticado();
		} catch (error) {
			console.log(error);

			dispatch({
				type: REGISTRO_ERROR,
			});
		}
	};

	// d retorna al usuario autenticado
	const usuarioAutenticado = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			tokenAuth(token);
		}

		try {
			const respuesta = await clienteAxios.get("api/auth");

			dispatch({
				type: OBTENER_USUARIO,
				payload: respuesta.data,
			});
		} catch (error) {
			dispatch({
				type: LOGIN_ERROR,
			});
		}
	};

	// d cuando el usuario iniciar sesion
	const iniciarSesion = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("api/auth/signin", datos);
			console.log("daaaaa");
			dispatch({
				type: LOGIN_EXITOSO,
				payload: respuesta.data,
			});

			// Obtener al usuario
			usuarioAutenticado();
		} catch (error) {
			console.log(error.response);
			const alerta = {
				msg: "error al iniciar sesion",
				categoria: "alerta-error",
			};

			dispatch({
				type: LOGIN_ERROR,
				payload: alerta,
			});
		}
	};

	// CIERRA LA SESION DEL USUARIO
	const cerrarSesion = () => {
		dispatch({
			type: CERRAR_SESION,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				registrarUsuario,
				iniciarSesion,
				usuarioAutenticado,
				cerrarSesion,
			}}
		>
			{" "}
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
