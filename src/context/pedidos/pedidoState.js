import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
	CONFIRMACION_PEDIDO,
	GENERAR_PEDIDO,
	OBTENER_PEDIDOS,
	OBTENER_CODIGO,
	BORRAR_ESTADO_PEDIDO,
	SELECCIONAR_PEDIDO,
} from "../../types";

import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer.js";

const PedidoState = (props) => {
	const initialState = {
		pedidos: [],
		pedidoseleccionado: null,
		confirmacion: null,
		codigopedido: null,
	};

	// d dispatch para ejecturar las acciones
	const [state, dispatch] = useReducer(PedidoReducer, initialState);

	// d serie de funciones para el CRUD

	// d crear pedidos
	const generarNuevoPedido = async (data) => {
		console.log('generar pedido')
		// console.log(data);

		dispatch({
			type: CONFIRMACION_PEDIDO,
			payload: true,
		});
		const resultado = await clienteAxios.post("api/pedidos", data);
		try {
			console.log(resultado);
			if (resultado.status !== 200) {
				console.log("si es 200");
				setTimeout(() => {
					dispatch({
						type: CONFIRMACION_PEDIDO,
						payload: false,
					});
				}, 2500);
			} else {
				setTimeout(() => {
					dispatch({
						type: OBTENER_CODIGO,
						payload: resultado.data.codigo_pedido,
					});
				}, 2000);
			}
		} catch (error) {
			console.log();
			console.log(error);
		}
	};

	const obtenerPedidosUser = async () => {
		try {
			const resultado = await clienteAxios.get("api/pedidos");
			console.log(resultado.data);
			dispatch({
				type: OBTENER_PEDIDOS,
				payload: resultado.data,
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const borrarEstadosPedido = () => {
		localStorage.removeItem("codigo_pedido");
		localStorage.removeItem("lista_actual");
		localStorage.removeItem("total_lista");
		dispatch({
			type: BORRAR_ESTADO_PEDIDO,
			payload: null,
		});
	};

	const seleccionarPedido = (pedidoId) => {
		dispatch({
			type: SELECCIONAR_PEDIDO,
			payload: pedidoId,
		});
	};
	// d restarStock de productos
	// d restarStock de productos
	// d restarStock de productos
	// d restarStock de productos
	// d restarStock de productos
	// d restarStock de productos

	const restarStockProductos = async (lista_actual) => {
		const copy_lista_actual = lista_actual.cantidad_producto;
		const copy_productos = lista_actual.productos;
		await copy_lista_actual.forEach((e) => {
			clienteAxios.put(`api/productos/${e.id}`, {
				stock:
					Number(
						copy_productos.find((producto) => producto._id === e.id).stock
					) - Number(e.cantidad_producto),
			});
		});
		console.log("operacion finalizada");
	};

	return (
		<PedidoContext.Provider
			value={{
				pedidos: state.pedidos,
				confirmacion: state.confirmacion,
				codigopedido: state.codigopedido,
				pedidoseleccionado:state.pedidoseleccionado,
				generarNuevoPedido,
				borrarEstadosPedido,
				obtenerPedidosUser,
				seleccionarPedido,
				restarStockProductos,
			}}
		>
			{props.children}
		</PedidoContext.Provider>
	);
};

export default PedidoState;
