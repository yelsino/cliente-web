import { useReducer } from "react";
import {
	OPEN_ELEMENT,
	CLOSE_ELEMENT,
	CREAR_ELEMENTO,
	ELIMINAR_ELEMENTO,
	EDITAR_ELEMENTO,
} from "../../types";

import elementReducer from "./elemetReducer";
import elementContext from "./elementContext";

const ElementState = (props) => {
	const InitialState = {
		elemento_actual: null,
		elemento: false,
		deleteelement: false,
		editarelemento: false,
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

	const crearElemento = () => {
		dispatch({
			type: CREAR_ELEMENTO,
			payload: !state.elemento,
		});
	};

	const eliminarElemento = () => {
		dispatch({
			type: ELIMINAR_ELEMENTO,
			payload: !state.deleteelement,
		});
	};

	const editarElemento = () => {
		dispatch({
			type: EDITAR_ELEMENTO,
			payload: !state.editarelemento,
		});
	};

	return (
		<elementContext.Provider
			value={{
				elemento_actual: state.elemento_actual,
				elemento: state.elemento,
				deleteelement: state.deleteelement,
				editarelemento: state.editarelemento,
				mostrarElemento,
				crearElemento,
				eliminarElemento,
				editarElemento,
			}}
		>
			{props.children}
		</elementContext.Provider>
	);
};

export default ElementState;
