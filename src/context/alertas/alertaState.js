import { useReducer } from "react";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";
import alertaContext from "./alertaContext";
import alertaReducer from "./alertaReducer";

const AlertaState = (props) => {
	const initialState = {
		alerta: null,
	};

	const [state, dispatch] = useReducer(alertaReducer, initialState);

	// D FUNCIONES
	const mostrarAlerta = (msg) => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: {
				msg,
			},
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA,
			});
		}, 2000);
	};

	const mostrarElemento = (msg) => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: {
				msg,
			},
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA,
			});
		}, 10000);
	};

	return (
		<alertaContext.Provider
			value={{
				alerta: state.alerta,
				mostrarAlerta,
				mostrarElemento,
			}}
		>
			{props.children}
		</alertaContext.Provider>
	);
};

export default AlertaState;
