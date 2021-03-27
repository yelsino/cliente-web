const CardPuntaRevert = () => {
	return (
		<div className=" flex flex-col relative w-32 h-32 justify-center items-center ">
			<div className=" bg-white w-16 h-16  rounded-lg transform rotate-45  absolute z-40 bottom-0 shadow-md border border-blue-500 "></div>

			{/* contenido */}
			<div className="bg-white border rounded-lg border-blue-500 w-44 h-36 relative z-50  shadow-md py-6 px-8 flex  flex-col justify-around">
				<div className="cursor-pointer">
					+ <span className="text-blue-500"> añadir</span>
				</div>
				<div className="cursor-pointer">
					x <span className="text-blue-500"> eliminar</span>
				</div>
			</div>
		</div>
	);
};

export default CardPuntaRevert;
