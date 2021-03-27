import { FaUserAlt } from "react-icons/fa";

const IconUser = (props) => {
	return (
		<div onClick={props.open} className="font-bold text-3xl text-blue-500">
			<FaUserAlt />
		</div>
	);
};

export default IconUser;
