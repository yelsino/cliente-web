import { Fragment } from "react";
import SubTitulo from "../atomos/textos/SubTitulo";
import Resumen from "./Resumen";

const Lista = () => {
    return (
        <div className='border-blue-500 border p-10 w-full'>
            <SubTitulo
                texto={'Mi primera lista de compras'}
            />
            <div className='flex'>
                <div>
                    <div className='flex'>
                        <img>
                        </img>
                        <p>Lechuga Seda</p>
                        <span>S/ 1.50 </span>
                        <span> - </span>
                        <span> 1 kilo </span>
                        <span> + </span>
                    </div>
                </div>
                <div>
                    <Resumen />
                </div>
            </div>
        </div>

    );
}

export default Lista;