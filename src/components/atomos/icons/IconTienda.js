import { IoStorefront } from "react-icons/io5";
import { Link } from "react-router-dom";

const IconTienda = (props) => {
	return (
		<Link
			to={props.link}
			className="text-primario-blue cursor-pointer text-6xl hover:text-primario-blue "
		>
			<IoStorefront />
		</Link>
	);
};

export default IconTienda;
