import {
	OBTENER_PRODUCTOS,
	PRODUCTOS_ERROR,
	OBTENER_PRODUCTOS_CATEGORIAS,
	OBTENER_PRODUCTOS_CLIENTE,
	PRODUCTO_SELECCIONADO,
	PRODUCTOS_LISTA,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case OBTENER_PRODUCTOS_CATEGORIAS:
		case OBTENER_PRODUCTOS:
			return {
				...state,
				productos: action.payload,
			};
		case PRODUCTOS_LISTA:
			return {
				...state,
				productoslista: action.payload,
			};
		case PRODUCTO_SELECCIONADO:
			const producto = state.productos.filter(
				(producto) => producto._id === action.payload
			);
			return {
				...state,
				productoseleccionado: producto[0],
			};
		default:
			return state;
	}
};
