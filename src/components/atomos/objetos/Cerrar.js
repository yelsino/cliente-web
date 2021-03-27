import IconCerrar from "../icons/IconCerrar"

const Cerrar = (props) => {
    return ( 
        <button
            className="flex justify-center items-center  w-6 h-6 rounded-full bg-red-500 absolute top-6 right-6">
        
        <IconCerrar
            stylo={'text-white'}
        />
    </button>
     );
}
 
export default Cerrar;