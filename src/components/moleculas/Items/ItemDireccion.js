import { useState } from "react";
import CardPuntaRevert from "../../moleculas/Cards/CardPuntaRevert";

import IconOpciones from "../../atomos/icons/IconOpciones";

const ItemDireccion = ({ atributos, getDireccion, id, setDireccion }) => {
	const [card, openCard] = useState(false);
	return (
		<div className="w-full flex items-center pl-3 pr-10 py-2 justify-between">
			<p>Direccion: {atributos.texto}</p>
			<div className="cursor-pointer relative">
				<IconOpciones
					onIcon={() => {
						getDireccion(id);
						openCard(!card);
					}}
				/>
				{card && (
					<div className="absolute -top-40 -right-12">
						<CardPuntaRevert
							setDireccion={setDireccion}
							cerrarCard={openCard}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDireccion;
