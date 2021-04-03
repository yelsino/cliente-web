import React from "react";
import LogoImg from "../../assets/img/logocarlos.png";
const Logo = (props) => {
	return (
		<div
			className={` flex justify-center items-center ${
				props.style ? props.style : "w-40 p-4"
			}`}
		>
			<img src={LogoImg} />
		</div>
	);
};

export default Logo;
