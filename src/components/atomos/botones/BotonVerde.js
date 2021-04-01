const BotonVerde = (props) => {
	return (
		<button
			onClick={props.onBtn}
			className={`bg-primario-green py-4 px-16 text-primario-green-pure rounded-md font-bold hover:bg-primario-green-pure hover:text-primario-green focus:outline-none ${
				props.style ? props.style : ""
			}`}
		>
			{props.texto}
		</button>
	);
};

export default BotonVerde;
