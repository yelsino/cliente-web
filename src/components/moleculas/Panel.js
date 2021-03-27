import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import IconTienda from "../atomos/icons/IconTienda";
import Logo from "../atomos/Logo";

const Panel = (props) => {
	const [value, setValue] = useState("");

	const history = useHistory();
	const onHandleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="`py-4 shadow-md   flex-col items-center border justify-between w-72 h-screen fixed bg- z-30   ">
			<div className="list-none flex flex-col items-center text-center px-8 h-full">
				<Logo />

				<label
					onClick={() => {
						history.push("/admin/listas");
					}}
					className={`  cursor-pointer p-6 w-56 rounded-md text-4xl mb-14 mt-10 ${
						value === "productos" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Listas
					<input
						type="radio"
						value="productos"
						checked={value === "productos"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>
				<label
					onClick={() => {
						// history.push("/admin/pedidos");
					}}
					className={`mb-14  cursor-pointer mx-4 p-6 w-56 rounded-md text-4xl  ${
						value === "pedidos" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Pedidos
					<input
						type="radio"
						value="pedidos"
						checked={value === "pedidos"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>
				<label
					onClick={() => {
						// history.push("/admin/reclamos");
					}}
					className={`mb-14 cursor-pointer mx-4 p-6 w-56 rounded-md text-4xl ${
						value === "reclamos" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Reclamos
					<input
						type="radio"
						value="reclamos"
						checked={value === "reclamos"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>

				<label
					onClick={() => {
						// history.push("/admin/usuarios");
						// setTimeout(() => {
						// 	props.openMenu(!props.activar);
						// }, 300);
					}}
					className={`mb-14 cursor-pointer mx-4 p-6 w-56 rounded-md text-4xl  ${
						value === "usuarios" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Cuenta
					<input
						type="radio"
						value="usuarios"
						checked={value === "usuarios"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>

				<IconTienda link={"/tienda"} />
			</div>
		</div>
	);
};

export default Panel;
