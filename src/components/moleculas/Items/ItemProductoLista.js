import { useContext, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import ListaContext from "../../../context/listas/listaContext";
import ProductoContext from "../../../context/productos/productoContext";
import IconDelete from "../../atomos/icons/IconDelete";
import IconPlus from "../../atomos/icons/IconPlus";

const ItemProductoLista = ({ producto, mostrarElemento, elemento_actual }) => {
	const productosContext = useContext(ProductoContext);
	const {
		productoseleccionado,
		obtenerProductoSeleccionado,
	} = productosContext;
	const listasContext = useContext(ListaContext);
	const {
		listaseleccionada,
		quitarProductoEnLista,
		actualizarCantidadProductoLista,
		guardarCambiosEnLista,
	} = listasContext;

	const [cantidad_producto, setCantidadProducto] = useState(
		listaseleccionada.cantidad_producto.find((e) => e.id === producto._id)
			.cantidad_producto
	);
	const [total, setTotal] = useState();
	const [producto_state, setProducto] = useState({
		_id: producto._id,
		nombre: producto.nombre,
		peso_minoreo: producto.peso_minoreo,
		precio_minoreo: producto.precio_minoreo,
		medida_minoreo: producto.medida_minoreo,
		categoria: producto.categoria,
		peso_mayoreo: producto.peso_mayoreo,
		medidada_mayoreo: producto.medidada_mayoreo,
		precio_mayoreo: producto.precio_mayoreo,
		stock: producto.stock,
		imgURL: producto.imgURL,
		cantidad_minima: producto.cantidad_minima,
		total_producto: producto.precio_minoreo * cantidad_producto,
	});

	const {
		_id,
		nombre,
		peso_minoreo,
		precio_minoreo,
		medida_minoreo,
		categoria,
		peso_mayoreo,
		medidada_mayoreo,
		precio_mayoreo,
		stock,
		imgURL,
		cantidad_minima,
		total_producto,
	} = producto_state;
	// let cantidad_inicial = 1;

	const [btn, estadoBtn] = useState(false);

	const aumentarCantidad = () => {
		estadoBtn(true);
		setTimeout(() => {
			estadoBtn(false);
		}, 100);
		actualizarCantidadProductoLista(
			listaseleccionada,
			_id,
			1 + cantidad_producto
		);
		// guardarCambiosEnLista(listaseleccionada);
	};

	const restarCantidad = () => {
		estadoBtn(true);
		setTimeout(() => {
			estadoBtn(false);
		}, 100);
		let cantidad = cantidad_producto;
		if (cantidad_producto > 1) {
			setCantidadProducto(cantidad_producto - 1);
			actualizarCantidadProductoLista(listaseleccionada, _id, cantidad - 1);
			// guardarCambiosEnLista(listaseleccionada);
		}
	};

	const quitarProducto = () => {
		quitarProductoEnLista(_id);
	};



	return (
		<div className="flex items-center flex-col w-full">
			<div className="flex items-center  w-full ">
				<div
					onClick={() => {
						obtenerProductoSeleccionado(_id);
						mostrarElemento(stock, medida_minoreo);
					}}
					className={`mb-1 bg-white shadow-lg rounded-lg py-4 ml-6 mr-2  p-4  w-full relative group  ${
						stock < cantidad_producto
							? "hover:bg-primario-red-transparente"
							: "hover:bg-green-50"
					} ${cantidad_producto > stock ? "border-primario-red border-2" : ""}`}
				>
					{cantidad_producto > stock && stock !== 0 && (
						<p className=" text-gray-500 text-center mb-1">
							quedan <span className="text-primario-red">{stock}</span>{" "}
							{medida_minoreo} de este producto
						</p>
					)}
					{stock === 0 && (
						<p className="mb-1 text-center text-gray-500">
							este producto se ha
							<span className="text-primario-red font-semibold "> agotado</span>
						</p>
					)}
					<div className="flex justify-between">
						<p className="w-36 ">
							{" "}
							<span className="text-primario-blue">
								x {listaseleccionada && <span>{cantidad_producto}</span>}
							</span>{" "}
							<span className="font-bold">{nombre}</span>{" "}
						</p>{" "}
						{/*  */}
						{/* BOTONES ADD Y RES */}
						{/*  */}
						{cantidad_producto <= stock ? (
							<div className="w-24 ">
								<button
									disabled={btn}
									onClick={(e) => {
										e.stopPropagation();
										restarCantidad();
										mostrarElemento(stock, medida_minoreo);
									}}
									className="inline-block mr-4 cursor-pointer"
								>
									{" "}
									<span className="bg-primario-green text-primario-green-semi font-bold py-0 px-3 rounded-lg ">
										<span className="bg-primario-green-semi w-3 h-1.5 rounded-sm inline-block mb-1 "></span>
									</span>{" "}
								</button>
								{/*  */}
								<button
									disabled={btn}
									onClick={() => {
										if (cantidad_producto < stock) {
											setCantidadProducto(cantidad_producto + 1);
										} else {
											return;
										}
										aumentarCantidad();
										mostrarElemento(stock, medida_minoreo);
									}}
									className="bg-primario-green text-primario-green-semi font-bold py-1 px-2 rounded-lg inline-block cursor-pointer"
								>
									<IconPlus />
								</button>
							</div>
						) : stock > 1 ? (
							<div className="w-24 ">
								<button
									disabled={btn}
									onClick={() => {
										setCantidadProducto(
											cantidad_producto + stock - cantidad_producto
										);
									}}
									className="bg-primario-green text-primario-green-semi font-bold py-1 px-2 rounded-lg inline-block cursor-pointer"
								>
									Actualizar
								</button>
							</div>
						) : (
							<div className="w-24 ">
								<button
									disabled={btn}
									onClick={quitarProducto}
									className="bg-primario-red-transparente text-primario-red font-bold py-1 px-2 rounded-lg inline-block cursor-pointer group-hover:border-primario-red border border-white"
								>
									Eliminar
								</button>
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
								{/*  */}
							</div>
						)}
						{/*  */}
						{/* PRECIOS */}
						{/*  */}
						<span>
							{peso_minoreo} {medida_minoreo === "kilo" ? "kg" : "ud."}
						</span>
						<span>S/ {precio_minoreo}</span>
						<span className="text-primario-blue font-bold">
							S/
							{(cantidad_producto * precio_minoreo).toFixed(1)}
						</span>
					</div>
				</div>

				<IconDelete onIcon={quitarProducto} />
			</div>
		</div>
	);
};

export default ItemProductoLista;
