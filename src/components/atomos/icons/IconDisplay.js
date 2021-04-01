import { AiFillCaretDown } from "react-icons/ai";

const IconDisplay = (props) => {
	return (
		<span
			onClick={props.onIcon}
			className="font-bold text-3xl text-gray-300 hover:text-primario-red cursor-pointer"
		>
			<AiFillCaretDown />
		</span>
	);
};

export default IconDisplay;
