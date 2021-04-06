import { FaTwitterSquare } from "react-icons/fa";

const IconTwitter = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className={`font-bold text-7xl hover:text-primario-blue cursor-pointer ${
				props.style ? props.style : "text-gray-300 "
			}`}
		>
			<FaTwitterSquare />
		</span>
	);
};

export default IconTwitter;
