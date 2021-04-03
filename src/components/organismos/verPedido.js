import IconEntregado from "../atomos/icons/IconEntregado";
import IconEnviado from "../atomos/icons/IconEnviado";
import IconPreparado from "../atomos/icons/IconPreparado";
import IconRecibido from "../atomos/icons/IconRecibido";
import moment from "moment";
import "moment/locale/es";

const VerPedido = () => {
	const JSON_pedido_actual = localStorage.getItem("pedido_seleccionado");
	const pedido_actual = JSON.parse(JSON_pedido_actual);

	const {
		_id,
		createdAt,
		copia_pedido,
		codigo_pedido,
		orden_pedido,
		creador,
		preparado,
		enviado,
		entregado,
		rechazado,
	} = pedido_actual;

	const { datos_lista, pago_total } = copia_pedido[0];

	const { nombre: nombre_lista } = datos_lista;

	const { datos_direccion } = copia_pedido[2];
	const { nombre: nombre_direccion, referencia } = datos_direccion;
	return (
		<div>
			{/* seguimiento */}
			<div className=" text-center ">
				<p className="text-primario-blue font-medium mb-4 text-2xl">
					{nombre_lista}
				</p>
				<div className="grid grid-cols-4 text-center text-lg">
					<div className="rounded-lg  py-2 flex flex-col items-center ">
						<span className=" bg-primario-blue h-0.5 w-full mb-2"></span>
						<span className="text-primario-blue font-medium">Recibido</span>
						<IconRecibido style={"text-primario-blue"} />
					</div>
					<div className="rounded-lg  py-2 flex flex-col items-center">
						{preparado && (
							<span className=" bg-primario-blue h-0.5 w-full mb-2"></span>
						)}
						<span>Preparado</span>
						<IconPreparado style={`${preparado ? "text-primario-blue" : ""}`} />
					</div>
					<div className="rounded-lg  py-2 flex flex-col items-center">
						{enviado && (
							<span className=" bg-primario-blue h-0.5 w-full mb-2"></span>
						)}
						<span>Enviado</span>
						<IconEnviado style={`${enviado ? "text-primario-blue" : ""}`} />
					</div>
					<div className="rounded-lg  py-2 flex flex-col items-center">
						{entregado && (
							<span className=" bg-primario-blue h-0.5 w-full mb-2"></span>
						)}
						<span>Entregado</span>
						<IconEntregado style={`${entregado ? "text-primario-blue" : ""}`} />
					</div>
				</div>
			</div>
			<div className="text-xl grid gap-10 mt-10  justify-center text-center">
				<div className="border-4 border-primario-blue rounded-3xl px-8 p-4  text-5xl ">
					{codigo_pedido}
				</div>
				<p>direccion: {nombre_direccion}</p>
				<p>referencia: {referencia}</p>
				{copia_pedido[1].abono > 0 && (
					<p>abono al pedido: {copia_pedido[1].abono}</p>
				)}
			</div>{" "}
			<p className="text-gray-500  font-normal text-center mt-5 text-lg">
				{moment(createdAt).format("LLLL")}
			</p>
		</div>
	);
};

export default VerPedido;
