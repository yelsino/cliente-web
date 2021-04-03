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
	} = pedidosContext;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;
	// d LOCAL STOTRAGE
	const json_usuario = localStorage.getItem("usuario");
	const usuarioLS = JSON.parse(json_usuario);
	const { celular, dni, email, username } = usuarioLS;
	// d ESTADOS
	const [modal, openModal] = useState(false);

	const history = useHistory();
	// d FUNCIONES
	const onChangeListas = (e) => {
		listaActual(e.target.value);
	};

	const generarPedido = (e) => {
		e.preventDefault();
		if (!listaseleccionada) {
			mostrarAlerta("seleccione una de sus listas para realziar el pedido");
			return;
		}
		const nuevo_pedido = {
			creador: usuarioLS._id,
			lista: listaseleccionada._id,
			direccion: direccionactual._id,
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
		<div className="flex items-center flex-col justify-center h-screen mb-10">
			<h3 className="text-5xl  text-center my-20 text-primario-blue">
				GENERAR PEDIDO
			</h3>
			{alerta ? (
				<p className="text-primario-red text-xl">{alerta.msg}</p>
			) : null}
			<div className=" md:flex lg:flex  justify-center   mx-auto">
				<div className="text-lg my-10 mx-10 lg: mr-10  flex flex-col justify-center items-center">
					{/*  */}
					{/*  */}
					{/*  */}
					<div className=" w-96">
						<SubTitulo texto={"CLIENTE"} />
						<div className="mb-4">
							<p className="my-4">
								<span className="font-bold tracking-wide text-gray-600">
									nombre:{" "}
								</span>
								<span className="text-gray-700 tracking-widest">
									{username}
								</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">dni: </span>
								<span className="text-gray-700 lett tracking-widest">
									{dni}
								</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">celular: </span>
								<span className="text-gray-700 tracking-widest">{celular}</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">email: </span>
								<span className="text-gray-700 tracking-widest">{email}</span>
							</p>
						</div>
					</div>

					{/*  */}
					{/*  */}
					{/*  */}
					<div className="flex justify-center ">
						<div>
							<SubTitulo texto={"PEDIDO"} />
							<p className="font-bold text-gray-600 mt-4">seleccionar lista</p>

							<div className="relative mb-4 ">
								<div onChange={onChangeListas}>
									{listas.map((e) => (
										<div
											onClick={() => {
												listaActual(e._id);
											}}
											key={e._id}
											className={`p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide mb-2 cursor-pointer ${
												e._id === listaseleccionada._id
													? " border-primario-blue border-4"
													: ""
											}`}
										>
											{e.nombre}
										</div>
									))}
								</div>
							</div>

							<p className="font-bold text-gray-600">direccion de envio</p>
							<p className="p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide mb-2 cursor-pointer">
								{direccionactual && direccionactual.nombre}
							</p>
							{/* <div>
								{direcciones.map((e) => (
									<div
										className='className="p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide py-4 cursor-pointer'
										onClick={() => {
											seleccionarDireccion(e._id);
										}}
										key={e._id}
									>
										{e.nombre}
									</div>
								))}
							</div> */}
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
								texto={"GENERAR"}
								style={"my-10 mx-auto"}
							/>
						</div>
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
										history.push("/tienda");
									}}
									className="bg-black px-14 py-2 text-2xl text-white rounded-3xl "
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
