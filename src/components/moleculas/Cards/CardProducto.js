import BotonVerde from "../../atomos/botones/BotonVerde";

const CardProduct = (props) => {
	const {
		id,
		imgURL,
		medida,
		nombre,
		peso,
		precio,
		addProducto,
		obtenerProductoSeleccionado,
	} = props;

	return (
		<div className="m-2 col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
			<div className=" rounded-lg bg-primario-green  w-52  flex justify-center">
				<img className=" h-28 object-cover" src={imgURL} alt="" />
			</div>
			<div className="bg-white shadow-lg rounded-lg w-60 h-24">
				<div className="py-5 px-5">
					<div className="flex justify-between">
						<p className="font-bold text-gray-800 text-lg  "> {nombre} </p>

						<span className="text-xl text-red-500 font-semibold">
							S/ {precio}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<div className="text-sm text-gray-600 font-light">
							{peso} {medida}
						</div>

						<BotonVerde
							onBtn={() => {
								addProducto(id);
							}}
							texto={"agregar"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
