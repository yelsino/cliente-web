const SubTitulo = (props) => {
	return (
		<h3
			className={`text-gray-900 text-xl font-bold ${
				props.style ? props.style : ""
			}`}
		>
			{props.texto}
		</h3>
	);
};

export default SubTitulo;
