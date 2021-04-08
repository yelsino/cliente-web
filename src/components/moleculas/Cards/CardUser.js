import OpcionItem from "../../atomos/objetos/OpcionItem";
import TextoAzul from "../../atomos/textos/Azul";
import { useHistory } from "react-router-dom";

const CardUser = ({ usuario, cerrarSesion, abrirCard, cerrCard }) => {
	const history = useHistory();

	const Logout = () => {
		cerrarSesion();
		window.location.replace("https://negocios-carlos.000webhostapp.com/");
		// window.location.replace("http://localhost:3000/tienda");
			// window.location.replace(`${process.env.URL_PRODUCCION}/tienda`);
	};

	return (
		<div className=" flex flex-col relative justify-center items-center">
			<div className="w-16 h-16  rounded-lg transform rotate-45 self-center absolute z-10 -top-px shadow-md border border-blue-500"></div>

			<div
				className="border rounded-lg border-primario-blue w-64 relative z-40 shadow-md 
            bg-white flex flex-col justify-between
            "
			>
				<div className="flex justify-center py-6 font-bold items-center ">
					<TextoAzul
						texto={
							usuario.username.charAt(0).toUpperCase() +
							usuario.username.split(" ")[0].slice(1)
						}
					/>
				</div>

				<div className="pb-4 ">
					<button
						onClick={() => {
							cerrCard(false);
							abrirCard(true);
						}}
						className="block hover:bg-primario-blue hover:text-white text-blue-500 border border-primario-blue font-bold text-center cursor-pointer py-2 border-b-0 border-r-0 border-l-0 w-full "
					>
						Crear Lista
					</button>
					<OpcionItem texto={"Mi cuenta"} url={"/admin"} />
					<div
						className=" border-b border-blue-600 text-red-500"
						onClick={Logout}
					>
						<button
							onClick={Logout}
							className="block hover:bg-primario-blue hover:text-white text-blue-500 border border-primario-blue font-bold text-center cursor-pointer py-2 border-b-0 border-r-0 border-l-0 w-full"
						>
							Cerrar Sesion
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardUser;
