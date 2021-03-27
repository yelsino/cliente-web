import TextoAzul from "../../atomos/textos/Azul";
import TextoPlomo from "../../atomos/textos/TextoPlomo";

const ItemReclamo = (props) => {
	return (
		<div className="relative  hover:bg-blue-200 flex justify-between py-4 rounded-md px-12 bg-white shadow-lg text-xl border-t border-gray-200 my-2 cursor-pointer">
			<TextoAzul texto={props.textoA} />
			<TextoPlomo texto={props.textoB} />
		</div>
	);
};

export default ItemReclamo;
