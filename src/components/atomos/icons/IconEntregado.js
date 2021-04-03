import { BsGiftFill } from "react-icons/bs";

const IconEntregado = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className={`font-bold text-3xl hover:text-primario-blue cursor-pointer ${
				props.style ? props.style : "text-gray-300 "
			}`}
		>
			<BsGiftFill />
		</span>
	);
};

export default IconEntregado;
