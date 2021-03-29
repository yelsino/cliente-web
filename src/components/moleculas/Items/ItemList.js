import { Link, useHistory } from "react-router-dom";
import IconDelete from "../../atomos/icons/IconDelete";
import TextoAzul from "../../atomos/textos/Azul";

const ItemList = (props) => {
	const history = useHistory();
	return (
		<div className="flex items-center ">
			<div
				className="w-full bg-white shadow-md rounded-lg p-4 my-1 flex justify-between px-20 hover:bg-primario-blue-claro cursor-pointer mr-4 border group"
				onClick={() => {}}
			>
				<div className="absolute top-2 "></div>
				<TextoAzul texto={props.textoA} />
				<div className="flex font-normal">
					<TextoAzul texto={props.textoB + " = "} />
					<TextoAzul texto={props.textoC + " S/"} />
				</div>

				<Link
					onClick={() => {
						props.onItem(props.id);
					}}
					to={`/admin/listas/${props.id}`}
					className="bg-primario-blue-claro text-primario-blue px-3 py-1 rounded-lg font-medium hover:text-white hover:bg-primario-blue border group-hover:border-primario-blue "
				>
					ver
				</Link>
				<span
					onClick={() => {
						props.onItem(props.id);
						history.push("/tienda");
						history.go(0);
					}}
					className="bg-primario-blue-claro text-primario-blue px-3 py-1 rounded-lg font-medium hover:text-white hover:bg-primario-blue border group-hover:border-primario-blue "
				>
					editar
				</span>
			</div>
			<IconDelete
				onIcon={() => {
					props.onItem(props.id);
					props.abrirCard(true);
				}}
			/>
		</div>
	);
};

export default ItemList;
