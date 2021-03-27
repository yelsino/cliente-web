const BotonVerde = (props) => {
    return ( 
        <button 
            onClick={props.onBtn}    
            className="bg-green-200 p-2 px-4 text-green-700 rounded-md font-bold hover:bg-green-700 hover:text-green-200"
        >{props.texto}</button>
     );
}
 
export default BotonVerde;