import { OBTENER_RECLAMOS, NUEVO_REACLAMO } from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_RECLAMOS:
			return {
				...state,
				reclamos: action.payload
			}
		case NUEVO_REACLAMO:
			return {
				...state,
				reclamos: [...state.reclamos,action.payload]
			}
		default:
			return state;
	}
};
