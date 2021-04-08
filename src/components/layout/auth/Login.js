import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autenticacion/authContext";
import Logo from "../../atomos/Logo";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";
import TextoRojo from "../../atomos/textos/TextoRojo";
import Navbar2 from "../../moleculas/Navbar2";
import SubTitulo from "../../atomos/textos/SubTitulo";

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
		if(email === '' || password === ''){
			mostrarAlerta('los campos no pueden estar vacios')
			return
		}

		iniciarSesion({ email, password });
	};

	return (
		<div className="bg-primario-green p-8 h-screen  flex justify-center flex-col items-center">
			<Navbar2 />

			<div className="flex justify-center items-center flex-col bg-white w-96 px-6 py-4 rounded-lg shadow-xl mt-10">
				<div className="contenedor-form sombra-dark  "></div>
				<SubTitulo
					texto={"Iniciar Sesion"}
					style={"text-primario-green-semi"}
				/>
				<Logo />
				{mensaje ? <p className="text-primario-red">{mensaje}</p> : null}
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
					style={""}
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
					style={""}
				/>

				<Link to={"/"} className="text-primario-red my-4">
					<TextoRojo texto={"olvide mi contraseña"} />{" "}
				</Link>
				<button
					type="button"
					onClick={onSubmit}
					className="bg-primario-blue-claro p-4 px-8 text-primario-blue rounded-md font-bold  outline-none hover:bg-primario-blue hover:text-white text-lg"
				>
					Iniciar Sesion
				</button>
			</div>
		</div>
	);
};

export default Login;
