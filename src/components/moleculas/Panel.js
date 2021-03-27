import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import IconTienda from '../mini/icons/IconTienda';

const Panel = (props) => {

    const history = useHistory()

    const regresar = () => {
        history.push('/')
    }
    return (
        <div className="py-4 shadow-sm  flex flex-col items-center border justify-between
         w-1/5 lg:w-1/5 md:w-2/5 sm:w-3/5
        ">


            <div className="list-none flex flex-col items-center">
                <div className="w-24 h-24 bg-green-200  my-8"></div>

                <Link
                    to={props.link1}
                    className='text-black text-2xl p-4 hover:bg-green-200 hover:text-green-700 cursor-pointer rounded-lg my-2 w-full'>
                    {props.texto1}
                </Link>
                <Link
                    to={props.link2}
                    className='text-black text-2xl p-4 hover:bg-green-200 hover:text-green-700 cursor-pointer rounded-lg my-2 w-full'>
                    {props.texto2}
                </Link>
                <Link
                    to={props.link3}
                    className='text-black text-2xl p-4 hover:bg-green-200 hover:text-green-700 cursor-pointer rounded-lg my-2 w-full'>
                    {props.texto3}
                </Link>
                <Link
                    to={props.link4}
                    className='text-black text-2xl p-4 hover:bg-green-200 hover:text-green-700 cursor-pointer rounded-lg my-2 w-full'>
                    {props.texto4}
                </Link>



            </div>

            <div onClick={regresar} className='self-center text-black text-2xl p-4 hover:text-green-700 cursor-pointer rounded-lg my-2'>
                <IconTienda />
            </div>
        </div>
    );
}

export default Panel;