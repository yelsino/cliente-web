import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import AlertaContext from "../../../context/alertas/alertaContext";
import InputRdGreen from "../../atomos/inputs/InputRdVerde";
import Logo from "../../atomos/Logo";
import Navbar2 from "../../moleculas/Navbar2";
import BotonAzul from "../../atomos/botones/BotonAzul";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";

const NuevaCuenta = (props) => {
	// d extraer  valores del contexto
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje, autenticado, registrarUsuario } = authContext;

	// en caso de que el usuario se haya autenticado o registrador o sea un registro duplicado

	useEffect(() => {
		if (autenticado) {
			props.history.push("/tienda");
			console.log(usuario);
		}

		if (mensaje) {
			mostrarAlerta("error de registro", "estilo bonito de error");
		}
		console.log("efect nueva cuenta");
	}, [mensaje, autenticado, props.history]);

	const [usuario, guardarUsuario] = useState({
		username: "",
		email: "",
		password: "",
		confirmar: "",
	});

	// extraer usuario
	const { username, email, password, confirmar } = usuario;

	const onChangeLogin = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// validar campos vacios
		if (
			username.trim() === "" ||
			email.trim() === "" ||
			password.trim() === "" ||
			confirmar.trim() === ""
		) {
			mostrarAlerta("Todos los campos son requeridos", "alerta-error");
			return;
		}

		// validar password
		if (password.length < 6) {
			mostrarAlerta(
				"El password debe contener al menos 6 caracteres",
				"alerta-error"
			);
			return;
		}

		// los dos password sean igales
		if (password !== confirmar) {
			mostrarAlerta("las contraseñas no son iguales", "alerta-error");
			return;
		}

		registrarUsuario({
			username,
			email,
			password,
		});

		console.log("registro exitoso");
	};

	return (
		<div>
			<Navbar2 />
			<div className="flex justify-center items-center h-screen bg-primario-green">
				<form
					onSubmit={onSubmit}
					className="flex justify-center items-center flex-col bg-white w-96 px-6 py-6 rounded-lg shadow-xl"
				>
					<Logo />
					{alerta ? <p className="text-primario-red"> {alerta.msg} </p> : null}
					<InputRdVerde
						handleChange={onChangeLogin}
						atributos={{
							id: "username",
							name: "username",
							value: username,
							type: "text",
							placeholder: "nombre de usuario",
							titulo: "nombres de usuario",
						}}
					/>
					<InputRdVerde
						handleChange={onChangeLogin}
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
						handleChange={onChangeLogin}
						atributos={{
							id: "password",
							name: "password",
							value: password,
							type: "password",
							placeholder: "contraseña",
							titulo: "contraseña",
						}}
					/>

					<InputRdVerde
						handleChange={onChangeLogin}
						atributos={{
							id: "confirmar",
							name: "confirmar",
							value: confirmar,
							type: "password",
							placeholder: "confirmar contraseña ",
							titulo: "confirmar contraseña",
						}}
					/>

					<BotonAzul texto={"Registrarse"} type={"submit"} />
				</form>
			</div>
		</div>
	);
};

export default NuevaCuenta;
