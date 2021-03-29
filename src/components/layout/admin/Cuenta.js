import { useState } from "react";
import BotonAzul from "../../atomos/botones/BotonAzul";
import InputCuadrado from "../../atomos/inputs/InputCuadrado";
import InputDireccion from "../../atomos/inputs/InputDireccion";
import InputPago from "../../atomos/inputs/InputPago";
import MiniPlomo from "../../atomos/textos/MiniPlomo";
import SubTitulo from "../../atomos/textos/SubTitulo";
import TextoRojo from "../../atomos/textos/TextoRojo";
import CardModal from "../../moleculas/Cards/CardModal";

const Cuenta = () => {
	const authContext = useContext(AuthContext);
	const { usuario, token, cerrarSesion } = authContext;
	const listasContext = useContext(ListaContext);

	const [active, setActive] = useState(false);

	const openModal = () => {
		setActive(!active);
	};

	const cerrarModal = () => {
		setActive(false);
	};

	return (
		<div className="  w-full">
			<div className="">
				<SubTitulo texto={"Mi Cuenta"} />
			</div>

			<div className="mt-5 grid grid-cols-2 gap-5">
				<div>
					<MiniPlomo texto="nombres" />
					<InputCuadrado />
				</div>
				<div>
					<MiniPlomo texto="apellidos" />
					<InputCuadrado />
				</div>
				<div>
					<MiniPlomo texto="celular" />
					<InputCuadrado />
				</div>
				<div>
					<MiniPlomo texto="correo" />
					<InputCuadrado />
				</div>

				<p className="p-0 mt-4">metodos de pago</p>
				<div className="col-span-full grid grid-cols-1 gap-5">
					<InputPago />
					<InputPago />
				</div>

				<p className="p-0 mt-4 col-span-full">direcciones</p>
				<div className="col-span-full grid grid-cols-2 gap-5">
					<div className="col-span-full">
						<InputDireccion />
					</div>
					<InputCuadrado placeholder={"referencia"} />
					<InputCuadrado placeholder={"barrio"} />
				</div>
			</div>

			<div className=" flex justify-between py-10">
				<div onClick={openModal}>
					<TextoRojo texto={"eliminar cuenta"} />
				</div>

				<BotonAzul texto={"Guardar Cambios"} />
			</div>
			{active && <CardModal onBtn={cerrarModal} />}
		</div>
	);
};

export default Cuenta;
