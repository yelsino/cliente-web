import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import ReclamoContext from "../../../context/reclamos/reclamosContext";
import BotonRojo from "../../atomos/botones/BotonRojo";
import SubTitulo from "../../atomos/textos/SubTitulo";
import ItemReclamo from "../../moleculas/Items/ItemReclamo";
import Modal from "../../plantillas/Modal";
import Notificacion from "../../atomos/objetos/Notificacion";
import PedidoContext from "../../../context/pedidos/pedidoContext";
import AlertaContext from "../../../context/alertas/alertaContext";

const Reclamos = () => {
	useEffect(() => {
		usuarioAutenticado();
		obtenerReclamos()
	},[]);


	const reclamosContext = useContext(ReclamoContext);
	const { reclamos,obtenerReclamos, reclamoseleccionado, crearNuevoReclamo } = reclamosContext;
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado } = authContext;
	const pedidosContext = useContext(PedidoContext)
	const {
		pedidos,
		pedidoseleccionado,obtenerPedidosUser,
		seleccionarPedido,
	} = pedidosContext;
const alertaContext = useContext(AlertaContext)
const {alerta,mostrarAlerta} = alertaContext


	const [reclamostate, setReclamo] = useState({
		asunto: "",
		detalle: "",
	});
	const [modal,openModal] = useState(false)

	const { asunto, detalle,   } = reclamostate;

	const onChangeReclamo = (e) => {
		setReclamo({
			...reclamostate,
			[e.target.name]: e.target.value,
		});
	};

	const nuevoReclamo = () => {
		if (!asunto || !detalle) {
			mostrarAlerta("los campos no deben estar vacios");
			return;
		}
		if (!pedidoseleccionado) {
			mostrarAlerta("seleccione un pedido para crear un reclamo");
			return;
		}

		console.log("error");

		const reclamo = {
			creador: usuario._id,
			pedido: pedidoseleccionado._id,
			asunto,
			detalle,
			respuesta: "",
		};
		console.log(reclamo);
		crearNuevoReclamo(reclamo);
		openModal(false);
	};;

	return (
		<div className="  w-full">
			<div className="mt-10">
				<SubTitulo texto={"Mis Reclamos"} />
			</div>

			<div className="mt-5">
				{reclamos.map((e) => (
					<ItemReclamo
						key={e._id}
						textoA={e.asunto}
						textoB={e.pedido.copia_pedido[0].datos_lista.nombre}
					/>
				))}
			</div>

			<div className="absolute bottom-12 right-12">
				<BotonRojo
					onBtn={() => {
						openModal(true);
					}}
					texto={"Nuevo Reclamo"}
				/>
			</div>

			{modal && (
				<Modal style={"bg-gray-700 opacity-75"} position={""}>
					<div className="bg-white p-8">
						{alerta && <p className="text-primario-red">{alerta.msg}</p>}
						<SubTitulo texto={"Crear Nuevo Reclamo"} />
						<p>asunto</p>
						<input
							id="asunto"
							type="text"
							name="asunto"
							value={asunto}
							placeholder="asunto del reclamo"
							onChange={onChangeReclamo}
							className="border py-2 px-4 w-96"
						/>

						<p>Mensaje</p>
						<textarea
							id="detalle"
							name="detalle"
							value={detalle}
							placeholder="asunto del reclamo"
							onChange={onChangeReclamo}
							className="border py-2 px-4 w-96"
						/>
						<div>SELECCIONAR PEDIDO</div>
						<div>
							{pedidos.map((e) => (
								<p
									key={e._id}
									className={`p-2  my-1 cursor-pointer flex justify-between ${
										pedidoseleccionado && pedidoseleccionado._id === e._id
											? "bg-primario-blue text-white"
											: "border-primario-blue border-2"
									}`}
									onClick={() => {
										seleccionarPedido(e._id);
									}}
								>
									<span>{e.copia_pedido[0].datos_lista.nombre} </span>
									<span>S/ {e.copia_pedido[3].pago_total} </span>
								</p>
							))}
						</div>
						<div className="flex justify-end">
							<button
								onClick={() => {
									nuevoReclamo();
								}}
								className="bg-primario-green p-4 rounded-lg shadow-lg px-8 my-2"
							>
								CREAR
							</button>
						</div>

						<Notificacion
							onBtn={() => {
								openModal(false);
							}}
							texto={"X"}
						/>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Reclamos;
