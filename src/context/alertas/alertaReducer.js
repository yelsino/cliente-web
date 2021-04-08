import {
	MOSTRAR_ALERTA,
	OCULTAR_ALERTA,
	ABRIR_CARD,
	MOSTRAR_ALERTA2,
	OCULTAR_ALERTA2,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case MOSTRAR_ALERTA:
			return {
				alerta: action.payload,
			};
		case MOSTRAR_ALERTA2:
			return {
				...state,
				alerta2: action.payload,
			};
		case OCULTAR_ALERTA:
			return {
				...state,
				alerta: null,
			};
		case OCULTAR_ALERTA2:
			return {
				...state,
				alerta2: null,
			};
		case ABRIR_CARD:
			return {
				...state,
				card: action.payload,
			};

		default:
			return state;
	}
};
