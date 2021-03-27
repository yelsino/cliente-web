import { useReducer } from "react";
import { OPEN_ELEMENT, CLOSE_ELEMENT } from "../../types";

import elementReducer from "./elemetReducer";
import elementContext from "./elementContext";

const ElementState = (props) => {
	const InitialState = {
		elemento_actual: null,
	};

	// d dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(elementReducer, InitialState);

	const mostrarElemento = (texto1, texto2) => {
		dispatch({
			type: OPEN_ELEMENT,
			payload: { texto1, texto2 },
		});

		setTimeout(() => {
			dispatch({
				type: CLOSE_ELEMENT,
			});
		}, 4000);
	};

	return (
		<elementContext.Provider
			value={{
				elemento_actual: state.elemento_actual,
				mostrarElemento,
			}}
		>
			{props.children}
		</elementContext.Provider>
	);
};

export default ElementState;
