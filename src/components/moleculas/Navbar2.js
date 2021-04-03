import { Link } from "react-router-dom";
import Logo from "../atomos/Logo";
const Navbar2 = (props) => {
	return (
		<div className="flex justify-between shadow-md py-4 px-24 fixed top w-full top-0 bg-white z-40">
			<div className="  absolute top-1 left-10 ">
				<Logo style={"w-16"} />
			</div>
			<div></div>
			<ul className=" self-center text-gray-700 flex text-xl bg-white">
				<Link
					to={"/"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Hogar
				</Link>
				<Link
					to={"/tienda"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Tienda
				</Link>
				<Link
					to={"/login"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Iniciar
				</Link>
				<Link
					to={"/registro"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Registrarse
				</Link>
			</ul>
		</div>
	);
};

export default Navbar2;
