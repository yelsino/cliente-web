import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import IconTienda from "../atomos/icons/IconTienda";
import Logo from "../atomos/Logo";

const Panel = (props) => {
	const [value, setValue] = useState("");

	const history = useHistory();
	const onHandleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="py-4 shadow-md flex-col items-center border justify-between w-72 h-screen z-20  bg-white fixed  ">
			<div className="flex flex-col items-center text-center px-8 ">
				<Logo />

				<label
					onClick={() => {
						history.push("/admin/listas");
					}}
					className={`cursor-pointer p-6 w-56 rounded-md text-4xl  ${
						value === "listas" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Listas
					<input
						type="radio"
						value="listas"
						checked={value === "listas"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>

				<label
					onClick={() => {
						history.push("/admin/pedidos");
					}}
					className={`cursor-pointer p-6 w-56 rounded-md text-4xl my-2 ${
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
						history.push("/admin/reclamos");
					}}
					className={`my-2 cursor-pointer mx-4 p-6 w-56 rounded-md text-4xl ${
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
						history.push("/admin/cuenta");
					}}
					className={`my-2 cursor-pointer mx-4 p-6 w-56 rounded-md text-4xl  ${
						value === "cuenta" ? "bg-primario-green shadow-sm " : ""
					}`}
				>
					Cuenta
					<input
						type="radio"
						value="cuenta"
						checked={value === "cuenta"}
						onChange={onHandleChange}
						className="hidden"
					/>
				</label>

				<div
					onClick={() => {
						history.push("/tienda");
						history.go(0);
					}}
				>
					<IconTienda />
				</div>
			</div>
		</div>
	);
};

export default Panel;
