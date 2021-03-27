import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import InputRdGreen from "../../atomos/inputs/InputRdVerde";
import TextoAzul from "../../atomos/textos/Azul";
import Logo from "../../atomos/Logo";

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
		<Fragment>
			<ul className=" flex justify-end m-8">
				<Link
					to={"/"}
					className="text-green-800 text-base font-bold mx-4 hover:text-green-400"
				>
					{" "}
					TENGO CUENTA{" "}
				</Link>
				<Link
					to={"/"}
					className="text-green-800 text-base font-bold mx-4 hover:text-green-400"
				>
					{" "}
					INICIO{" "}
				</Link>
			</ul>

			<form onSubmit={onSubmit} className="flex flex-col items-center">
				<div>
					{alerta ? (
						<p className={`alerta ${alerta.categoria}`}> {alerta.msg} </p>
					) : null}
				</div>
				<Logo />

				<InputRdGreen
					handleChange={onChangeLogin}
					atributos={{
						id: "username",
						name: "username",
						value: username,
						type: "text",
						placeholder: "nombre de usuario",
					}}
				/>
				<InputRdGreen
					handleChange={onChangeLogin}
					atributos={{
						id: "email",
						name: "email",
						value: email,
						type: "email",
						placeholder: "correo electronico",
					}}
				/>

				<InputRdGreen
					handleChange={onChangeLogin}
					atributos={{
						id: "password",
						name: "password",
						value: password,
						type: "password",
						placeholder: "contraseña",
					}}
				/>

				<InputRdGreen
					handleChange={onChangeLogin}
					atributos={{
						id: "confirmar",
						name: "confirmar",
						value: confirmar,
						type: "password",
						placeholder: "confirmar contraseña ",
					}}
				/>

				<button
					type="submit"
					className="bg-blue-100 p-2 px-6 text-blue-700 rounded-md font-bold hover:bg-blue-600 hover:text-white my-2"
				>
					Iniciar Sesion
				</button>
			</form>
		</Fragment>
	);
};

export default NuevaCuenta;
