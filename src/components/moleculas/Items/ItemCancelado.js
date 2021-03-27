import MiniPlomo from "../../mini/textos/MiniPlomo";
import TextoRojo from "../../mini/textos/Rojo";

const ItemCancelado = (props) => {
    return (
        <div className="relative  hover:bg-red-200 flex justify-between py-4 pt-6 rounded-md px-12 bg-white shadow-lg text-xl border-t border-gray-200 my-2 cursor-pointer">
            <div className='absolute top-2'>
                <MiniPlomo texto={props.textoC} />
            </div>
            <TextoRojo texto={props.textoA} />
            <TextoRojo texto={props.textoB}/>
        </div>
    );
}

export default ItemCancelado;