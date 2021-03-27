
import BtonBlanco from '../../atomos/botones/BotonBlanco';
import BotonRojo from '../../atomos/botones/BotonRojo';
import IconAlert from '../../atomos/icons/IconAlert'

const CAR = (props) => {
    return (
        <div className=' flex  w-96 p-4 rounded-lg shadow-md  bg-white'>
            <div className='w-12 h-12 bg-red-100 rounded-full flex justify-center items-center mx-4 '>
                <IconAlert />
            </div>
            <div className='text-gray-600 '>
                <h2 className='text-gray-900  text-lg font-semibold my-2'>Eliminar cuenta</h2>
                <p className='leading-5  prose prose-sm'>¿Estas seguro de eliminar tu cuenta? <br/> toda tu informacion sera borrado permanentemente de nuestros servidores.
                
                Esta accion no es irrevercible.
                </p>
                


                <div className='flex justify-center py-2'>
                    <BtonBlanco 
                        onBtn={props.cerrarModal}
                        texto={'Cancelar'} />
                    <span className='px-2'></span>
                    <BotonRojo texto={'Eliminar'} />
                </div>
            </div>

        </div>
    );
}

export default CAR;