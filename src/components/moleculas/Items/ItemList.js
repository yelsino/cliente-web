import TextoAzul from "../../mini/textos/Azul";

const ItemList = (props) => {
    return (
        <div className="relative  hover:bg-green-200 flex justify-between py-4  rounded-md px-12 bg-white shadow-lg text-xl border-t border-gray-200 my-2 cursor-pointer">
            <div className='absolute top-2'></div>
            <TextoAzul texto={props.textoA} />
            <TextoAzul texto={props.textoB}/>
        </div>
    );
}

export default ItemList;