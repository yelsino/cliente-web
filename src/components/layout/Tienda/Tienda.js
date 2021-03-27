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
import Superposicion from "../../moleculas/Superposicion";
import round from "round";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";

const Tienda = () => {
	//d CONTEXTOS
	const authContext = useContext(AuthContexto);
	const { usuario, usuarioAutenticado } = authContext;
	const alertasContext = useContext(alertaContext);
	const { alerta, mostrarAlerta } = alertasContext;
	const elementosContext = useContext(ElementoContext);
	const { elemento_actual, mostrarElemento } = elementosContext;
	const productoContext = useContext(ProductoContext);
	const { productos, obtenerProductos, obtenerporCategoria } = productoContext;

	const listaContext = useContext(ListaContext);
	const {
		listas,
		listaseleccionada,
		obtenerListas,
		crearLista,
		guardarCambiosEnLista,
	} = listaContext;

	// d ESTADOS
	const [pagar, setPagar] = useState(false);
	const [btn_act, activeBtnAct] = useState(false);
	const [buscar, setBuscador] = useState("");
	const [filtrado, setFiltrado] = useState([]);
	const [total_lista, setTotalLista] = useState(
		listaseleccionada
			? listaseleccionada.cantidad_producto.reduce(
					(acc, { cantidad_producto, id }) =>
						acc +
						cantidad_producto *
							listaseleccionada.productos.find((e) => e._id === id)
								.precio_minoreo,
					0
			  )
			: 0
	);

	// d FUNCIONES
	const showPay = () => {
		setPagar(!pagar);
	};

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

	useEffect(() => {
		obtenerProductos();
		usuarioAutenticado();
		obtenerListas();
		console.log("efect tienda");
	}, []);

	return (
		<div className="mt-28">
			<Navbar listas={listas} />
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
								const filtrar = copia_lista.find((item) => item._id === e._id);
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
								const filtrar = copia_lista.find((item) => item._id === e._id);
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
										showPay();
									}}
									texto={"Pedir Envio"}
									style={
										"fixed bottom-12 right-12 shadow-xl z-0 bg-red-100 text-xl py-4"
									}
								/>
							</div>
						) : (
							<BotonAzul
								texto={"Crear Lista"}
								style={" shadow-xl z-0 bg-red-100 text-xl py-4"}
							/>
						)}
						{pagar && <Superposicion />}
					</div>
					<div className="fixed bottom-0 w-full  medida50 flex justify-center bg-white mt-20">
						<InputRdVerde
							atributos={{
								name: "buscar",
								placeholder: "Buscar",
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
				<div className=" medida50 border-l-4 border-primario-green relative mb-32 ">
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
										// setTimeout(() => {
										// 	obtenerListas();
										// }, 1000);
										setTimeout(() => {
											activeBtnAct(false);
										}, 2000);
									}}
									className={` px-2 py-2 border-primario-green-semi border-4 rounded-lg text-center w-32 text-primario-green-semi font-bold no-underline outline-none focus:outline-none  ${
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
						<p className="text-primario-blue text-center marginporciento20 text-lg">
							Crea una{" "}
							<span className="text-primario-red cursor-pointer">
								nueva lista
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
		</div>
	);
};

export default Tienda;
