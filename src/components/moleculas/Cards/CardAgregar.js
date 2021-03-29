import { useContext, useState } from "react";
import alertaContext from "../../../context/alertas/alertaContext";
import ListaContext from "../../../context/listas/listaContext";
import ProductoContext from "../../../context/productos/productoContext";

const CardAgregar = ({ producto }) => {
	const productosContext = useContext(ProductoContext);
	const { actualizarProductoSeleccionado } = productosContext;

	const listasContext = useContext(ListaContext);
	const {
		listas,
		listaseleccionada,
		agregarProductoEnLista,
		guardarCambiosEnLista,
	} = listasContext;

	const alertasContext = useContext(alertaContext);
	const { alerta, mostrarAlerta } = alertasContext;

	const { _id, nombre, precio_minoreo, medida_minoreo, imgURL } = producto;

	let medida = medida_minoreo;
	if (medida_minoreo === "kilo") {
		medida = "kg";
	}
	if (medida_minoreo === "unidad") {
		medida = "ud.";
	}

	const [btn, showBtn] = useState(false);

	const agregarProducto = () => {
		console.log(listas.length);
		if (listas.length === 0) {
			mostrarAlerta("crea una lista de pedido para iniciar");
			return;
		}
		if (!listaseleccionada) {
			mostrarAlerta("elija o crea una lista");
			return;
		}
		agregarProductoEnLista(listaseleccionada, producto);
	};

	return (
		<div className={`mb-3 mx-2 relative`}>
			<div className="flex mt-1 mb-2 mx-2 relative">
				<div
					className={`rounded-md w-20 h-12 bg-primario-green  flex items-center justify-center `}
				>
					<img src={imgURL} alt="" className="" />
				</div>

				<div className="shadow-lg bg-white rounded-md w-32 flex flex-col justify-around items-center ">
					<span className={` font-bold text-primario-green-pure `}>
						{" "}
						{nombre}
					</span>
					<p className={` text-primario-blue text-lg `}>
						{" "}
						<span className="font-medium">{precio_minoreo}</span>
						{" S/"} <span className="text-black">{medida}</span>
					</p>
				</div>
			</div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					showBtn(!btn);
				}}
				className=" absolute top-0 w-full h-full outline-none focus:outline-none"
			>
				{btn && (
					<span
						onClick={agregarProducto}
						className="border-2 border-primario-blue bg-primario-blue text-white font-bold px-4 py-2 rounded-md hover:text-blue-100"
					>
						ADD
					</span>
				)}
			</button>
		</div>
	);
};

export default CardAgregar;
