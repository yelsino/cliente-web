import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../../context/alertas/alertaContext";
import AuthContext from "../../../context/autenticacion/authContext";
import Logo from "../../atomos/Logo";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";
import TextoRojo from "../../atomos/textos/TextoRojo";
import Navbar2 from "../../moleculas/Navbar2";
import SubTitulo from "../../atomos/textos/SubTitulo";
import img1 from "../../../assets/img/login1.svg";
import SpinCarga from "../../atomos/objetos/spinCarga";
import ProductoContext from "../../../context/productos/productoContext";




const Login = (props) => {
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const { mensaje,bloqueologin, autenticado, iniciarSesion } = authContext;



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
		email: "yelsino@gmail.com",
		password: "321321",
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
		<div className=" p-8  ">
			<Navbar2
				// texto1={"Hogar"}
				texto2={"Tienda"}
				texto3={""}
				// texto4={"Registro"}
			/>

			<div className="flex justify-center items-center h-screen lg:w-1/2 w-full relative z-20">
				<div className=" lg:ml-20 	">
					{/* <Logo /> */}
					<div className="contenedor-form sombra-dark  "></div>
					<SubTitulo
						texto={"Iniciar Sesion"}
						style={"text-primario-green-semi text-4xl mb-10"}
					/>

					{mensaje ? <p className="text-primario-red">{mensaje}</p> : null}
					{alerta ? <p className="text-primario-red">{alerta.msg}</p> : null}

					<div className="mb-10">
						<p className=" text-gray-500">Correo Electronico</p>

						<InputRdVerde
							handleChange={onchangeInicio}
							atributos={{
								id: "email",
								name: "email",
								value: email,
								type: "email",
								placeholder: "correo electronico",
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>
					<div className="mb-10">
						<p className="  text-gray-500">Contraseña</p>
						<InputRdVerde
							handleChange={onchangeInicio}
							atributos={{
								id: "password",
								name: "password",
								value: password,
								type: "password",
								placeholder: "contraseña",
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>

					<Link to={"/"} className=" my-4 text-center">
						<TextoRojo texto={"olvide mi contraseña"} />{" "}
					</Link>
					<button
						type="button"
						onClick={onSubmit}
						className=" p-4 px-8 text-primario-blue border-2 border-primario-blue bg-primario-blue-claro  rounded-md font-bold  outline-none hover:bg-primario-blue hover:text-white text-lg w-96 mt-5"
					>
						{bloqueologin ? (
							<span>
								<SpinCarga />
								validando...
							</span>
						) : (
							"Iniciar"
						)}
					</button>
				</div>
			</div>

			<div className=" absolute bottom-20  -right-32 z-0 lg:flex  hidden">
				<img src={img1} className="" />
			</div>
		</div>
	);
};

export default Login;
