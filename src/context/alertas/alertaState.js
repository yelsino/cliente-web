import { useReducer } from "react";
import {
	MOSTRAR_ALERTA,
	OCULTAR_ALERTA,
	ABRIR_CARD,
	MOSTRAR_ALERTA2,
	OCULTAR_ALERTA2,
} from "../../types";
import alertaContext from "./alertaContext";
import alertaReducer from "./alertaReducer";

const AlertaState = (props) => {
	const initialState = {
		alerta: null,
		card: false,
		alerta2:null
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
		}, 3000);
	};

	const mostrarAlerta2 = (msg) => {
		dispatch({
			type: MOSTRAR_ALERTA2,
			payload: msg,
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA2,
			});
		}, 3000);
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

	const abrirCard = () => {
		dispatch({
			type: ABRIR_CARD,
			payload: !state.card,
		});
	};

	return (
		<alertaContext.Provider
			value={{
				alerta: state.alerta,
				card: state.card,
				alerta2:state.alerta2,
				mostrarAlerta,
				mostrarElemento,
				abrirCard,
				mostrarAlerta2,
			}}
		>
			{props.children}
		</alertaContext.Provider>
	);
};

export default AlertaState;
