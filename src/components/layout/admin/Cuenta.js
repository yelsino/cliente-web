import { useContext, useState } from "react";
import { useHistory } from "react-router";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autenticacion/authContext";
import DireccionContext from "../../../context/direcciones/direccionContext";
import ElementoContext from "../../../context/elementos/elementContext";
import ListaContext from "../../../context/listas/listaContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import IconMas from "../../atomos/icons/IconMas";
import InputCuadrado from "../../atomos/inputs/InputCuadrado";
import Notificacion from "../../atomos/objetos/Notificacion";
import MiniPlomo from "../../atomos/textos/MiniPlomo";
import SubTitulo from "../../atomos/textos/SubTitulo";
import TextoRojo from "../../atomos/textos/TextoRojo";
import CardAlerta from "../../moleculas/Cards/CardAlerta";
import CardModal from "../../moleculas/Cards/CardModal";
import ItemDireccion from "../../moleculas/Items/ItemDireccion";
import Modal from "../../plantillas/Modal";

const Cuenta = () => {
	const authContext = useContext(AuthContext);
	const {
		usuario,
		cerrarSesion,
		actualizarCuentaDeUsuario,
		eliminarCuentadeUsuario,
	} = authContext;

	const direccionesContext = useContext(DireccionContext);
	const {
		direcciones,
		direccionactual,
		obtenerDirecciones,
		seleccionarDireccion,
		crearDireccionNueva,
		eliminarDireccion,
		actualizarDireccion,
	} = direccionesContext;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const elementosContext = useContext(ElementoContext);
	const {
		elemento,
		crearElemento,
		deleteelement,
		editarelemento,
		editarElemento,
		eliminarElemento,
	} = elementosContext;

	const history = useHistory();
	const json_usuario = localStorage.getItem("usuario");
	const usuario_ls = JSON.parse(json_usuario);

	const json_direccion_actual = localStorage.getItem("direccion_actual");
	const direccion_actual_ls = JSON.parse(json_direccion_actual);

	const [datos, setDatos] = useState({
		username: usuario_ls.username,
		email: usuario_ls.email,
		dni: usuario_ls.dni,
		celular: usuario_ls.celular,
	});

	const { username, email, dni, celular } = datos;

	const [direccion, setDireccion] = useState({
		nombre: "",
		referencia: "",
		creador: usuario_ls._id,
	});
	const { nombre, referencia } = direccion;

	const [modal, activarModal] = useState(false);

	const openModal = () => {
		activarModal(!modal);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const onChangeDireccion = (e) => {
		e.preventDefault();
		setDireccion({
			...direccion,
			[e.target.name]: e.target.value,
		});
	};
	const nuevaDireccion = (e) => {
		e.preventDefault();
		if (nombre.length < 5 && referencia.length < 5) {
			mostrarAlerta("los campos deben tener minimo 5 caracteres");
			return;
		} else {
			crearDireccionNueva(direccion);
			crearElemento();
		}
	};
	const removerDireccion = (e) => {
		e.preventDefault();
		eliminarDireccion(direccionactual._id);
		eliminarElemento();
	};

	const actualziarDireccion = (e) => {
		e.preventDefault();
		actualizarDireccion(direccionactual._id, direccion);
		editarElemento();
	};

	const eliminarMiCuenta = (e) => {
		e.preventDefault();
		eliminarCuentadeUsuario(usuario_ls._id);
		activarModal(false);
	};

	return (
		<div className="  w-full">
			<div className="">
				<SubTitulo texto={"Mi Cuenta"} />
			</div>

			<div className="mt-5 grid grid-cols-2 gap-5">
				<div className="col-start-1 col-end-3">
					<MiniPlomo texto="nombres" />
					<InputCuadrado
						atributos={{
							id: "username",
							name: "username",
							value: username,
							placeholder: "nombres",
							type: "text",
							minimo: 5,
							maximo: 50,
						}}
						handleChange={handleChange}
					/>
				</div>

				<div>
					<MiniPlomo texto="celular" />
					<InputCuadrado
						atributos={{
							id: "celular",
							name: "celular",
							value: celular,
							placeholder: "numero de celular",
							type: "text",
							minimo: 4,
							maximo: 9,
						}}
						handleChange={handleChange}
					/>
				</div>
				<div>
					<MiniPlomo texto="correo" />
					<InputCuadrado
						atributos={{
							id: "email",
							name: "email",
							value: email,
							placeholder: "correo electronico",
							type: "text",
							minimo: 10,
							maximo: 40,
						}}
						handleChange={handleChange}
					/>
				</div>
				<div>
					<MiniPlomo texto="dni" />
					<InputCuadrado
						atributos={{
							id: "dni",
							name: "dni",
							value: dni,
							placeholder: "numero de dni",
							type: "text",
							minimo: 6,
							maximo: 10,
						}}
						handleChange={handleChange}
					/>
				</div>

				<p className="p-0 mt-4 col-span-full text-lg font-medium">
					direcciones
				</p>

				{direcciones.length > 0 ? (
					<div className="col-start-1 col-span-2 gap-5 grid grid-cols-1 ">
						{direcciones.map((e) => (
							<div
								className="grid grid-cols-2 bg-white shadow-sm border p-4 rounded-lg"
								key={e._id}
							>
								<div className="col-span-full  text-lg text-primario-blue">
									<ItemDireccion
										atributos={{
											texto: e.nombre,
										}}
										getDireccion={seleccionarDireccion}
										id={e._id}
										setDireccion={setDireccion}
									/>
								</div>
								<p className="col-span-full mx-3">Referencia: {e.referencia}</p>
							</div>
						))}
					</div>
				) : (
					<div className=" col-span-2 flex flex-col justify-center items-center">
						<p className="text-primario-blue">
							no tienes ni una direccion registrada
						</p>
						<div
							onClick={() => {
								crearElemento();
							}}
							className="text-primario-blue text-3xl py-4 cursor-pointer hover:text-blue-800 "
						>
							<IconMas />
						</div>
					</div>
				)}
			</div>

			<div className=" flex justify-between py-10">
				<div onClick={openModal}>
					<TextoRojo texto={"eliminar cuenta"} />
				</div>

				<BotonAzul
					onBtn={() => {
						actualizarCuentaDeUsuario(usuario_ls._id, datos);
					}}
					texto={"Guardar Cambios"}
				/>
			</div>
			{modal && (
				<Modal style={"bg-gray-700 "}>
					<CardAlerta
						atributos={{
							titulo: "Eliminar Cuenta",
							accion: "Eliminar",
							cancelar: "cancelar",
						}}
						cerrarCard={openModal}
						accionCard={eliminarMiCuenta}
					>
						<p>
							Estas seguro de eliminar tu cuenta? <br /> perderas toda tu
							informacion registrada{" "}
						</p>
					</CardAlerta>
				</Modal>
			)}

			{deleteelement && (
				<Modal style={"bg-gray-700 opacity-75 "}>
					<CardAlerta
						atributos={{
							titulo: "Eliminar direccion",
							accion: "Eliminar",
							cancelar: "Cancelar",
						}}
						accionCard={removerDireccion}
						cerrarCard={eliminarElemento}
					>
						<p>
							¿Estas seguro de eliminar esta direcicon? <br /> Estos datos son
							requeridos para para realizar tus pedidos
						</p>
					</CardAlerta>
				</Modal>
			)}

			{elemento && (
				<Modal style={"bg-gray-700 opacity-75"}>
					<div className="grid grid-cols-2 bg-white p-8 w-full  relative">
						<div className="col-span-full mb-4 w-96">
							<p className="font-semibold my-4">Nueva Direccion</p>
							<p className="text-primario-red mb-2">
								{" "}
								{alerta ? alerta.msg : ""}
							</p>
							<input
								type="text"
								name="nombre"
								placeholder="nombre de direccion"
								className=" bg-white shadow-md border-4 border-primario-blue w-full   text-xl flex items-center px-4 py-4 focus:outline-none text-primario-blue rounded-lg"
								onChange={onChangeDireccion}
							></input>
						</div>
						<div className="col-span-full mb-4 w-96">
							<input
								type="text"
								name="referencia"
								placeholder="referencia de direccion"
								className=" bg-white shadow-md border-4 border-primario-blue w-full   text-xl flex items-center px-4 py-4 focus:outline-none text-primario-blue rounded-lg"
								onChange={onChangeDireccion}
							></input>
						</div>
						<Notificacion onBtn={crearElemento} texto={"X"} />

						<div className=" "></div>
						<div className="flex justify-end">
							<BotonAzul onBtn={nuevaDireccion} texto={"CREAR"} />
						</div>
					</div>
				</Modal>
			)}

			{editarelemento && (
				<Modal style={"bg-gray-700 opacity-75"}>
					<div className="grid grid-cols-2 bg-white p-8 w-full  relative">
						<div className="col-span-full mb-4 w-96">
							<p className="font-semibold my-4">Editar Direccion</p>
							<p className="text-primario-red mb-2">
								{" "}
								{alerta ? alerta.msg : ""}
							</p>
							<input
								type="text"
								name="nombre"
								value={nombre}
								placeholder="nombre de direccion"
								className=" bg-white shadow-md border-4 border-primario-blue w-full   text-xl flex items-center px-4 py-4 focus:outline-none text-primario-blue rounded-lg"
								onChange={onChangeDireccion}
							></input>
						</div>
						<div className="col-span-full mb-4 w-96">
							<input
								type="text"
								name="referencia"
								value={referencia}
								placeholder="referencia de direccion"
								className=" bg-white shadow-md border-4 border-primario-blue w-full   text-xl flex items-center px-4 py-4 focus:outline-none text-primario-blue rounded-lg"
								onChange={onChangeDireccion}
							></input>
						</div>
						<Notificacion onBtn={editarElemento} texto={"X"} />

						<div className=" "></div>
						<div className="flex justify-end">
							<BotonAzul onBtn={actualziarDireccion} texto={"Guardar"} />
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Cuenta;
