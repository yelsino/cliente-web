import { MOSTRAR_ALERTA, OCULTAR_ALERTA, ABRIR_CARD } from "../../types";

export default (state, action) => {
	switch (action.type) {
		case MOSTRAR_ALERTA:
			return {
				alerta: action.payload,
			};
		case OCULTAR_ALERTA:
			return {
				alerta: null,
			};
		case ABRIR_CARD:
			return {
				card: action.payload,
			};

		default:
			return state;
	}
};
