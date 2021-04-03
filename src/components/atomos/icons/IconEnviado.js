import { AiFillCar } from "react-icons/ai";

const IconEnviado = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className={`font-bold text-3xl hover:text-primario-blue cursor-pointer ${
				props.style ? props.style : "text-gray-300 "
			}`}
		>
			<AiFillCar />
		</span>
	);
};

export default IconEnviado;
