import { HiDotsVertical } from "react-icons/hi";

const IconOpciones = (props) => {
	return (
		<HiDotsVertical onClick={props.onIcon} className="text-gray-600 text-2xl" />
	);
};

export default IconOpciones;
