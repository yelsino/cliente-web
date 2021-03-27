const BotonAzul = (props) => {
	return (
		<button
			className={`bg-primario-blue-claro p-2 px-6 text-primario-blue rounded-md font-bold hover:bg-primario-blue hover:text-primario-blue-claro z-10 ${
				props.style ? props.style : ""
			}`}
			onClick={props.onBtn}
		>
			{props.texto}
		</button>
	);
};

export default BotonAzul;
