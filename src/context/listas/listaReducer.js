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
			return {
				...state,
				listas: [...state.listas, action.payload],
			};
		case LISTA_ACTUAL:
			const lista_actual = state.listas.filter(
				(lista) => lista._id === action.payload
			);
			return {
				...state,
				listaseleccionada: lista_actual[0],
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
		case ACTUALIZAR_LISTAS:
			return {
				...state,
				listas: action.payload,
			};
		default:
			return state;
	}
};
