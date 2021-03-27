import TextoAzul from "../../atomos/textos/Azul";
import MiniPlomo from "../../atomos/textos/MiniPlomo";

const ItemPedido = (props) => {
    return (
        <div className="relative  hover:bg-blue-200 flex justify-between py-4 pt-6 rounded-md px-12 bg-white shadow-lg text-xl border-t border-gray-200 my-2 cursor-pointer">
            <div className='absolute top-2'>
                <MiniPlomo texto={props.textoC} />
            </div>
            <TextoAzul texto={props.textoA} />
            <TextoAzul texto={props.textoB}/>
        </div>
    );
}

export default ItemPedido;