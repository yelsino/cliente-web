import { useState } from "react";
import BotonAzul from "../../atomos/botones/BotonAzul";
import SubTitulo from "../../atomos/textos/SubTitulo";
import CardNewRevert from "../../moleculas/Cards/CardNewRevert";
import ItemList from "../../moleculas/Items/ItemList";

const Listas = () => {
	const [activar, setActivar] = useState(false);
	const openCardNewList = () => {
		setActivar(!activar);
	};

	return (
		<div className="m-20  w-full">
			<SubTitulo texto={"Mis Listas"} />

			<div className="mt-10">
				<ItemList textoA={"Mis Vegetales"} textoB={"s/ 125.50"} />
				<ItemList textoA={"Mis Vegetales"} textoB={"s/ 125.50"} />
				<ItemList textoA={"Mis Vegetales"} textoB={"s/ 125.50"} />
				<ItemList textoA={"Mis Vegetales"} textoB={"s/ 125.50"} />
				<ItemList textoA={"Mis Vegetales"} textoB={"s/ 125.50"} />
			</div>

			<div className="absolute bottom-12 right-12">
				<BotonAzul texto={"NUEVA LISTA"} onBtn={openCardNewList} />
			</div>

			{activar && (
				<div className="absolute bottom-28 right-16">
					<CardNewRevert />
				</div>
			)}
		</div>
	);
};

export default Listas;
