const InputRdAzul = ({ atributos, handleChange }) => {
	return (
		<input
			id={atributos.id}
			value={atributos.value}
			name={atributos.name}
			type={atributos.type}
			placeholder={atributos.placeholder}
			maxLength={atributos.txtmaximo}
			minLength={atributos.txtminimo}
			onChange={handleChange}
			className=" border border-blue-500 text-blue-500 rounded-md  font-semibold outline-none p-2 w-full"
		/>
	);
};

export default InputRdAzul;
