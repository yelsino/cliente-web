import {
	CONFIRMACION_PEDIDO,
	OBTENER_CODIGO,
	BORRAR_ESTADO_PEDIDO,
	OBTENER_PEDIDOS,
	SELECCIONAR_PEDIDO,
} from "../../types";

export default (state, action) => {
	switch (action.type) {
		case CONFIRMACION_PEDIDO:
			return {
				...state,
				confirmacion: action.payload,
			};
		case OBTENER_PEDIDOS:
			return {
				...state,
				pedidos: action.payload,
			};
		case OBTENER_CODIGO:
			localStorage.setItem("codigo_pedido", JSON.stringify(action.payload));
			return {
				...state,
				codigopedido: action.payload,
			};
		case BORRAR_ESTADO_PEDIDO:
			return {
				...state,
				confirmacion:action.payload
			};
		case SELECCIONAR_PEDIDO:
			const pedido = state.pedidos.filter((e) => e._id === action.payload);
			localStorage.setItem("pedido_seleccionado", JSON.stringify(pedido[0]));
			return {
				...state,
				pedidoseleccionado: pedido[0],
			};

		default:
			return state;
	}
};
