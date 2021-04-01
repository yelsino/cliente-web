import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import DireccionContext from "../../../context/direcciones/direccionContext";
import ListaContext from "../../../context/listas/listaContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import BotonVerde from "../../atomos/botones/BotonVerde";
import IconDisplay from "../../atomos/icons/IconDisplay";
import SubTitulo from "../../atomos/textos/SubTitulo";
import Modal from "../../plantillas/Modal";

const Pedido = () => {
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado } = authContext;
	const listasContext = useContext(ListaContext);
	const { listas, obtenerListas } = listasContext;
	const direccionesContext = useContext(DireccionContext);
	const { direcciones, obtenerDirecciones } = direccionesContext;

	const [codigo, showCodigo] = useState(false);
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
									Juan Alverto Medrano
								</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">dni: </span>
								<span className="text-gray-700 lett tracking-widest">
									20595485
								</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">celular: </span>
								<span className="text-gray-700 tracking-widest">
									999 999 999
								</span>
							</p>
							<p className="my-4">
								<span className="font-bold text-gray-600">email: </span>
								<span className="text-gray-700 tracking-widest">
									jaun231@gmail.com
								</span>
							</p>
						</div>
					</div>

					{/*  */}
					{/*  */}
					{/*  */}
					<div className="flex justify-center ">
						<div>
							<SubTitulo texto={"PEDIDO"} />
							<p className="font-bold text-gray-600 mt-4">lista seleccionada</p>

							<div className="relative mb-4 ">
								<select className="p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide">
									{listas.map((e) => (
										<option className="p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide">
											{e.nombre}
										</option>
									))}
								</select>
							</div>

							<p className="font-bold text-gray-600">direccion seleccionada</p>
							<select className="p-4 bg-primario-blue-claro text-primario-blue font-semibold focus:outline-none w-96 flex justify-center px-4 tracking-wide">
								{direcciones.map((e) => (
									<option>{e.nombre}</option>
								))}
							</select>
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
							Mi primer lista de Compras
						</p>
						<div className="mx-6">
							<p className="my-10 flex justify-between ">
								<span className="text-gray-500 ">SUB TOTAL: </span>
								<span className="font-bold">S/ 125.00 </span>
							</p>
							<p className="my-10 flex justify-between ">
								<span className="text-gray-500 ">ENVIO: </span>
								<span className="font-bold">GRATIS </span>
							</p>
							<p className="mt-11  flex justify-between ">
								<span className="text-gray-500 ">TOTAL: </span>
								<span className="font-bold">S/ 125.00 </span>
							</p>
						</div>
						<div className="flex justify-center">
							<BotonVerde texto={"GENERAR"} style={"my-10 mx-auto"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pedido;
