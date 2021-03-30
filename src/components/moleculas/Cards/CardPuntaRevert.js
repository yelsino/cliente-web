import { useContext } from "react";
import DireccionContext from "../../../context/direcciones/direccionContext";
import ElementoContext from "../../../context/elementos/elementContext";

const CardPuntaRevert = ({ cerrarCard, setDireccion }) => {
	const elementosContext = useContext(ElementoContext);
	const { crearElemento, eliminarElemento, editarElemento } = elementosContext;

	const direccionesContext = useContext(DireccionContext);
	const { direccionactual } = direccionesContext;

	const json_usuario = localStorage.getItem("usuario");
	const usuario_ls = JSON.parse(json_usuario);

	return (
		<div className=" flex flex-col relative w-32 h-32 justify-center items-center ">
			<div className=" bg-white w-16 h-16  rounded-lg transform rotate-45  absolute z-40 bottom-0 shadow-md border border-blue-500 "></div>

			{/* contenido */}
			<div className="bg-white border rounded-lg border-blue-500 w-44 h-36 relative z-50  shadow-md py-6 px-8 flex  flex-col justify-around">
				<div
					onClick={() => {
						crearElemento();
						cerrarCard(false);
					}}
					className="cursor-pointer"
				>
					+ <span className="text-blue-500"> añadir</span>
				</div>

				{/*  */}
				<div
					onClick={() => {
						cerrarCard(false);
					}}
					className="cursor-pointer"
				>
					x{" "}
					<span
						onClick={() => {
							cerrarCard(false);
							eliminarElemento();
						}}
						className="text-blue-500"
					>
						{" "}
						eliminar
					</span>
				</div>
				{/*  */}
				<div
					onClick={() => {
						cerrarCard(false);
						setDireccion({
							nombre: direccionactual.nombre,
							referencia: direccionactual.referencia,
							creador: usuario_ls._id,
						});
						editarElemento();
					}}
				>
					x <span className="text-blue-500"> editar</span>
				</div>
			</div>
		</div>
	);
};

export default CardPuntaRevert;
