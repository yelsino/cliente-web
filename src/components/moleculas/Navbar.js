import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardListas from "./Cards/CardListas";
import IconLista from "../atomos/icons/IconLista";
import IconUser from "../atomos/icons/IconUser";
import CardUser from "./Cards/CardUser";
import AuthContext from "../../context/autenticacion/authContext";
import CardCrearLista from "./Cards/CardCrearLista";
import ListaContext from "../../context/listas/listaContext";

const Navbar = (props) => {
	const [opencarduser, setOpenCardUser] = useState(false);
	const [opencardlist, setOpenCardList] = useState(false);
	const [opennewlist, setOpenNewCardList] = useState(false);

	const authContext = useContext(AuthContext);
	const { usuario, token, cerrarSesion } = authContext;
	const listasContext = useContext(ListaContext);
	const {
		listaseleccionada,
		guardarCambiosEnLista,
		obtenerListas,
	} = listasContext;

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
			<div className="self-center">
				<img src="" alt="" className="w-12" />
			</div>
			<ul className=" self-center text-gray-700 flex text-xl bg-white">
				{token == 2 && (
					<Link
						to={"/admin"}
						className="px-5 py-1 focus-within:text-green-600 relative"
					>
						Admin
					</Link>
				)}

				<Link
					to={"/home"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Inicio
				</Link>
				<Link
					to={"/"}
					className="px-5 py-1 focus-within:text-green-600 relative"
				>
					Tienda
				</Link>

				<div className=" px-5 py-1 relative  flex justify-center bg-white">
					<div onClick={openCardList} className="cursor-pointer">
						<IconLista />
					</div>

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
							<CardCrearLista cerrar={setOpenNewCardList} />
						</div>
					)}
				</div>

				<div className="relative px-5 py-1 flex justify-center">
					{token ? (
						<IconUser open={openCardUser} />
					) : (
						<Link to={"/"}>Iniciar</Link>
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
			</ul>
		</div>
	);
};

export default Navbar;
