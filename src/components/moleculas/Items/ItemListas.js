import { useContext, useState } from "react";
import ListaContext from "../../../context/listas/listaContext";

const ItemsList = ({ lista, closeCard }) => {
	const listasContext = useContext(ListaContext);
	const { listaActual } = listasContext;

	const [pintura, setPintura] = useState("text-blue-500");

	const seleccionarLista = () => {
		listaActual(lista._id);
		closeCard(false);
	};

	return (
		<button
			onClick={seleccionarLista}
			className={`w-full block hover:bg-blue-500 hover:text-white  border border-blue-500 font-medium text-center cursor-pointer py-2 border-b-0 border-r-0 border-l-0  ${pintura}`}
		>
			<p className="text-left ml-4">{lista.nombre.toLowerCase()}</p>
		</button>
	);
};

export default ItemsList;
