import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardListas from "./Cards/CardListas";
import IconLista from "../atomos/icons/IconLista";
import IconUser from "../atomos/icons/IconUser";
import CardUser from "./Cards/CardUser";
import AuthContext from "../../context/autenticacion/authContext";
import CardCrearLista from "./Cards/CardCrearLista";
import ListaContext from "../../context/listas/listaContext";
import ElementoContext from "../../context/elementos/elementContext";
import Logo from "../atomos/Logo";

const Navbar = (props) => {
	const [opencarduser, setOpenCardUser] = useState(false);
	const [opencardlist, setOpenCardList] = useState(false);
	const [opennewlist, setOpenNewCardList] = useState(false);

	const authContext = useContext(AuthContext);
	const { usuario, token, cerrarSesion } = authContext;
	const listasContext = useContext(ListaContext);
	const {} = listasContext;
	const token_user = localStorage.getItem("token");
	const elementosContext = useContext(ElementoContext);
	const { elemento, crearElemento } = elementosContext;

	const openCardUser = (e) => {
		e.preventDefault();
		setOpenCardUser(!opencarduser);
		setOpenNewCardList(false);
		setOpenCardList(false);
	};
	const openCardList = (e) => {
		e.preventDefault();
		setOpenCardList(!opencardlist);
		setOpenNewCardList(false);
		setOpenCardUser(false);
	};
	const openNewList = (e) => {
		setOpenNewCardList(!opennewlist);
		setOpenCardList(false);
	};

	return (
		<div className="flex justify-between shadow-md py-4 px-24 fixed top w-full top-0 bg-white z-40">
			<div className="  absolute top-1 left-10 ">
				<Logo style={"w-16"} />
			</div>
			<div></div>
			<ul className=" self-center text-gray-700 flex text-xl bg-white">
				{/* <Link
					to={"/"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Hogar
				</Link> */}

				<div className=" px-5 py-1 relative  flex justify-center bg-white">
					{token_user && (
						<div onClick={openCardList} className="cursor-pointer relative">
							{!listasContext.listaseleccionada && (
								<div className="absolute -top-2 -right-2">
									<span className="flex justify-center items-center ">
										<span className="animate-ping absolute inline-flex h-3 w-3 bg-red-500 opacity-75 rounded-full"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-primario-red"></span>
									</span>
								</div>
							)}
							<IconLista />
						</div>
					)}

					{opencardlist && (
						<div className="absolute mt-12">
							<CardListas
								listas={props.listas}
								seleccionarLista={props.seleccionarLista}
								openNewList={openNewList}
								closeCard={setOpenCardList}
							/>
						</div>
					)}

					{opennewlist && (
						<div className="absolute mt-12">
							<CardCrearLista cerrar2={() => {}} cerrar={setOpenNewCardList} />
						</div>
					)}
					{elementosContext.elemento && (
						<div className="absolute mt-12">
							<CardCrearLista
								cerrar2={crearElemento}
								cerrar={setOpenNewCardList}
							/>
						</div>
					)}
				</div>

				<div className="relative px-5 py-1 flex justify-center">
					{token ? (
						<IconUser open={openCardUser} />
					) : (
						<Link to={"/login"}>Iniciar APP</Link>
					)}
					{opencarduser && (
						<div className="absolute mt-12">
							<CardUser
								usuario={usuario}
								cerrarSesion={cerrarSesion}
								abrirCard={setOpenNewCardList}
								cerrCard={setOpenCardUser}
							/>
						</div>
					)}
				</div>

				{/* {!token && (
					<div className="relative px-5 py-1 flex justify-center">
						<div className="absolute -top-0 -right-0">
							<span className="flex justify-center items-center ">
								<span className="animate-ping absolute inline-flex h-3 w-3 bg-red-500 opacity-75 rounded-full"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primario-red"></span>
							</span>
						</div>
						<Link to={"/registro"}>Registrarse</Link>
					</div>
				)} */}
			</ul>
		</div>
	);
};

export default Navbar;
