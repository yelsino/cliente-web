import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/autenticacion/authContext";
import AlertaContext from "../../../context/alertas/alertaContext";
import InputRdGreen from "../../atomos/inputs/InputRdVerde";
import Logo from "../../atomos/Logo";
import Navbar2 from "../../moleculas/Navbar2";
import BotonAzul from "../../atomos/botones/BotonAzul";
import InputRdVerde from "../../atomos/inputs/InputRdVerde";
import SubTitulo from "../../atomos/textos/SubTitulo";
import Modal from "../../plantillas/Modal";
import ElementoContext from "../../../context/elementos/elementContext";
import img2 from "../../../assets/img/login2.svg";


const NuevaCuenta = (props) => {
	// d extraer  valores del contexto
	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	const authContext = useContext(AuthContext);
	const {
		mensaje,
		autenticado,
		registrarUsuario,
		codigoverificacion,
		generarCodigoDeVerificacion,
		validarCodigoDeVerificacion,
		eliminarCodigoDeVerificacion,
	} = authContext;

	const elementoContext = useContext(ElementoContext);
	const { elemento, crearElemento } = elementoContext;

	// en caso de que el usuario se haya autenticado o registrador o sea un registro duplicado

	useEffect(() => {
		if (autenticado) {
			props.history.push("/tienda");
			console.log(usuario);
		}

		if (mensaje) {
			mostrarAlerta("error de registro", "estilo bonito de error");
		}
	}, [mensaje, autenticado, props.history]);

	const [usuario, guardarUsuario] = useState({
		username: "",
		email: "",
		password: "",
		confirmar: "",
	});
	const [codigo, setCodigo] = useState("");
	const onChangeCodigo = (e) => {
		setCodigo(e.target.value);
	};
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

		for (let i = 0; i < username.length; i++) {
			var numeros = "0123456789";
			if (numeros.indexOf(username.charAt(i), 0) != -1) {
				mostrarAlerta("el nombre no debe contener numeros");
				return;
			}
		}

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

		crearElemento();
		generarCodigoDeVerificacion({ email });

		// console.log("registro exitoso");
	};

	return (
		<div>


			<div className=" bottom-10 right-10 flex items-center justify-center  mt-10 "></div>
			<Navbar2
				texto1={"Hogar"}
				texto2={"Tienda"}
				texto3={"Iniciar"}
				texto4={""}
			/>
			<div className="flex justify-center items-center  w-full lg:w-1/2 flex-col   h-screen">
				<SubTitulo
					texto={"Registrarse"}
					style={"text-primario-green-semi text-4xl"}
				/>
				<form
					onSubmit={onSubmit}
					className="flex justify-center items-center flex-col   py-6 rounded-lg  px-10 relative z-20"
				>
					{/* <Logo /> */}

					{alerta ? <p className="text-primario-red"> {alerta.msg} </p> : null}
					<div className="mb-5">
						<p className=" text-gray-500">Nombres</p>
						<InputRdVerde
							handleChange={onChangeLogin}
							atributos={{
								id: "username",
								name: "username",
								value: username,
								type: "text",
								placeholder: "nombre de usuario",
								min: 4,
								max: 40,
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>

					<div className="mb-5">
						<p className=" text-gray-500">Correo electronico</p>
						<InputRdVerde
							handleChange={onChangeLogin}
							atributos={{
								id: "email",
								name: "email",
								value: email,
								type: "email",
								placeholder: "correo electronico",
								min: 4,
								max: 40,
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>

					<div className="mb-5">
						<p className=" text-gray-500">Contraseña</p>
						<InputRdVerde
							handleChange={onChangeLogin}
							atributos={{
								id: "password",
								name: "password",
								value: password,
								type: "password",
								placeholder: "contraseña",
								max: 30,
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>

					<div className="mb-5">
						<p className=" text-gray-500">Confirmar contraseña</p>
						<InputRdVerde
							handleChange={onChangeLogin}
							atributos={{
								id: "confirmar",
								name: "confirmar",
								value: confirmar,
								type: "password",
								placeholder: "confirmar contraseña ",
								max: 30,
							}}
							style={"w-96 border-l-8  border-t-0 border-b-2 border-r-0"}
						/>
					</div>

					<BotonAzul
						texto={"Registrarse"}
						type={"submit"}
						style={"w-96 border-2 border-primario-blue"}
					/>
				</form>
				<div className=" absolute bottom-20 hidden lg:flex  right-0 z-0">
					<img src={img2} className="" />
				</div>
			</div>
			{elemento && (
				<Modal style={"bg-gray-700 opacity-75"} position={"z-50"}>
					<div className="border border-primario-blue rounded-lg p-16 shadow-md flex justify-center items-center flex-col bg-white">
						{mensaje && <p className="text-primario-red">{mensaje}</p>}
						{alerta && <p className="text-primario-red">{alerta.msg}</p>}
						{!codigoverificacion ? (
							<p className="text-primario-blue text-lg">
								se le ha enviado un codigo de verificacion <br /> de cuenta al
								correo {email}
							</p>
						) : (
							<p className="text-primario-blue text-lg mb-5">
								{/* {email}  */}
								<br />
								Su correo ha sido validado
							</p>
						)}
						<div className="flex justify-center items-center">
							{!codigoverificacion && (
								<InputRdVerde
									handleChange={onChangeCodigo}
									atributos={{
										id: "codigo",
										name: "codigo",
										type: "codigo",
										value: codigo,
										placeholder: "digite el codigo aqui ",
										max: 4,
										readOnly: !codigoverificacion ? false : true,
									}}
									style={"text-center border-2 text-2xl"}
								/>
							)}
							{!codigoverificacion && (
								<button
									onClick={() => {
										if (codigo.length !== 4) {
											mostrarAlerta("el campo del debe tener 4 letras");
											return;
										}
										mostrarAlerta("validando...");
										validarCodigoDeVerificacion(codigo);
									}}
									className=" bottom-32  shadow-lg rounded-xl h-10 px-5 text-primario-green-pure font-bold hover:bg-green-400 hover:border-primario-green bg-primario-green ml-5 "
								>
									VALIDAR
								</button>
							)}

							{codigoverificacion && (
								<button
									onClick={() => {
										registrarUsuario({
											username,
											email,
											password,
										});

										if (codigoverificacion) {
											eliminarCodigoDeVerificacion(codigoverificacion._id);
										}
										setTimeout(() => {
											crearElemento();
										}, 1000);
									}}
									className=" bottom-32  shadow-md rounded-xl h-16 px-5 text-primario-green-pure font-bold hover:bg-green-400 hover:border-primario-green bg-primario-green ml-5 "
								>
									REGISTRARSE
								</button>
							)}
						</div>
						<div className="flex justify-evenly w-full">
							<p
								onClick={() => {
									guardarUsuario({
										...usuario,
										email: "",
									});
									setCodigo("");
									crearElemento();

									if (codigoverificacion) {
										eliminarCodigoDeVerificacion(codigoverificacion._id);
									}
								}}
								className="mt-5 text-gray-500 hover:text-primario-red cursor-pointer"
							>
								cambiar de correo
							</p>
							{!codigoverificacion && (
								<p
									onClick={() => {
										generarCodigoDeVerificacion({ email });
										mostrarAlerta("se ha reenviado un codigo");
										setCodigo("");
									}}
									className="mt-5 text-gray-500 hover:text-primario-red cursor-pointer"
								>
									reenviar correo
								</p>
							)}
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default NuevaCuenta;
