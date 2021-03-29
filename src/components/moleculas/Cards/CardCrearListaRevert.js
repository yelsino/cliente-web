import { useContext, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import ListaContext from "../../../context/listas/listaContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import InputRdAzul from "../../atomos/inputs/InputRdAzul";
import alertaContext from "../../../context/alertas/alertaContext";

const CardCrearListRever = ({ cerrar }) => {
	const authContext = useContext(AuthContext);
	const { usuario } = authContext;
	const listaContext = useContext(ListaContext);
	const { crearLista } = listaContext;
	const alertasContext = useContext(alertaContext);
	const { alerta, mostrarAlerta } = alertasContext;
	const [nombre, setNombre] = useState("");
	const nuevaLista = () => {
		if (nombre.length < 3) {
			mostrarAlerta("Se requiere 3 caracteres minimos");
			return;
		}
		const lista = {
			nombre: nombre,
			creador: usuario._id,
			productos: [],
			cantidad_producto: [],
		};
		crearLista(lista);
		cerrar();
	};
	const onChange = (e) => {
		setNombre(e.target.value);
	};

	return (
		<div className=" flex flex-col relative justify-center items-center">
			<div
				className=" border rounded-lg border-primario-blue w-64 relative z-40  shadow-md 
            bg-white
            "
			>
				<div className=" pb-4 pt-4 px-2 flex justify-center flex-col">
					{!alerta ? (
						<p className="text-center my-4 text-primario-blue font-medium text-xl">
							Nueva Lista
						</p>
					) : (
						<p className="text-center text-primario-red">{alerta.msg}</p>
					)}
					<InputRdAzul
						handleChange={onChange}
						atributos={{
							id: "nombre",
							name: "nombre",
							value: nombre,
							type: "text",
							placeholder: "nombre de lista",
							txtmaximo: 25,
							txtminimo: 3,
						}}
					/>
				</div>

				<div className="flex justify-center items-end pb-4 ">
					<BotonAzul onBtn={nuevaLista} texto={"CREAR"} />
				</div>
				{/* <p>{nombre}</p> */}
			</div>
			<div className="w-16 h-16  rounded-lg transform rotate-45 self-center absolute z-10 bottom-0 shadow-md border border-primario-blue"></div>
		</div>
	);
};

export default CardCrearListRever;
