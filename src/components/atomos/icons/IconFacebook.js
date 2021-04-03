import { GrFacebook } from "react-icons/gr";

const IconFacebook = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className={`font-bold text-3xl hover:text-primario-blue cursor-pointer ${
				props.style ? props.style : "text-gray-300 "
			}`}
		>
			<GrFacebook />
		</span>
	);
};

export default IconFacebook;
