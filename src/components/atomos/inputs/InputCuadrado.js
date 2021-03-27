import { useState } from "react";

const InputCuadrado = (props) => {
	const [texto, setTexto] = useState("");

	const reemplazarTexto = (e) => {
		setTexto(e.target.value);
	};
	return (
		<input
			className="rounded-md bg-white shadow-md border border-blue-500 w-full p-4 text-black text-xl"
			type="text"
			placeholder={props.placeholder}
			onChange={reemplazarTexto}
			value={texto}
		/>
	);
};

export default InputCuadrado;
