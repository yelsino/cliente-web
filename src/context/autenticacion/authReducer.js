import {
	OBTENER_USUARIO,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	CERRAR_SESION,
	REGISTRO_EXITOSO,
	REGISTRO_ERROR,
	ACTUALZIAR_CUENTA,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case REGISTRO_EXITOSO:
		case LOGIN_EXITOSO:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				autenticado: true,
				mensaje: null,
				token: action.payload.token,
			};

		case OBTENER_USUARIO:
			localStorage.setItem("usuario", JSON.stringify(action.payload.usuario));
			return {
				...state,
				autenticado: true,
				usuario: action.payload.usuario,
			};
		case ACTUALZIAR_CUENTA:
			localStorage.setItem("usuario", JSON.stringify(action.payload));
			return {
				...state,
				autenticado: true,
				usuario: action.payload,
			};

		case CERRAR_SESION:
		case REGISTRO_ERROR:
		case LOGIN_ERROR:
			localStorage.clear();
			sessionStorage.clear();
			return {
				...state,
				token: null,
				usuario: null,
				autenticado: null,
				mensaje: action.payload,
			};
		default:
			return state;
	}
};
