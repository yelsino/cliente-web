import {
	OBTENER_LISTAS,
	CREAR_LISTAS,
	ELIMINAR_LISTA,
	ADD_PRODUCTO_LISTA,
	QUITAR_PRODUCTO,
	LISTA_ERROR,
	LISTA_ACTUAL,
	ATUALIZAR_CANTIDAD_PRODUCTO,
	ACTUALIZAR_LISTAS,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_LISTAS:
			return {
				...state,
				listas: action.payload,
			};
		case CREAR_LISTAS:
			localStorage.setItem("lista_actual", JSON.stringify(action.payload));
			return {
				...state,
				listas: [...state.listas, action.payload],
				listaseleccionada: action.payload,
			};
		case LISTA_ACTUAL:
			const lista_actual = state.listas.filter(
				(lista) => lista._id === action.payload
			);
			localStorage.setItem("lista_actual", JSON.stringify(lista_actual[0]));

			const costo_total = lista_actual[0].cantidad_producto
				.reduce(
					(acc, { cantidad_producto, id }) =>
						acc +
						cantidad_producto *
							lista_actual[0].productos.find((e) => e._id === id)
								.precio_minoreo,
					0
				)
				.toFixed(1);
			localStorage.setItem("total_lista", JSON.stringify(costo_total));
			console.log(costo_total);
			return {
				...state,
				listaseleccionada: lista_actual[0],
				total: costo_total,
			};
		case ADD_PRODUCTO_LISTA:
			return {
				...state,
				listaseleccionada: action.payload,
			};
		case QUITAR_PRODUCTO:
			return {
				...state,
				listaseleccionada: action.payload,
			};
		case ATUALIZAR_CANTIDAD_PRODUCTO:
			return {
				...state,
				listaseleccionada: {
					...state.listaseleccionada,
					cantidad_producto: action.payload,
				},
			};
		case ELIMINAR_LISTA:
			return {
				...state,
				listas: action.payload,
			};
		case ACTUALIZAR_LISTAS:
			const copia_listas = state.listas.filter(
				(e) => e._id !== action.payload._id
			);
			localStorage.removeItem("lista_actual");
			localStorage.setItem("lista_actual", JSON.stringify(action.payload));
			const actualizar_total = action.payload.cantidad_producto
				.reduce(
					(acc, { cantidad_producto, id }) =>
						acc +
						cantidad_producto *
							action.payload.productos.find((e) => e._id === id).precio_minoreo,
					0
				)
				.toFixed(1);
			localStorage.setItem("total_lista", JSON.stringify(actualizar_total));

			return {
				...state,
				listas: [...copia_listas, action.payload],
				listaseleccionada: action.payload,
				total: actualizar_total,
			};

		default:
			return state;
	}
};
