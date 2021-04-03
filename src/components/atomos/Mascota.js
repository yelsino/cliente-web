import imgMascota from "../../assets/img/mascota.svg";
import React from "react";
const Mascota = (props) => {
	return (
		<div className={` ${props.style ? props.style : ""}`}>
			<img src={imgMascota} />
		</div>
	);
};

export default Mascota;
