import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	OBTENER_LISTAS,
	CREAR_LISTAS,
	QUITAR_PRODUCTO,
	LISTA_ERROR,
	LISTA_ACTUAL,
	ADD_PRODUCTO_LISTA,
	ATUALIZAR_CANTIDAD_PRODUCTO,
	ACTUALIZAR_LISTAS,
	ELIMINAR_LISTA,
} from "../../types";

import ListaContext from "./listaContext";
import listaReducer from "./listaReducer";

const ListaState = (props) => {
	const json_lista_actual = localStorage.getItem("lista_actual");
	const lista_actual = JSON.parse(json_lista_actual);
	const initialState = {
		listas: [],
		listaseleccionada: !lista_actual ? null : lista_actual,
	};

	// d dispatch para ejecturar las acciones
	const [state, dispatch] = useReducer(listaReducer, initialState);

	// d serie de funciones para el CRUD
	const obtenerListas = async () => {
		try {
			const resultado = await clienteAxios.get("/api/listas");
			console.log(resultado);

			dispatch({
				type: OBTENER_LISTAS,
				payload: resultado.data,
			});
		} catch (error) {
			const alerta = {
				msg: "Hubo un error",
				categoria: "alerta-error",
			};
			dispatch({
				type: LISTA_ERROR,
				payload: alerta,
			});
		}
	};

	// d crear nueva lista
	const crearLista = async (nuevaLista) => {
		try {
			const resultado = await clienteAxios.post("/api/listas", nuevaLista);
			dispatch({
				type: CREAR_LISTAS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
			const alerta = {
				msg: "hubo un error al crear",
				categoria: "alerta-error",
			};
			dispatch({
				type: LISTA_ERROR,
				payload: alerta,
			});
		}
	};

	// d eliminar lista
	const eliminarLista = async (listaId) => {
		try {
			const resultado = await clienteAxios.delete(`api/listas/${listaId}`);
			if (resultado.status === 204) {
				const copy_listas = state.listas.filter((e) => e._id !== listaId);
				dispatch({
					type: ELIMINAR_LISTA,
					payload: copy_listas,
				});
			}
		} catch (error) {
			console.log(error.response);
		}
	};
	//  d seleccionar lista actual
	const listaActual = async (listaId) => {
		dispatch({
			type: LISTA_ACTUAL,
			payload: listaId,
		});
	};

	// d agregar productos de lista
	const agregarProductoEnLista = async (lista, producto) => {
		const copia_lista = lista;
		let id_productos = copia_lista.productos.map((e) => e._id);
		const consultar = id_productos.find((e) => e === producto._id);
		if (consultar !== undefined) {
			return;
		} else {
			copia_lista.productos.unshift(producto);
			copia_lista.cantidad_producto.unshift({
				id: producto._id,
				cantidad_producto: 1,
			});
			dispatch({
				type: ADD_PRODUCTO_LISTA,
				payload: copia_lista,
			});
		}
	};

	// d aumentar cantidad del producto en lista actual
	const actualizarCantidadProductoLista = (
		lista,
		productoId,
		cantidad_actual
	) => {
		const new_cantidad = {
			id: productoId,
			cantidad_producto: cantidad_actual,
		};
		const copia_cantidad = lista.cantidad_producto.filter(
			(e) => e.id !== productoId
		);

		copia_cantidad.unshift(new_cantidad);
		console.log(copia_cantidad);

		dispatch({
			type: ATUALIZAR_CANTIDAD_PRODUCTO,
			payload: copia_cantidad,
		});
	};

	// d quitar productos de lsita
	const quitarProductoEnLista = (productoId) => {
		const copia_productos = state.listaseleccionada.productos.filter(
			(e) => e._id !== productoId
		);
		const copia_cantidad = state.listaseleccionada.cantidad_producto.filter(
			(e) => e.id !== productoId
		);
		const lista_actualizada = {
			...state.listaseleccionada,
			productos: copia_productos,
			cantidad_producto: copia_cantidad,
		};

		console.log(lista_actualizada);

		dispatch({
			type: QUITAR_PRODUCTO,
			payload: lista_actualizada,
		});
	};

	// d guardar cambios en lista
	const guardarCambiosEnLista = async (lista_actual) => {
		console.log("esto aqui en guardar lista");
		if (lista_actual === null) {
			return console.log("no hay lista");
		} else {
			const copia_id_productos = lista_actual.productos.map((e) => e._id);
			const lista = {
				cantidad_producto: lista_actual.cantidad_producto,
				productos: copia_id_productos,
			};
			try {
				const resultado = await clienteAxios.put(
					`/api/listas/${lista_actual._id}`,
					lista
				);
				const copia_listas = await state.listas.filter(
					(e) => e._id !== lista_actual._id
				);
				// copia_listas.push(resultado.data);
				dispatch({
					type: ACTUALIZAR_LISTAS,
					payload: [...copia_listas, resultado.data],
				});
			} catch (error) {
				console.log(error.response);
				lista_actual = state.listaseleccionada;
			}
		}
	};

	return (
		<ListaContext.Provider
			value={{
				listas: state.listas,
				listaseleccionada: state.listaseleccionada,
				obtenerListas,
				crearLista,
				listaActual,
				agregarProductoEnLista,
				quitarProductoEnLista,
				actualizarCantidadProductoLista,
				guardarCambiosEnLista,
				eliminarLista,
			}}
		>
			{props.children}
		</ListaContext.Provider>
	);
};

export default ListaState;
