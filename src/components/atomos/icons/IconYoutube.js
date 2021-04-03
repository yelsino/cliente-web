import { IoLogoYoutube } from "react-icons/io";

const IconYoutube = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className={`font-bold text-3xl hover:text-primario-blue cursor-pointer ${
				props.style ? props.style : "text-gray-300 "
			}`}
		>
			<IoLogoYoutube />
		</span>
	);
};

export default IconYoutube;
