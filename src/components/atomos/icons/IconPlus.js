import { FaPlus } from "react-icons/fa";

const IconPlus = (props) => {
	return (
		<span
			onClick={props.open}
			className="font-bold  text-primario-green-semi flex flex-col "
		>
			<FaPlus />
		</span>
	);
};

export default IconPlus;
