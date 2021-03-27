import { Link } from "react-router-dom";

const OpcionItem = (props) => {
    return ( 
        <Link 
            to={props.url} 
            className='block hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 font-bold text-center cursor-pointer py-2 border-b-0 border-r-0 border-l-0 '>
            {props.texto}
        </Link>
     );
}
 
export default OpcionItem;