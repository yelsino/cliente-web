import { Fragment, useContext, useEffect } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import DireccionContext from "../../../context/direcciones/direccionContext";
import ListaContext from "../../../context/listas/listaContext";

const Pedido = () => {
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado } = authContext;
	const listasContext = useContext(ListaContext);
	const { listas, obtenerListas } = listasContext;
	const direccionesContext = useContext(DireccionContext);
	const { direcciones, obtenerDirecciones } = direccionesContext;

	useEffect(() => {
		usuarioAutenticado();
		obtenerDirecciones();
		obtenerListas();
	}, []);
	return (
		<div className="bg-red-50 flex justify-center flex-col items-center h-screen">
			<h2 className="text-5xl">Realizar Envio</h2>

			<div className="my-5 flex">
				<h3>Lista seleccionada</h3>
				<select>
					{listas.map((e) => (
						<option>LISTA 1 </option>
					))}
				</select>
			</div>
			<div className=" flex">
				<h3>Direccion de Envio</h3>
				<select>
					{listas.map((e) => (
						<option>LISTA 1 </option>
					))}
				</select>
			</div>
			<p className="my-5">Cliente: Juan Alverto Quispe</p>
			<p className="my-5">Numero celular: 999 999 999</p>
			<p className="my-5">Correo electronico: 999 999 999</p>
		</div>
	);
};

export default Pedido;
