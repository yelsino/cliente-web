import { OPEN_ELEMENT, CLOSE_ELEMENT } from "../../types";

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
		default:
			return state;
	}
};
