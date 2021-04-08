import { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autenticacion/authContext";
import DireccionContext from "../../../context/direcciones/direccionContext";
import ListaContext from "../../../context/listas/listaContext";
import PedidoContext from "../../../context/pedidos/pedidoContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import BotonVerde from "../../atomos/botones/BotonVerde";
import IconDisplay from "../../atomos/icons/IconDisplay";
import Logo from "../../atomos/Logo";
import Mascota from "../../atomos/Mascota";
import SubTitulo from "../../atomos/textos/SubTitulo";
import Modal from "../../plantillas/Modal";
import ModalLibre from "../../plantillas/ModalLibre";

const Pedido = () => {
	// d CONTEXTOS
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado } = authContext;
	const listasContext = useContext(ListaContext);
	const {
		listas,
		listaseleccionada,
		listaActual,
		total,
		obtenerListas,
	} = listasContext;
	const direccionesContext = useContext(DireccionContext);
	const {
		direcciones,
		direccionactual,
		obtenerDirecciones,

		seleccionarDireccion,
	} = direccionesContext;
	const pedidosContext = useContext(PedidoContext);
	const {
		confirmacion,
		codigopedido,
		generarNuevoPedido,
		borrarEstadosPedido,
		restarStockProductos,
	} = pedidosContext;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;
	// d LOCAL STOTRAGE
	const json_usuario = localStorage.getItem("usuario");
	const usuarioLS = JSON.parse(json_usuario);
	const { celular, dni, email, username } = usuarioLS;
	const json_direccion = localStorage.getItem("direccion_actual");
	const direccionLS = JSON.parse(json_direccion);

	// d ESTADOS
	const [modal, openModal] = useState(false);

	const history = useHistory();
	// d FUNCIONES
	const onChangeListas = (e) => {
		listaActual(e.target.value);
	};

	const generarPedido = (e) => {
		e.preventDefault();
		restarStockProductos(listaseleccionada);
		if (!listaseleccionada) {
			mostrarAlerta("seleccione una de sus listas para realziar el pedido");
			return;
		}
		const nuevo_pedido = {
			creador: usuarioLS._id,
			lista: listaseleccionada._id,
			direccion: direccionLS._id,
			copia_pedido: [
				{ datos_lista: listaseleccionada },
				{ abono: 0 },
				{ datos_direccion: direccionactual },
				{ pago_total: total < 50 ? Number(total) + 2 : total },
			],
			preparado: false,
			enviado: false,
			entregado: false,
			rechazado: false,
		};
		generarNuevoPedido(nuevo_pedido);
	};
	useEffect(() => {
		usuarioAutenticado();
		obtenerDirecciones();
		obtenerListas();
	}, []);
	return (
		<div className="flex items-center flex-col justify-center  mb-10">
			<h3 className="text-3xl   my-10 text-primario-blue">RESUMEN DE PEDIDO</h3>
			{alerta ? (
				<p className="text-primario-red text-xl">{alerta.msg}</p>
			) : null}

			<div className=" md:flex lg:flex  justify-center   mx-auto">
				<div className="text-lg my-10 mx-10 lg: mr-10  flex flex-col justify-center items-center">
					{/*  */}
					{/*  */}
					{/*  */}
					<div className="flex justify-center ">
						<div>
							<SubTitulo texto={"SUS PRODUCTOS"}  style={'text-center'}/>
							{/* <p className="text-primario-blue font-bold my-2 mt-4">
								seleccione su lista a pedir
							</p> */}

							<div className="relative mb-4  flex flex-wrap mt-5 justify-center ">
								{listaseleccionada.productos.map((producto) => {
									return (
										<div className="p-4 bg-white shadow-md rounded-md flex m-1 border-t-4 border-primario-green justify-center items-center w-52 ">
											<div className="mr-2">
												<img src={producto.imgURL} className="w-10" />
											</div>
											<div>
												<p className="font-bold ">{producto.nombre} </p>
												<p className="text-gray-600">
													{" "}
													{
														listaseleccionada.cantidad_producto.find(
															(e) => e.id === producto._id
														).cantidad_producto
													}{" "}
													{producto.medida_minoreo}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/*  */}
					{/*  */}
					{/*  */}

					<div className="  w-full flex flex-col justify-center">
						<SubTitulo texto={"SUS DATOS"} style={'text-center'} />
						<div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-3 w-full xl:grid-cols-4 items-center">
							<p className="my-4 flex flex-col">
								<span className="font-bold tracking-wide text-gray-600">
									nombre:{" "}
								</span>
								<span className="text-gray-700 tracking-widest">
									{username}
								</span>
							</p>
							<p className="my-4 flex flex-col">
								<span className="font-bold text-gray-600">dni: </span>
								<span className="text-gray-700 lett tracking-widest">
									{dni}
								</span>
							</p>
							<p className="my-4 flex flex-col">
								<span className="font-bold text-gray-600">celular: </span>
								<span className="text-gray-700 tracking-widest">{celular}</span>
							</p>
							<p className="my-4 flex flex-col">
								<span className="font-bold text-gray-600">email: </span>
								<span className="text-gray-700 tracking-widest">{email}</span>
							</p>

							<p className="my-4 flex flex-col">
								<span className="font-bold text-gray-600">direccion: </span>
								<span className="text-gray-700 tracking-widest">
									{direccionLS.nombre}
								</span>
							</p>
							<p className="my-4 flex flex-col">
								<span className="font-bold text-gray-600">refencia: </span>
								<span className="text-gray-700 tracking-widest">
									{direccionLS.referencia}
								</span>
							</p>
						</div>
					</div>
				</div>

				{/*  */}
				{/* RESUMEN PEDIDO */}
				{/*  */}
				<div className=" w-full flex justify-center  mb-5">
					<div className="w-80 border-2 border-primario-blue rounded-lg box-border  px-4  ">
						<SubTitulo texto={"SU PEDIDO"} style={"text-center my-8 "} />
						<p className="my-8  p-4 bg-primario-blue-claro text-primario-blue font-bold text-lg  w-72  justify-center tracking-wide rounded-lg  mx-auto flex">
							{listaseleccionada.nombre}
						</p>
						<div className="mx-6">
							<p className="my-10 flex justify-between ">
								<span className="text-gray-500 ">SUB TOTAL: </span>
								<span className="font-bold">S/ {total}</span>
							</p>
							<p className="my-10 flex justify-between ">
								<span className="text-gray-500 ">ENVIO:</span>
								<span className="font-bold">
									{total > 50 ? "Gratis" : "S/ 2.0 "}{" "}
								</span>
							</p>
							<p className="mt-11  flex justify-between ">
								<span className="text-gray-500 ">TOTAL: </span>
								<span className="font-bold">
									S/ {total < 50 ? Number(total) + 2 : total}
								</span>
							</p>
						</div>
						<div className="flex justify-center">
							<BotonVerde
								onBtn={generarPedido}
								texto={"FINALIZAR"}
								style={"my-10 mx-auto"}
							/>
						</div>
						<p
							onClick={() => {
								// window.location.replace(`${process.env.URL_PRODUCCION}/tienda`);
								// window.location.replace("http://localhost:3000/tienda");
								window.location.replace(
									"https://negocios-carlos.000webhostapp.com/tienda"
								);
							}}
							className="text-primario-red text-center cursor-pointer"
						>
							cancelar proceso
						</p>
					</div>
				</div>
			</div>
			{confirmacion && (
				<ModalLibre style={"bg-white"}>
					<div className="flex  h-screen justify-center">
						<Logo style={"w-72  inset-0"} />
					</div>
					<p className="text-4xl absolute bottom-10 right-10 text-primario-blue font-medium">
						Generando pedido...
					</p>
				</ModalLibre>
			)}

			{codigopedido && (
				<ModalLibre style={"bg-white"}>
					<div className="flex">
						<div className=" w-full flex justify-end  items-center">
							<Mascota />
						</div>
						<div className=" flex w-full h-screen justify-center items-center ">
							<div className="text-center">
								<p className="text-3xl font-medium text-gray-500 mb-10">
									SU PEDIDO HA <br /> SIDO GENERADO
								</p>
								<div className="border-4 border-primario-blue rounded-3xl px-8 p-4  text-5xl ">
									{codigopedido}
								</div>
								<p className="text-3xl text-gray-400 my-10">
									usa este codigo para <br /> ver el estado de su pedido
								</p>
								<button
									onClick={() => {
										borrarEstadosPedido();
										// window.location.replace("http://localhost:3000/tienda");
										window.location.replace(
											"https://negocios-carlos.000webhostapp.com/tienda"
										);
										// window.location.replace(`${process.env.URL_PRODUCCION}/tienda`);
									}}
									className="bg-primario-green shadow-lg px-20 py-5 text-4xl text-primario-green-pure font-bold rounded-3xl hover:bg-green-200 "
								>
									Ok
								</button>
							</div>
						</div>
					</div>
				</ModalLibre>
			)}
		</div>
	);
};

export default Pedido;
