import {
	OBTENER_DIRECCIONES,
	ELIMINAR_DIRECCIONES,
	ERROR_DIRECCIONES,
	ACTUALIZAR_DIRECCION,
	CREAR_DIRECCION,
	SELECCIONAR_DIRECCION,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_DIRECCIONES:
			return {
				...state,
				direcciones: action.payload,
			};
		case SELECCIONAR_DIRECCION:
			localStorage.setItem("direccion_actual", JSON.stringify(action.payload));
			return {
				...state,
				direccionactual: action.payload,
			};
		case CREAR_DIRECCION:
			localStorage.setItem("direccion_actual", JSON.stringify(action.payload));
			return {
				...state,
				direcciones: [...state.direcciones, action.payload],
				direccionactual: action.payload,
			};
		case ELIMINAR_DIRECCIONES:
			return {
				direcciones: action.payload,
			};
		case ACTUALIZAR_DIRECCION:
			return {
				...state,
				direcciones: action.payload,
			};

		default:
			return state;
	}
};
