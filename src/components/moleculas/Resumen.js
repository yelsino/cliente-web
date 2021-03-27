import React from 'react';
import BotonVerde from '../atomos/botones/BotonVerde';

const Resumen = () => {
    return ( 
        <div className="border border-gray-600 px-8 py-8 mt-10">
            <div className="">
                <h3 className="text-center py-2 border-b mb-5">Resumen de Pedido</h3>
                <div className="grid grid-cols-2 text-gray-600">
                    <span className="py-2 text-sm">Sub Total</span>
                    <span className="py-2 text-sm text-red-500">S/ 125.00</span>
                    <span className="py-2 text-sm">Envio</span>
                    <span className="py-2 text-sm">Envio Gratis</span>
                    <span className="py-2 text-sm">Total</span>
                    <span className="py-2 text-sm text-red-500 font-semibold">S/ 125.00</span>
                </div>
            </div>

            <div className="">
                <h3 className="text-center py-2 border-b mb-5">Resumen de Pedido</h3>
                <div className="grid grid-cols-2 text-gray-600">
                    <span className="py-2 text-sm" >Cliente</span>
                    <span className="py-2 text-sm" >Yelsin Caso</span>
                    <span className="py-2 text-sm" >Direccion</span>
                    <span className="py-2  text-sm" >Jr Augusto B. leguia 156</span>
                    <span className="py-2 text-sm" >Movil</span>
                    <span className="py-2 text-sm" >939 616 524</span>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <BotonVerde
                    texto={'procesar pedido'}
                />
            </div>

        </div>
     );
}
 
export default Resumen;