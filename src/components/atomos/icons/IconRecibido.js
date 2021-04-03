import { BsLayersFill } from "react-icons/bs";

const IconRecibido = (props) => {
	return (
		<span>
			<BsLayersFill
				className={`font-bold text-3xl hover:text-primario-blue cursor-pointer ${
					props.style ? props.style : "text-gray-300 "
				}`}
			/>
		</span>
	);
};

export default IconRecibido;
