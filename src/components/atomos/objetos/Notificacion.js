const Notificacion = (props) => {
	return (
		<button
			onClick={props.onBtn}
			className="flex justify-center items-center  w-8 h-8 rounded-full bg-primario-red-transparente absolute top-6 right-6"
		>
			<span className="text-primario-red font-bold">{props.texto}</span>
		</button>
	);
};

export default Notificacion;
