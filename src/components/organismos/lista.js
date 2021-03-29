import BotonAzul from "../atomos/botones/BotonAzul";
import SubTitulo from "../atomos/textos/SubTitulo";

const Lista = () => {
	const JSON_lista_actual = localStorage.getItem("lista_actual");
	const lista_actual = JSON.parse(JSON_lista_actual);
	const { nombre, productos, cantidad_producto } = lista_actual;

	return (
		<div className=" mb-36">
			<SubTitulo texto={nombre} style={"text-center"} />

			{productos.length > 0 ? (
				<div className="flex flex-col justify-center mt-4 w-full p-4">
					{productos.map((e) => (
						<div key={e._id} className=" w-full  bg-white mb-1 p-4 rounded-lg flex justify-between items-center border shadow-md hover:bg-primario-blue-claro">
							<img src={e.imgURL} className="w-10" />
							<p className="w-36 ">
								{" "}
								<span className="text-primario-blue">
									x{" "}
									<span>
										{
											cantidad_producto.find(
												(cantidad) => cantidad.id === e._id
											).cantidad_producto
										}
									</span>
								</span>{" "}
								<span className="font-bold">{e.nombre}</span>{" "}
							</p>{" "}
							{/*  */}
							{/* PRECIOS */}
							{/*  */}
							<span>
								{e.peso_minoreo} {e.medida_minoreo === "kilo" ? "kg " : "ud. "}{" "}
							</span>
							<span>S/ {e.precio_minoreo}</span>
							<span className="text-primario-blue font-bold">
								S/{" "}
								{(
									cantidad_producto.find((cantidad) => cantidad.id === e._id)
										.cantidad_producto * e.precio_minoreo
								).toFixed(1)}
							</span>
						</div>
					))}
				</div>
			) : (
				<p className="text-primario-blue text-center marginporciento20 text-lg">
					Lista Vacia, <br /> añada productos
				</p>
			)}

			<div className="fixed bottom-10 right-10  z-0   py-4 flex flex-col items-center ">
				<span className="bg-primario-green p-2 px-6 rounded-lg text-lg font-semibold">
					{lista_actual.cantidad_producto
						.reduce(
							(acc, { cantidad_producto, id }) =>
								acc +
								cantidad_producto *
									lista_actual.productos.find((e) => e._id === id)
										.precio_minoreo,
							0
						)
						.toFixed(1)}{" "}
					{" S/"}
				</span>
				<BotonAzul
					onBtn={() => {}}
					texto={"Hacer Pedido"}
					style={"shadow-xl text-xl py-4 "}
				/>
			</div>
		</div>
	);
};

export default Lista;
