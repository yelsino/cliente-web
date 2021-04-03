import moment from "moment";
import "moment/locale/es";
import { Link } from "react-router-dom";

const ItemPedido = ({ pedido, stylo, itemAccion }) => {
	const {
		_id,
		createdAt,
		copia_pedido,
		codigo_pedido,
		orden_pedido,
		creador,
	} = pedido;
	const { datos_lista } = copia_pedido[0];
	return (
		<Link onClick={itemAccion} to={`/admin/pedidos/${_id}`}>
			{" "}
			<div
				className={` bg-primario-gray 
     py-6 shadow-md flex justify-between rounded-md  text-xl   mb-4 cursor-pointer relative px-5 max-w-3xl font-medium ${
				stylo && stylo
			}
    `}
			>
				<div className="flex flex-col sm:flex-row justify-between w-full">
					<span className="mt-2">
						{datos_lista.nombre.charAt(0).toUpperCase().concat(
							datos_lista.nombre
								// @ts-ignore
								.substring(1, datos_lista.nombre.length)
								.toLowerCase()
						)}
					</span>
					<span className="text-3xl text-gray-400"> - </span>
					<span className="mt-2">
						{creador.username
							.charAt(0)
							.toUpperCase()
							.concat(
								creador.username
									.substring(1, creador.username.length)
									.toLowerCase()
							)}
					</span>
				</div>

				<p className=" absolute top-2 right-0 flex justify-between px-6 w-full ">
					{orden_pedido <= 99 && (
						<span className="text-gray-500 font-semibold">
							{orden_pedido <= 9
								? "N° 00" + orden_pedido
								: "N° 0" + orden_pedido}
						</span>
					)}
					<span className="text-primario-blue">cod: {codigo_pedido}</span>
					{orden_pedido >= 100 && <span>{"N° " + orden_pedido}</span>}
					<span className="text-gray-500 text-sm font-normal">
						{moment(createdAt).format("LLLL")}
					</span>
				</p>
			</div>
		</Link>
	);
};

export default ItemPedido;
