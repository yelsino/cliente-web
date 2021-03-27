import BotonAzul from "../../atomos/botones/BotonAzul";
import TextoAzul from "../../atomos/textos/Azul";
import ItemsList from "../Items/ItemListas";

const CardListas = (props) => {
	return (
		<div className=" flex flex-col relative justify-center items-center">
			<div className="w-16 h-16  rounded-lg transform rotate-45 self-center absolute z-10 -top-px shadow-md border border-blue-500"></div>

			<div
				className=" border rounded-lg border-blue-500 w-64 relative z-40  shadow-md 
            bg-white
            "
			>
				<div className="flex justify-center py-6 font-medium items-center ">
					<TextoAzul texto={"Mis listas"} />
				</div>

				<div className=" pb-4">
					{props.listas.map((lista) => (
						<ItemsList
							key={lista._id}
							lista={lista}
							closeCard={props.closeCard}
						/>
					))}
					<span className="w-full border-b border-blue-500 block"></span>
				</div>

				<div
					className="flex justify-center items-end pb-4 "
					onClick={props.openNewList}
				>
					<BotonAzul onBtn={props.openNewList} texto={"NUEVO"} />
				</div>
			</div>
		</div>
	);
};

export default CardListas;
