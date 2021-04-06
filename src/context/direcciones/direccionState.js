import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	OBTENER_DIRECCIONES,
	ELIMINAR_DIRECCIONES,
	ERROR_DIRECCIONES,
	ACTUALIZAR_DIRECCION,
	CREAR_DIRECCION,
	SELECCIONAR_DIRECCION,
} from "../../types";

import DireccionContext from "./direccionContext";
import DireccionReducer from "./direccionReducer";

const DireccionState = (props) => {
	const json_direccion_actual = localStorage.getItem("direccion_actual");
	const direccion_actual = JSON.parse(json_direccion_actual);

	const initialState = {
		direcciones: [],
		direccionactual: null,
	};

	// d dispatch para ejecturar las acciones
	const [state, dispatch] = useReducer(DireccionReducer, initialState);

	// d serie de funciones para el CRUD
	const obtenerDirecciones = async () => {
		try {
			const resultado = await clienteAxios.get("api/direcciones");
			dispatch({
				type: OBTENER_DIRECCIONES,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	// d obtener direccion
	const seleccionarDireccion = (direccionId) => {
		console.log(direccionId);
		const direccion = state.direcciones.filter((e) => e._id === direccionId);
		console.log(direccion);
		dispatch({
			type: SELECCIONAR_DIRECCION,
			payload: direccion[0],
		});
	};

	// d crear nueva direccion
	const crearDireccionNueva = async (datos) => {
		try {
			const respuesta = await clienteAxios.post("api/direcciones", datos);
			console.log(respuesta.data);
			dispatch({
				type: CREAR_DIRECCION,
				payload: respuesta.data,
			});

			dispatch({});
		} catch (error) {
			console.log(error.response);
		}
	};

	// d eliminar direcciones
	const eliminarDireccion = async (direccionId) => {
		try {
			const resultado = await clienteAxios.delete(
				`/api/direcciones/${direccionId}`
			);
			const copy_direcciones = state.direcciones.filter(
				(e) => e._id !== direccionId
			);
			if (resultado.status === 200) {
				dispatch({
					type: ELIMINAR_DIRECCIONES,
					payload: copy_direcciones,
				});
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	// d actualziar direccion
	const actualizarDireccion = async (direccionId, data) => {
		try {
			const resultado = await clienteAxios.put(
				`api/direcciones/${direccionId}`,
				data
			);
			const copy_direcciones = state.direcciones.filter(
				(e) => e._id !== direccionId
			);
			dispatch({
				type: ACTUALIZAR_DIRECCION,
				payload: [...copy_direcciones, resultado.data],
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<DireccionContext.Provider
			value={{
				direcciones: state.direcciones,
				direccionactual: state.direccionactual,
				obtenerDirecciones,
				seleccionarDireccion,
				crearDireccionNueva,
				eliminarDireccion,
				actualizarDireccion,
			}}
		>
			{props.children}
		</DireccionContext.Provider>
	);
};

export default DireccionState;
