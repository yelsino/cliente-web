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
// import { useHistory } from "react-router";
import { useHistory } from "react-router-dom";
import CardProduct from "../../moleculas/Cards/CardProducto";
import ModalLibre from "../../plantillas/ModalLibre";

const Tienda = () => {
	useEffect(() => {
		usuarioAutenticado();
		obtenerProductos();
		obtenerListas();
		obtenerDirecciones();
	}, []);
	//d CONTEXTOS
	const authContext = useContext(AuthContexto);
	const { usuario, usuarioAutenticado, actualizarCuentaDeUsuario } =
		authContext;
	const alertasContext = useContext(alertaContext);
	const { alerta, alerta2, card, abrirCard, mostrarAlerta, mostrarAlerta2 } =
		alertasContext;
	const elementosContext = useContext(ElementoContext);
	const { elemento_actual, elemento, mostrarElemento, crearElemento } =
		elementosContext;
	const productoContext = useContext(ProductoContext);
	const { productos, bloqueo, obtenerProductos, obtenerporCategoria } =
		productoContext;

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

	const getVegetales = () => obtenerporCategoria("6271e9a09e55b90d6cd409b9");

	const getAbarrotes = () => obtenerporCategoria("6271e9a09e55b90d6cd409bb");

	const getFrutas = () => obtenerporCategoria("6271e9a09e55b90d6cd409ba");

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
		referencia: "",
	});

	const { nombre: nombre_direccion, referencia, creador } = datosdireccion;

	const onChangeCliente = (e) => {
		setCliente({
			...datoscliente,
			[e.target.name]: e.target.value,
		});
		if (e.target.name === "celular" && e.target.value.length > 9) {
			setCliente({
				...datoscliente,
				celular: e.target.value.substring(0, e.target.value.length - 1),
			});
		}
		if (e.target.name === "dni" && e.target.value.length > 11) {
			setCliente({
				...datoscliente,
				dni: e.target.value.substring(0, e.target.value.length - 1),
			});
		}
	};
	const onChangeDireccion = (e) => {
		setDireccion({
			...datosdireccion,
			[e.target.name]: e.target.value,
		});

		if (e.target.name === "nombre" && e.target.value.length > 50) {
			setDireccion({
				...datosdireccion,
				nombre: e.target.value.substring(0, e.target.value.length - 1),
			});
		}
		if (e.target.name === "referencia" && e.target.value.length > 70) {
			setDireccion({
				...usuario,
				referencia: e.target.value.substring(0, e.target.value.length - 1),
			});
		}
	};

	const generarPedido = (e) => {
		const verificar_cantidades = listaseleccionada.cantidad_producto;
		const verificar_productos = listaseleccionada.productos;

		let contador = 0;
		for (const producto of verificar_productos) {
			console.log(producto);
			if (
				producto.stock >=
				verificar_cantidades.find((e) => e.id === producto._id)
					.cantidad_producto
			)
				contador++;
		}
		if (contador === verificar_productos.length) {
			obtenerDirecciones();
			setCliente({
				username: usuario.username,
				email: usuario.email,
				celular: !usuario.celular ? "" : usuario.celular,
				dni: !usuario.dni ? "" : usuario.dni,
			});

			setDireccion({
				...datosdireccion,
				creador: usuario._id,
			});
			setModal(true);
		} else {
			console.log(contador);
			console.log(verificar_productos.length);
			mostrarAlerta2(`no hay productos`);
		}
	};
	const crearNuevaDireccion = () => {
		if (nombre_direccion.length < 5 || referencia.length < 5) {
			mostrarAlerta(
				"los datos de la direccion deben contener almenos 5 caracteres"
			);
			return;
		}
		// actualizarCuentaDeUsuario(usuario._id, datoscliente);
		crearDireccionNueva(datosdireccion);
		showInputs(false);
	};

	const botonSiguiente = (e) => {
		if (!direccionactual) {
			mostrarAlerta("debe seleccionar una de sus direcciones para continuar");
			return;
		}
		if (!listaseleccionada) {
			listaActual(listas[0]._id);
		}
		if (username === "" || email === "" || celular === "" || dni === "") {
			mostrarAlerta("todos los campos son obligarorios");
			return;
		}
		actualizarCuentaDeUsuario(usuario._id, datoscliente);

		e.preventDefault();
		history.push("/pedido");
	};
	return (
		<div className="mt-24 relative">
			<Navbar listas={listas} />
			{alerta2 && (
				<p className=" centrarAbosolute z-20   h-20 w-20 text-center bg-white p-4 border-4 border-primario-red text-primario-red rounded-lg shadow-lg top-32">
					hay productos agotados{" "}
					<span className="text-gray-500">
						en tu lista, actualizalos o eliminalos
					</span>
				</p>
			)}
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
							{/* fintra los productos */}
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
							{/* pinta todos los productos en pantalla */}
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
											if (!listaseleccionada) {
												mostrarAlerta("crea una lista de pedido para iniciar");
												return;
											}
											guardarCambiosEnLista(listaseleccionada);
											listaActual(listaseleccionada._id);
											if (listaseleccionada.productos.length === 0) {
												mostrarAlerta("añada productos");
												return;
											}
											generarPedido();
										}}
										texto={"Pedir Envio"}
										style={
											"fixed bottom-12 right-12 shadow-xl z-0  text-xl py-4 transition duration-500 ease-in-out transform hover:shadow-2xl"
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
									<p
										className={` text-center marginporciento20 text-lg ${
											alerta ? "text-primario-red" : "text-primario-blue"
										}`}
									>
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
									<span
										onClick={() => {
											crearElemento();
										}}
										className={`${alerta ? "text-primario-blue" : ""}`}
									>
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
				// D CATALOGO
				// D CATALOGO
				// D CATALOGO
				// D CATALOGO
				// D CATALOGO
				// D CATALOGO
				<div className="mb-5">
					{/* <SubTitulo texto={"Nuestros productos"} style={"text-center"} /> */}
					<p className="text-center text-gray-500 mb-5">
						<span className="text-primario-red text-xl font-medium">- </span>
						Registrese para realizar un pedido{" "}
						<span className="text-primario-red text-xl font-medium"> -</span>
					</p>
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
							<CardProduct producto={e} key={e._id} />
						))}
					</div>
				</div>
			)}

			{/*  */}
			{/* DATOS DE FACTURACION */}
			{/*  */}
			{modal && (
				<Modal style={"bg-gray-800 opacity-60 "} position={"z-40"}>
					<Notificacion
						texto={"X"}
						onBtn={() => {
							setModal(false);
						}}
					/>
					<div className="bg-white p-8">
						{alerta && (
							<p className="py-4 text-lg text-primario-red"> {alerta.msg}</p>
						)}

						<p>
							<span className="text-primario-red">Advertencia:</span>{" "}
							<span>
								los pedidos con lugar de envio fuera de satipo, no seran
								procesados
							</span>
						</p>
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
									style={"border"}
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
									style={"border"}
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-5 w-24">CELULAR</p>
								<InputRdVerde
									atributos={{
										id: "celular",
										name: "celular",
										value: celular,
										type: "number",
										placeholder: "numero de celular",
									}}
									handleChange={onChangeCliente}
									style={"border"}
								/>
							</div>
							<div className="flex items-center">
								<p className="mr-5 w-24">DNI/RUC</p>
								<InputRdVerde
									atributos={{
										id: "dni",
										name: "dni",
										value: dni,
										type: "number",
										placeholder: "documento de identidad",
										max: 11,
									}}
									handleChange={onChangeCliente}
									style={"border"}
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
										<p>selecciona una direccion</p>
										{direcciones.length > 0 && !newdireccion && (
											<button
												onClick={() => {
													setDireccion({
														...datosdireccion,
														nombre: "",
														referencia: "",
													});

													showInputs(true);
													setNewDireecion(true);
												}}
												className="bg-primario-blue-claro rounded-lg px-2 hover:text-white hover:bg-primario-blue"
											>
												nueva direccion
											</button>
										)}
										{direcciones.length > 0 && newdireccion && (
											<button
												onClick={() => {
													const direcion = {
														nombre: nombre_direccion,
														referencia: referencia,
														creador: usuario._id,
													};
													if (
														nombre_direccion.length < 5 ||
														referencia.length < 5
													) {
														mostrarAlerta(
															"los campos deben tener almennos 5 valores"
														);
														return;
													}
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
											key={e._id}
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
										<button
											onClick={() => {
												showInputs(true);
											}}
											className="bg-primario-blue-claro rounded-lg p-4 hover:text-white hover:bg-primario-blue"
										>
											nueva direccion
										</button>
									) : (
										<div className="absolute bottom-5 right-10">
											<BotonVerde
												onBtn={crearNuevaDireccion}
												texto={"crear Direccion"}
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
										style={"border"}
									/>
								</div>

								<div className="flex items-center">
									<p className="mr-5 w-24">REFERENCIA</p>
									<InputRdVerde
										atributos={{
											id: "refencia",
											name: "referencia",
											value: referencia,
											type: "text",
											placeholder: "referencia de direccion",
										}}
										handleChange={onChangeDireccion}
										style={"border"}
									/>
								</div>
							</div>
						)}
					</div>
				</Modal>
			)}
			{bloqueo && (
				<ModalLibre style={"bg-white"} position={"z-40"}>
					<div className=" flex justify-center items-center h-screen">
						<div className="flex flex-col">
							{/* <p className='text-5xl'>NEGOCIOS CARLOS</p> */}
							<button
								type="button"
								className="inline-flex items-center px-4 py-2 border border-transparent  leading-6 font-medium rounded-md text-primario-blue bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed text-lg"
							>
								<svg
									className="animate-spin -ml-1 mr-3 h-7 w-7 text-primario-blue"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Cargando Tienda
							</button>
						</div>
					</div>
				</ModalLibre>
			)}
		</div>
	);
};

export default Tienda;
