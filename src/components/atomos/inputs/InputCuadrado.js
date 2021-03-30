const InputCuadrado = ({ atributos, handleChange }) => {
	return (
		<input
			className="rounded-md bg-white shadow-sm border border-primario-blue w-full p-4 text-black text-xl outline-none"
			type={atributos.type}
			name={atributos.name}
			value={atributos.value}
			id={atributos.value}
			maxLength={atributos.maximo}
			minLength={atributos.minimo}
			placeholder={atributos.placeholder}
			onChange={handleChange}
		/>
	);
};

export default InputCuadrado;
