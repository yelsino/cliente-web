
import imgMascota from "../../assets/img/mascota1.svg";
import React from "react";
const Mascota1 = (props) => {
	return (
		<div
			className={` absolute top-0  z-auto w-full  ${props.style ? props.style : ""}`}
		>
			<div className=" flex justify-end h-screen pb-10  w-full ">
				<img className="  " src={imgMascota} />
			</div>
		</div>
	);
};

export default Mascota1;
