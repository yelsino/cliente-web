import React from 'react';
import { FaUserCog } from "react-icons/fa";
import {HiOutlineClipboardList} from 'react-icons/hi'
import {FcTodoList} from 'react-icons/fc'
import {IoIosSend} from 'react-icons/io'
import SubTitulo from '../../atomos/textos/SubTitulo';

 const IconCrearUser = () => {
	return (
		<div className="font-bold text-4xl text-blue-500 mx-3">
			<FaUserCog />
		</div>
	);
};



 const IconCrearLista = () => {
	return (
		<div className="font-bold text-4xl text-blue-500 mx-3">
			<HiOutlineClipboardList />
		</div>
	);
};


 const IconAddProductos = () => {
	return (
		<div className="font-bold text-4xl text-blue-500 mx-3">
			<FcTodoList />
		</div>
	);
};

 const IconPedirEnvio = () => {
	return (
		<div className="font-bold text-4xl text-blue-500 mx-3">
			<IoIosSend />
		</div>
	);
};


const ComoComprar = () => {

	return (
		<div className=" relative z-40 justify-center items-center flex ">
			<div className=" border-r-4 border-primario-green">
				<div className="text-xl">
					<SubTitulo texto={"¿Como Comprar?"} style={"text-center"} />
					<div className="flex my-6 ">
						<IconCrearUser />
						<p>REGISTRESE</p>
					</div>
					<div className="flex my-6">
						<IconCrearLista />
						<p>CREA UNA LISTA</p>
					</div>
					<div className="flex my-6">
						<IconAddProductos />
						<p>AÑADA PRODUCTOS</p>
					</div>
					<div className="flex my-6">
						<IconPedirEnvio />
						<p>REALIZA UN PEDIDO</p>
					</div>
				</div>
				<div className="text-gray-700 text-center leading-8 tracking-wider px-6">
					<p>y listo nosotros nos encargaremos de todo el proceso</p>
					<p>le avisaremos cuando su pedido este listo</p>
				</div>
			</div>
			<div>
				<div className="w-96 ml-10 text-center leading-6 tracking-wider text-gray-700 mb-5">
					<SubTitulo texto={"¿Sobre el pago?"} style={"text-center mb-3"} />
					<p>
						Negocios carlos acepta pagos contra entrega para ganarnos la
						confianza de nuestros clientes, usted paga al recibir su pedido
						conforme como lo solicito
					</p>
				</div>
				<div className="w-96 ml-10 text-center leading-6 tracking-wider text-gray-700">
					<SubTitulo texto={"¿Sobre las listas?"} style={"text-center mb-3"} />
					<p>
						Sabemos que no cocina la misma comida todos los dias, y añadir y quitar productos de un solo carrito de compras le quita tiempo es por ello que usted puede crear multiples listas y personalizarlos a su necesidad. 
					</p>
				</div>

			</div>
		</div>
	);
}
 
export default ComoComprar;