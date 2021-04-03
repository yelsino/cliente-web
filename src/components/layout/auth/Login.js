import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autenticacion/authContext";
import Logo from "../../atomos/Logo";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";
import TextoRojo from "../../atomos/textos/TextoRojo";
import Navbar2 from "../../moleculas/Navbar2";

const Login = (props) => {
	// extraer valores del context
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje, autenticado, iniciarSesion } = authContext;

	// devolver mensajes
	useEffect(() => {
		if (autenticado) {
			props.history.push("/tienda");
		}
		if (mensaje) {
			mostrarAlerta("error al iniciar");
		}
	}, [mensaje, autenticado, props.history]);

	const [usuario, guardarUsuario] = useState({
		email: "",
		password: "",
	});

	const { email, password } = usuario;
	const onchangeInicio = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("onsubmit");

		// validar que no haya campos vacios
		// if (email.trim() === "" || password.trim() === "") {
		// 	mostrarAlerta("todos los campos son obligatorios", "alerta-error");
		// 	return;
		// }

		//  pasarlo al action
		iniciarSesion({ email, password });
	};

	return (
		<div className="bg-primario-green p-8 h-screen  flex justify-center flex-col items-center">
			<Navbar2 />

			<div className="flex justify-center items-center flex-col bg-white w-96 px-6 py-6 rounded-lg shadow-xl">
				<div className="contenedor-form sombra-dark"></div>

				<Logo />
				{alerta ? <p className="text-primario-red">{alerta.msg}</p> : null}
				<InputRdVerde
					handleChange={onchangeInicio}
					atributos={{
						id: "email",
						name: "email",
						value: email,
						type: "email",
						placeholder: "correo electronico",
						titulo: "correo electronico",
					}}
				/>
				<InputRdVerde
					handleChange={onchangeInicio}
					atributos={{
						id: "password",
						name: "password",
						value: password,
						type: "password",
						placeholder: "contraseña",
						titulo: "contraseña",
					}}
				/>

				<Link to={"/"} className="text-primario-red my-4">
					<TextoRojo texto={"olvide mi contraseña"} />{" "}
				</Link>
				<button
					type="button"
					onClick={onSubmit}
					className="bg-blue-100 p-2 px-6 text-primario-blue rounded-md font-bold hover:bg-primario-blue hover:text-white my-2"
				>
					Iniciar Sesion
				</button>
			</div>
		</div>
	);
};

export default Login;
