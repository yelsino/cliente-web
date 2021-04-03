import BotonVerde from "../../atomos/botones/BotonVerde";

const CardProduct = ({ producto }) => {
	const {
		nombre,
		peso_minoreo,
		precio_minoreo,
		medida_minoreo,
		categoria,
		peso_mayoreo,
		medidada_mayoreo,
		precio_mayoreo,
		stock,
		cantidad_minima,
		imgURL,
	} = producto;

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
							S/ {precio_minoreo}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<div className="text-sm text-gray-600 font-light">
							{peso_minoreo} {medida_minoreo}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
