import { useContext, useState } from "react";
import ListaContext from "../../../context/listas/listaContext";
import BotonAzul from "../../atomos/botones/BotonAzul";
import SubTitulo from "../../atomos/textos/SubTitulo";
import CardAlerta from "../../moleculas/Cards/CardAlerta";
import CardCrearListRever from "../../moleculas/Cards/CardCrearListaRevert";
import ItemList from "../../moleculas/Items/ItemList";
import Modal from "../../plantillas/Modal";

const Listas = () => {
	const listasContext = useContext(ListaContext);
	const {
		listas,
		listaseleccionada,
		listaActual,
		eliminarLista,
	} = listasContext;
	const [card_alerta, openCardAlerta] = useState(false);
	const [activar, setActivar] = useState(false);
	const openCardNewList = () => {
		setActivar(!activar);
	};

	return (
		<div className=" w-full">
			<SubTitulo texto={"Mis Listas"} />

			<div className="mt-10">
				{listas.map((e) => (
					<ItemList
						key={e._id}
						id={e._id}
						abrirCard={openCardAlerta}
						onItem={listaActual}
						lista={e}
						textoA={e.nombre}
						textoB={e.productos.length + " productos"}
						textoC={e.cantidad_producto
							.reduce(
								(acc, { cantidad_producto, id }) =>
									acc +
									cantidad_producto *
										e.productos.find((e) => e._id === id).precio_minoreo,
								0
							)
							.toFixed(1)}
					/>
				))}
			</div>

			<div className="absolute bottom-12 right-16">
				<BotonAzul
					texto={"NUEVA LISTA"}
					style={"p-4 px-8"}
					onBtn={openCardNewList}
				/>
			</div>

			{activar && (
				<div className="absolute bottom-32 right-4 ">
					<CardCrearListRever cerrar={setActivar} />
				</div>
			)}
			{card_alerta && (
				<Modal style={"bg-gray-700 opacity-75 "}>
					<CardAlerta
						accionCard={() => {
							localStorage.removeItem("lista_actual");
							eliminarLista(listaseleccionada._id);
							openCardAlerta(!card_alerta);
						}}
						cerrarCard={openCardAlerta}
						atributos={{
							titulo: "Eliminar Lista",
							accion: "eliminar",
							cancelar: "cancelar",
						}}
					>
						<p>
							¿Estas seguro de eliminar esta lista? <br />
							Esta lista sera eliminado de la base de datos, <br /> esta accion
							es irreversible
						</p>
					</CardAlerta>
				</Modal>
			)}
		</div>
	);
};

export default Listas;
