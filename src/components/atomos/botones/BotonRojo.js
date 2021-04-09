const BotonRojo = (props) => {
	return (
		<button 
		onClick={props.onBtn}
		className="bg-primario-red-transparente p-2 px-6 text-primario-red rounded-md font-bold hover:bg-primario-red hover:text-red-200">
			{props.texto}
		</button>
	);
};

export default BotonRojo;
