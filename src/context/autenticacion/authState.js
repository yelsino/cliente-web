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
	ACTUALZIAR_CUENTA,
	CODIGO_VERFICACION,
	MENSAJE_ALERTA,
	BLOQUEAR,
} from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "../../context/autenticacion/authReducer";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		autenticado: null,
		usuario: null,
		mensaje: null,
		codigoverificacion: null,
		bloqueologin: false,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// d las funcioens
	const registrarUsuario = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("api/auth/signup", datos);
			console.log(respuesta.data);
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
		dispatch({
			type: BLOQUEAR,
			payload: true,
		});
		try {
			const respuesta = await clienteAxios.post("api/auth/signin", datos);

			dispatch({
				type: LOGIN_EXITOSO,
				payload: respuesta.data,
			});

			// Obtener al usuario
			usuarioAutenticado();
		} catch (error) {
			if (error.response !== 200) {
				dispatch({
					type: BLOQUEAR,
					payload: false,
				});
			}

			const alerta = error?.response?.data?.message;
			dispatch({
				type: LOGIN_ERROR,
				payload: alerta,
			});

			setTimeout(() => {
				dispatch({
					type: LOGIN_ERROR,
					payload: null,
				});
			}, 3000);
		}
	};

	// CIERRA LA SESION DEL USUARIO
	const cerrarSesion = () => {
		dispatch({
			type: CERRAR_SESION,
		});
	};

	// d actualziar cuenta de usuario
	const actualizarCuentaDeUsuario = async (usuarioId, datos) => {
		try {
			const resultado = await clienteAxios.put(`api/users/${usuarioId}`, datos);
			dispatch({
				type: ACTUALZIAR_CUENTA,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const eliminarCuentadeUsuario = async (usuarioId) => {
		try {
			const resultado = await clienteAxios.delete(`api/users/${usuarioId}`);
			console.log(resultado);
			if (resultado.status === 200) {
				localStorage.clear();
				// window.location.replace(`${process.env.URL_PRODUCCION}`);
				// window.location.replace("http://localhost:3000/");
				window.location.replace("https://front-v1-ns.web.app/");
				console.log("cuenta eliminada");
			} else {
				return;
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	const generarCodigoDeVerificacion = async (data) => {
		try {
			const resultado = await clienteAxios.post(`api/codigos`, data);
			console.log(resultado);
		} catch (error) {
			console.log(error);
		}
	};

	const validarCodigoDeVerificacion = async (codigo) => {
		try {
			const resultado = await clienteAxios.get(
				`api/codigos/${codigo.toUpperCase()}`
			);
			console.log(resultado);
			if (resultado.status === 204) {
				dispatch({
					type: MENSAJE_ALERTA,
					payload:
						"codigo de verificacion no valido, verifique si es un codigo valido en su bandeja",
				});

				setTimeout(() => {
					dispatch({
						type: MENSAJE_ALERTA,
						payload: null,
					});
				}, 4000);
				return;
			}
			if (resultado.status === 200) {
				dispatch({
					type: CODIGO_VERFICACION,
					payload: resultado.data[0],
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const eliminarCodigoDeVerificacion = async (codigo) => {
		console.log("eliminar codigo");
		console.log(codigo);
		console.log("eliminar codigo");
		try {
			await clienteAxios.delete(`api/codigos/${codigo}`);
			dispatch({
				type: CODIGO_VERFICACION,
				payload: null,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				codigoverificacion: state.codigoverificacion,
				bloqueologin: state.bloqueologin,
				registrarUsuario,
				iniciarSesion,
				usuarioAutenticado,
				cerrarSesion,
				actualizarCuentaDeUsuario,
				eliminarCuentadeUsuario,
				generarCodigoDeVerificacion,
				validarCodigoDeVerificacion,
				eliminarCodigoDeVerificacion,
			}}
		>
			{" "}
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
