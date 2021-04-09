import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";
import Logo from "../atomos/Logo";
const Navbar2 = ({texto1,texto2,texto3,texto4}) => {

	const authContext = useContext(AuthContext)
	const { token } = authContext;

	return (
		<div className="flex justify-between  py-4 px-24 fixed  w-full top-0 bg-white z-50">
			<div className="  absolute top-1 left-10 ">
				<Logo style={"w-16"} />
			</div>
			<div></div>
			<ul className=" self-center text-gray-700 flex text-xl bg-white">
				<Link
					to={"/"}
					className="px-5 py-1 focus-within:text-green-600 relative hover:text-primario-blue"
				>
					{texto1}
				</Link>
				<Link
					to={"/tienda"}
					className="px-5 py-1 focus-within:text-green-600 relative hover:text-primario-blue"
				>
					{texto2}
				</Link>
				{!token && texto3 && (
					<Link
						to={"/login"}
						className="px-5 py-1 focus-within:text-green-600 relative hover:text-primario-blue"
					>
						{texto3}
					</Link>
				)}
				{!token && texto4 && (
					<Link
						to={"/registro"}
						className={`px-5 py-1 focus-within:text-green-600 relative hover:text-primario-blue`}
					>
						{texto4}
					</Link>
				)}
			</ul>
		</div>
	);
};

export default Navbar2;
