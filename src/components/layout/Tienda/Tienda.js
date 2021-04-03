import { useContext, useEffect, useState } from "react";
import alertaContext from "../../../context/alertas/alertaContext";
import AuthContexto from "../../../context/autenticacion/authContext";
import ElementoContext from "../../../context/elementos/elementContext";
import ListaContext from "../../../context/listas/listaContext";
import ProductoContext from "../../../context/productos/productoContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import SubTitulo from "../../atomos/textos/SubTitulo";
import CardAgregar from "../../moleculas/Cards/CardAgregar";
import Filtro from "../../moleculas/Filtro";
import ItemProductoLista from "../../moleculas/Items/ItemProductoLista";
import Navbar from "../../moleculas/Navbar";
import BotonVerde from "../../atomos/botones/BotonVerde";
import DireccionContext from "../../../context/direcciones/direccionContext";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";
import Modal from "../../plantillas/Modal";
import Notificacion from "../../atomos/objetos/Notificacion";
import { useHistory } from "react-router";
import CardProduct from "../../moleculas/Cards/CardProducto";

const Tienda = () => {
	useEffect(() => {
		usuarioAutenticado();
		obtenerProductos();
		obtenerListas();
		obtenerDirecciones();
	}, []);
	//d CONTEXTOS
	const authContext = useContext(AuthContexto);
	const {
		usuario,
		usuarioAutenticado,
		actualizarCuentaDeUsuario,
	} = authContext;
	const alertasContext = useContext(alertaContext);
	const { alerta, card, abrirCard, mostrarAlerta } = alertasContext;
	const elementosContext = useContext(ElementoContext);
	const {
		elemento_actual,
		elemento,
		mostrarElemento,
		crearElemento,
	} = elementosContext;
	const productoContext = useContext(ProductoContext);
	const { productos, obtenerProductos, obtenerporCategoria } = productoContext;

	const listaContext = useContext(ListaContext);
	const {
		listas,
		listaseleccionada,
		total,
		obtenerListas,
		listaActual,
		crearLista,
		guardarCambiosEnLista,
	} = listaContext;
	const direccionesContext = useContext(DireccionContext);
	const {
		direcciones,
		crearDireccionNueva,
		direccionactual,
		obtenerDirecciones,
		seleccionarDireccion,
	} = direccionesContext;

	const history = useHistory();
	// d ESTADOS
	const [btn_act, activeBtnAct] = useState(false);
	const [buscar, setBuscador] = useState("");
	const [filtrado, setFiltrado] = useState([]);
	const [modal, setModal] = useState(false);
	const [inputs, showInputs] = useState(false);
	const [newdireccion, setNewDireecion] = useState(false);
	const token_user = localStorage.getItem("token");
	// d FUNCIONES

	const getVegetales = () => obtenerporCategoria("601ecaad34bf2f55c7fbfd82");

	const getAbarrotes = () => obtenerporCategoria("601ecaad34bf2f55c7fbfd84");

	const getFrutas = () => obtenerporCategoria("601ecaad34bf2f55c7fbfd83");

	const buscadorForName = async (e) => {
		e.persist();
		await setBuscador(e.target.value);
		filtrarElementos();
		console.log(buscar);
	};

	const filtrarElementos = () => {
		const busqueda = productos.filter((item) => {
			if (item.nombre.includes(buscar)) {
				return item;
			}
		});
		setFiltrado(busqueda);
	};

	const [datoscliente, setCliente] = useState({
		username: usuario ? usuario.username : "",
		email: usuario ? usuario.email : "",
		celular: usuario ? usuario.celular : "",
		dni: usuario ? usuario.dni : "",
	});
	const { username, email, celular, dni } = datoscliente;

	const [datosdireccion, setDireccion] = useState({
		creador: usuario ? usuario._id : "",
		nombre: "",
		refencia: "",
	});

	const { nombre: nombre_direccion, refencia, creador } = datosdireccion;

	const onChangeCliente = (e) => {
		setCliente({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};
	const onChangeDireccion = (e) => {
		setDireccion({
			...datosdireccion,
			[e.target.name]: e.target.value,
		});
	};

	const generarPedido = (e) => {
		obtenerDirecciones();
		setCliente({
			username: usuario.username,
			email: usuario.email,
			celular: usuario.celular,
			dni: usuario.dni,
		});

		setDireccion({
			...datosdireccion,
			creador: usuario._id,
		});
		setModal(true);
	};
	const crearNuevaDireccion = () => {
		if (
			username === "" ||
			email === "" ||
			celular === "" ||
			dni === "" ||
			nombre_direccion === "" ||
			refencia === ""
		) {
			mostrarAlerta("todos los campos son obligarorios");
			return;
		}
		actualizarCuentaDeUsuario(usuario._id, datoscliente);
		crearDireccionNueva(datosdireccion);
		setTimeout(() => {
			history.push("/pedido");
		}, 500);
	};

	const botonSiguiente = (e) => {
		if (!direccionactual) {
			mostrarAlerta("debe seleccionar una de sus direcciones para continuar");
			return;
		}
		listaActual(listaseleccionada._id);
		if (username === "" || email === "" || celular === "" || dni === "") {
			mostrarAlerta("todos los campos son obligarorios");
			return;
		}
		actualizarCuentaDeUsuario(usuario._id, datoscliente);

		e.preventDefault();
		history.push("/pedido");
	};
	return (
		<div className="mt-28">
			<Navbar listas={listas} />
			{token_user ? (
				<div className="flex justify-center">
					{/*  */}
					{/*  */}
					{/* Productos en tienda */}
					{/*  */}
					{/*  */}
					<div className="medida50 relative">
						<SubTitulo texto={"Productos en Tienda"} style={"text-center"} />

						<div className="flex flex-col items-center mx-10 mt-8  mb-28 ">
							<Filtro
								texto1={"Vegetales"}
								texto2={"Frutas"}
								texto3={"Abarrotes"}
								texto4={""}
								texto5={""}
								filtro1={getVegetales}
								filtro2={getFrutas}
								filtro3={getAbarrotes}
								filtro4={() => {}}
								filtro5={() => {}}
							/>
							<div
								id="vista_productos"
								className="flex flex-wrap justify-center mt-4 "
							>
								{filtrado.map((e) => {
									const copia_lista = listaseleccionada
										? listaseleccionada.productos
										: [];
									const filtrar = copia_lista.find(
										(item) => item._id === e._id
									);
									if (filtrar === undefined)
										return <CardAgregar key={e._id} producto={e} />;
								})}
							</div>
							<div
								id="vista_productos"
								className="flex flex-wrap justify-center mt-4 "
							>
								{productos.map((e) => {
									const copia_lista = listaseleccionada
										? listaseleccionada.productos
										: [];
									const filtrar = copia_lista.find(
										(item) => item._id === e._id
									);
									if (filtrar === undefined)
										return <CardAgregar key={e._id} producto={e} />;
								})}
							</div>
							{listas.length > 0 ? (
								<div className="fixed bottom-10 right-10 bg-red-100 z-40">
									{elemento_actual && (
										<p className="absolute -top-28 right-4 w-36  text-center bg-primario-green py-2 px-2 text-green-900 text-sm rounded-md">
											stock:{" "}
											<span className="font-bold text-lg">
												{elemento_actual && elemento_actual.texto1}
											</span>{" "}
											{elemento_actual && elemento_actual.texto2}
										</p>
									)}
									<BotonAzul
										onBtn={() => {
											guardarCambiosEnLista(listaseleccionada);
											generarPedido();
											// history.push("/pedido");
										}}
										texto={"Pedir Envio"}
										style={
											"fixed bottom-12 right-12 shadow-xl z-0 bg-red-100 text-xl py-4"
										}
									/>
								</div>
							) : (
								<BotonAzul
									onBtn={() => {
										crearElemento();
									}}
									texto={"Crear Lista"}
									style={
										" fixed bottom-12 right-12 shadow-xl z-0 bg-red-100 text-xl py-4"
									}
								/>
							)}
						</div>
						<div className="fixed bottom-0 w-full  medida50 flex justify-center bg-white mt-20">
							<InputRdVerde
								atributos={{
									name: "buscar",
									placeholder: "Buscar Productos",
									id: "buscar",
									type: "text",
									value: buscar,
								}}
								handleChange={buscadorForName}
							/>
						</div>
					</div>

					{/*  */}
					{/*  */}
					{/* LISTA DE PEDIDO */}
					{/*  */}
					{/*  */}
					<div className=" medida50 border-l-4 border-primario-green relative mb-32  ">
						{listaseleccionada ? (
							<div>
								<div className="flex justify-center flex-col items-center">
									<div className="flex items-center mb-2  w-full justify-center">
										<SubTitulo
											texto={listaseleccionada.nombre}
											style={"text-center "}
										/>
										{"   "}
										{listaseleccionada && (
											<span className="ml-4 text-primario-blue text-xl font-bold">
												{" "}
												{listaseleccionada
													? listaseleccionada.cantidad_producto
															.reduce(
																(acc, { cantidad_producto, id }) =>
																	acc +
																	cantidad_producto *
																		listaseleccionada.productos.find(
																			(e) => e._id === id
																		).precio_minoreo,
																0
															)
															.toFixed(1)
													: 0}{" "}
												S/
											</span>
										)}
									</div>
									<button
										onClick={() => {
											activeBtnAct(true);
											guardarCambiosEnLista(listaseleccionada);
											setTimeout(() => {
												activeBtnAct(false);
											}, 2000);
										}}
										className={` px-2 py-2 border-primario-green-semi border-4 rounded-lg text-center w-36 text-primario-green-semi font-bold no-underline outline-none focus:outline-none  ${
											btn_act ? "bg-primario-green border-none" : ""
										}`}
									>
										Guardar Cambios
									</button>
								</div>
								{/*  */}
								{listaseleccionada.productos.length > 0 ? (
									<div className="flex flex-col justify-center mt-4">
										{listaseleccionada.productos.map((e) => (
											<ItemProductoLista
												mostrarElemento={mostrarElemento}
												elemento_actual={elemento_actual}
												key={e._id}
												producto={e}
											/>
										))}
									</div>
								) : (
									<p className="text-primario-blue text-center marginporciento20 text-lg">
										Lista Vacia, <br /> añada productos
									</p>
								)}
							</div>
						) : (
							<SubTitulo texto={"Lista de Pedido"} style={"text-center"} />
						)}
						{listas.length < 1 ? (
							<p
								className={` text-center marginporciento20 text-lg ${
									alerta ? "text-primario-red" : "text-primario-blue"
								}`}
							>
								Crea una{" "}
								<span className="text-primario-red cursor-pointer">
									<span className={`${alerta ? "text-primario-blue" : ""}`}>
										nueva lista
									</span>
								</span>{" "}
								<br /> y añada productos
							</p>
						) : (
							!listaseleccionada && (
								<p
									className={` text-center marginporciento20 text-lg ${
										alerta ? "text-primario-red" : "text-primario-blue"
									} `}
								>
									Seleccione una de sus listas <br /> y añada productos
								</p>
							)
						)}
					</div>
				</div>
			) : (
				<div className="">
					<Filtro
						texto1={"Vegetales"}
						texto2={"Frutas"}
						texto3={"Abarrotes"}
						texto4={""}
						texto5={""}
						filtro1={getVegetales}
						filtro2={getFrutas}
						filtro3={getAbarrotes}
						filtro4={() => {}}
						filtro5={() => {}}
					/>
					<div className="flex flex-wrap justify-center mt-5">
						{productos.map((e) => (
							<CardProduct producto={e} />
						))}
					</div>
				</div>
			)}

			{/*  */}
			{/* DATOS DE FACTURACION */}
			{modal && (
				<Modal style={"bg-gray-700 opacity-75 "} position={"z-40"}>
					<Notificacion
						texto={"X"}
						onBtn={() => {
							setModal(false);
						}}
					/>
					<div className="bg-white p-8 mb-10">
						{alerta && <p className="py-4 text-primario-red"> {alerta.msg}</p>}
						<SubTitulo texto={"Datos de Envio"} />
						<div className="grid grid-cols-2 gap-5">
							<div className="flex items-center">
								<p className="mr-5 w-24 ">NOMBRES</p>
								<InputRdVerde
									atributos={{
										id: "username",
										name: "username",
										value: username,
										type: "text",
										placeholder: "ejemplo: Juan Garcia",
									}}
									handleChange={onChangeCliente}
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-5 w-24">EMAIL</p>
								<InputRdVerde
									atributos={{
										id: "email",
										name: "email",
										value: email,
										type: "text",
										placeholder: "correo electronico",
									}}
									handleChange={onChangeCliente}
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-5 w-24">CELULAR</p>
								<InputRdVerde
									atributos={{
										id: "celular",
										name: "celular",
										value: celular,
										type: "text",
										placeholder: "numero de celular",
									}}
									handleChange={onChangeCliente}
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-5 w-24">DNI</p>
								<InputRdVerde
									atributos={{
										id: "dni",
										name: "dni",
										value: dni,
										type: "text",
										placeholder: "documento de identidad",
									}}
									handleChange={onChangeCliente}
								/>
							</div>
						</div>
						{/* direcion seleccionada */}
						{direcciones.length > 0 && (
							<div className="flex ">
								<div className="flex items-center">
									{" "}
									<p className="mr-5 w-24">DIRECCION</p>
									<div className="  text-green-500 rounded-lg  font-semibold outline-none py-4 px-6 text-lg input_text fill-current w-full">
										{!direccionactual ? "" : direccionactual.nombre}
									</div>
								</div>
								<div className="flex items-center">
									{" "}
									<p className="mr-5 w-24">REFERENCIA</p>
									<div className="  text-green-500 rounded-lg  font-semibold outline-none py-4 px-6 text-lg input_text fill-current w-full">
										{!direccionactual ? "" : direccionactual.referencia}
									</div>
								</div>
							</div>
						)}
						{/* escoger dieccion */}
						<div>
							<div
								className={` my-4 text-lg  ${
									direccionactual ? "text-primario-blue" : "text-primario-red "
								}`}
							>
								{direcciones.length <= 0 ? (
									<div>
										<p>
											crear una direccion <br /> para continuar
										</p>
									</div>
								) : (
									<div className="flex justify-between">
										<p>seleccionar direccion</p>
										{direcciones.length > 0 && !newdireccion && (
											<button
												onClick={() => {
													showInputs(true);
													setNewDireecion(true);
												}}
												className="bg-primario-blue-claro rounded-lg px-2 hover:text-white hover:bg-primario-blue"
											>
												nuevo
											</button>
										)}
										{direcciones.length > 0 && newdireccion && (
											<button
												onClick={() => {
													const direcion = {
														nombre: nombre_direccion,
														referencia: refencia,
														creador: usuario._id,
													};
													console.log(direcion);
													crearDireccionNueva(direcion);
													showInputs(false);
													setNewDireecion(false);
												}}
												className="bg-primario-blue-claro rounded-lg px-2 hover:text-white hover:bg-primario-blue"
											>
												guardar
											</button>
										)}
									</div>
								)}
							</div>

							{direcciones.length > 0 ? (
								<div>
									{direcciones.map((e) => (
										<div
											onClick={() => {
												seleccionarDireccion(e._id);
											}}
											className={`flex justify-between bg-primario-blue-claro p-4 mb-1 cursor-pointer text-primario-blue rounded-lg hover:text-white hover:bg-primario-blue ${
												direccionactual && e._id === direccionactual._id
													? "border-4 border-primario-blue"
													: ""
											}`}
										>
											<p>{e.nombre}</p>
										</div>
									))}
								</div>
							) : (
								<div className=" ">
									{!inputs ? (
										<BotonVerde
											onBtn={() => {
												showInputs(true);
											}}
											texto={"Nueva direccion"}
										/>
									) : (
										<div className="absolute bottom-14 right-10">
											<BotonVerde
												onBtn={crearNuevaDireccion}
												texto={"Siguiente"}
											/>
										</div>
									)}
								</div>
							)}
						</div>
						{direcciones.length > 0 && !newdireccion && (
							<div className="flex justify-center my-4 ">
								<BotonVerde texto={"Siguiente"} onBtn={botonSiguiente} />
								<p
									className={` text-center my-4 text-xl ${
										alerta ? "text-primario-red" : "text-primario-blue "
									}`}
								></p>
							</div>
						)}

						{inputs && (
							<div className="mb-10 grid grid-cols-2">
								<div className="flex items-center">
									<p className="mr-5 w-24">DIRECCION</p>
									<InputRdVerde
										atributos={{
											id: "nombre",
											name: "nombre",
											value: nombre_direccion,
											type: "text",
											placeholder: "direccion de envio",
										}}
										handleChange={onChangeDireccion}
									/>
								</div>

								<div className="flex items-center">
									<p className="mr-5 w-24">REFERENCIA</p>
									<InputRdVerde
										atributos={{
											id: "refencia",
											name: "refencia",
											value: refencia,
											type: "text",
											placeholder: "referencia de direccion",
										}}
										handleChange={onChangeDireccion}
									/>
								</div>
							</div>
						)}
					</div>
				</Modal>
			)}
			{/*  */}
		</div>
	);
};

export default Tienda;
