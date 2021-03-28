import BotonRojo from "../../atomos/botones/BotonRojo";
import SubTitulo from "../../atomos/textos/SubTitulo";
import ItemReclamo from "../../moleculas/Items/ItemReclamo";

const Reclamos = () => {
	return (
		<div className="mx-20 my-16  w-full">
			<div className="mt-10">
				<SubTitulo texto={"Mis Pedidos"} />
			</div>

			<div className="mt-5">
				<ItemReclamo
					textoA={"Me faltan productos"}
					textoB={"lunes 16 de agosto - 2021"}
				/>
				<ItemReclamo
					textoA={"Me Cobraron Pasaje"}
					textoB={"lunes 16 de agosto - 2021"}
				/>
				<ItemReclamo
					textoA={"Me faltan productos"}
					textoB={"lunes 16 de agosto - 2021"}
				/>
				<ItemReclamo
					textoA={"Compre y nunca me llegó"}
					textoB={"lunes 16 de agosto - 2021"}
				/>
			</div>

			<div className="absolute bottom-12 right-12">
				<BotonRojo texto={"Nuevo Reclamo"} />
			</div>
		</div>
	);
};

export default Reclamos;
