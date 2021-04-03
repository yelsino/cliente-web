import { useContext, useState } from "react";
import PedidoContext from "../../../context/pedidos/pedidoContext";
import SubTitulo from "../../atomos/textos/SubTitulo";
import Filtro from "../../moleculas/Filtro";
import ItemCancelado from "../../moleculas/Items/ItemCancelado";
import ItemPedido from "../../moleculas/Items/ItemPedido";

const Pedidos = () => {
	const pedidosContext = useContext(PedidoContext);
	const { pedidos, seleccionarPedido } = pedidosContext;

	const [cantidad, setCantidad] = useState({
		pedidos_filtro: 1,
		cancelados_filtro: 0,
	});

	const { pedidos_filtro, cancelados_filtro } = cantidad;

	const obtenerPedidosFiltro = () => {
		setCantidad({
			...cantidad,
			pedidos_filtro: 1,
			cancelados_filtro: 0,
		});
	};

	const obtenerPedidosCancelados = () => {
		setCantidad({
			...cantidad,
			pedidos_filtro: 0,
			cancelados_filtro: 1,
		});
	};

	return (
		<div className="  w-full">
			<div className=" flex justify-center">
				<Filtro
					texto1={"Pedidos"}
					texto2={"Cancelados"}
					texto3={""}
					texto4={""}
					texto5={""}
					filtro1={obtenerPedidosFiltro}
					filtro2={obtenerPedidosCancelados}
					filtro3={() => {}}
					filtro4={() => {}}
					filtro5={() => {}}
				/>
			</div>
			<div className="mt-10">
				<SubTitulo texto={"Mis Pedidos"} />
			</div>

			{pedidos_filtro > 0 && (
				<div className="mt-5">
					{pedidos.map((e) => (
						<ItemPedido
							itemAccion={() => {
								seleccionarPedido(e._id);
							}}
							stylo={
								"text-green-500 hover:bg-primario-green hover:text-primario-green-pure"
							}
							key={e._id}
							pedido={e}
						/>
					))}
				</div>
			)}

			{/* cancelados */}

			<div className="mt-10">
				<SubTitulo texto={"Cancelados"} />
			</div>

			{cancelados_filtro > 0 && (
				<div className="my-4">
					<SubTitulo texto={"Pedidos Cancelados"} />
					{pedidos.map((e) => {
						if (e.rechazado === true)
							return (
								<ItemPedido
									stylo={
										"text-green-500 hover:bg-primario-green hover:text-primario-green-pure"
									}
									key={e._id}
									pedido={e}
								/>
							);
					})}
				</div>
			)}
		</div>
	);
};

export default Pedidos;
