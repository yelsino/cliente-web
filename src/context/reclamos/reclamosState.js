import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	NUEVO_REACLAMO,
	ACTUALZIAR_RECLAMO,
	OBTENER_RECLAMOS,
} from "../../types";

import ReclamoContext from "./reclamosContext";
import ReclamoReducer from "./reclamosReducer";

const ReclamoState = (props) => {
	const initialState = {
		reclamos: [],
		reclamoseleccionado: null,
	};

	// d dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(ReclamoReducer, initialState);

	const crearNuevoReclamo = async (datos) => {
		try {
			const resultado = await clienteAxios.post("api/reclamos", datos);

		if(resultado.status===200) {

			obtenerReclamos()
	
		}
		} catch (error) {
			console.log(error);
		}
	};
	const obtenerReclamos = async () => {
		try {
			const resultado = await clienteAxios.get('api/reclamos')
			console.log(resultado)
			dispatch({
				type:OBTENER_RECLAMOS,
				payload:resultado.data
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ReclamoContext.Provider
			value={{
				reclamos: state.reclamos,
				reclamoseleccionado: state.reclamoseleccionado,
				crearNuevoReclamo,
				obtenerReclamos,
			}}
		>
			{props.children}
		</ReclamoContext.Provider>
	);
};

export default ReclamoState;
