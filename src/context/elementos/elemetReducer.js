import {
	OPEN_ELEMENT,
	CLOSE_ELEMENT,
	CREAR_ELEMENTO,
	ELIMINAR_ELEMENTO,
	EDITAR_ELEMENTO,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OPEN_ELEMENT:
			return {
				elemento_actual: action.payload,
			};
		case CLOSE_ELEMENT:
			return {
				elemento_actual: null,
			};
		case CREAR_ELEMENTO:
			return {
				...state,
				elemento: action.payload,
			};
		case ELIMINAR_ELEMENTO:
			return {
				...state,
				deleteelement: action.payload,
			};
		case EDITAR_ELEMENTO:
			return {
				...state,
				editarelemento: action.payload
			}
		default:
			return state;
	}
};
