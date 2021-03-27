import SubTitulo from "../../atomos/textos/SubTitulo";
import Filtro from "../../moleculas/Filtro";
import ItemCancelado from "../../moleculas/Items/ItemCancelado";
import ItemPedido from "../../moleculas/Items/ItemPedido";

const Pedidos = () => {
	return (
		<div className="mx-20 my-16  w-full">
			<div className=" flex justify-center">
				<Filtro texto1={"todos"} texto2={"pedidos"} texto3={"cancelados"} />
			</div>
			<div className="mt-10">
				<SubTitulo texto={"Mis Pedidos"} />
			</div>

			<div className="mt-5">
				<ItemPedido
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
				<ItemPedido
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
				<ItemPedido
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
				<ItemPedido
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
			</div>

			{/* cancelados */}

			<div className="mt-10">
				<SubTitulo texto={"Cancelados"} />
			</div>

			<div className="mt-5">
				<ItemCancelado
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
				<ItemCancelado
					textoA={"Mis Vegetales"}
					textoB={"s/ 14.50"}
					textoC={"lunes 16 de noviembre 2021"}
				/>
			</div>
		</div>
	);
};

export default Pedidos;
