import React, { useContext, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { NavLink } from "react-router-dom";
import Navbar2 from "../../moleculas/Navbar2";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from "../../atomos/Logo";
import Galeria from "./galeria";
import IconYoutube from "../../atomos/icons/IconYoutube";
import IconFacebook from "../../atomos/icons/IconFacebook";
import IconTwitter from "../../atomos/icons/IconTwitter";
import ComoComprar from "./comocomprar";
import AuthContext from "../../../context/autenticacion/authContext";

const Home = () => {
	const onLeave = (origin, destination, direction) => {
		console.log("Leaving section " + origin.index);
	};
	const afterLoad = (origin, destination, direction) => {
		console.log("After load: " + destination.index);
	};
	const authContext = useContext(AuthContext);
	const { token,usuarioAutenticado } = authContext;
	useEffect(() => {
		// usuarioAutenticado();
	}, []);
	return (
		<ReactFullpage
			scrollOverflow={true}
			sectionsColor={["", "", ""]}
			onLeave={onLeave}
			afterLoad={afterLoad}
			render={({ state, fullpageApi }) => {
				return (
					<div id="fullpage-wrapper  ">
						<Navbar2 />
						<div className="section ">
							{/*  */}
							{/* section 1 */}
							{/*  */}
							<section className="slide relative">
								<div className="flex justify-center flex-col items-center relative z-20">
									{" "}
									<h1 className="text-5xl text-primario-green-semi select-none text-center">
										BIENVENIDO <br /> <span>A</span> <br />
										NEGOCIOS <span>CARLOS</span>
									</h1>
									<p className="text-primario-blue text-lg mt-3">
										el mercado de <span>satipo</span> en tus manos
									</p>
								</div>
								<div className="flex justify-center my-5 flex-col items-center z-30 relative">
									{" "}
									{/* <ImgAddCard /> */}
									<NavLink
										activeStyle={{ color: "red" }}
										to={"/tienda"}
										className=" bottom-32  shadow-lg rounded-xl p-4 text-primario-green-pure font-bold hover:bg-green-400 hover:border-primario-green bg-primario-green mt-10"
									>
										IR A LA TIENDA
									</NavLink>
								</div>
								<div className=" flex flex-col items-center justify-center  bottom-5 inset-x-0 z-30 absolute">
									<p className="my-3 text-green-800 font-bold">
										¿Quienes somos?
									</p>
									<span className="">
										<AiFillCaretDown />
									</span>
								</div>

								<svg
									className="absolute bottom-0 z-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
								>
									<path
										fill="#B7FFC2"
										fill-opacity="1"
										d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,138.7C672,139,768,181,864,192C960,203,1056,181,1152,197.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
									></path>
								</svg>

								<div className=" absolute transform -rotate-90 flex flex-col items-center justify-center -right-24  w-80 inset-y-0 ">
									<p className=" text-primario-blue font-semibold leading-10  ">
										¿como comprar?
									</p>
									{/* <span className="text-2xl">
											<AiFillCaretDown />
										</span> */}
								</div>
							</section>
							{/*  */}
							{/* section 2 */}
							{/*  */}
							<section className="slide relative">
								<ComoComprar />
								<div className=" flex flex-col items-center justify-center  bottom-5 inset-x-0 z-30 absolute">
									<p className="my-3 text-green-800 font-bold">
										Mas informacion
									</p>
									<span className="">
										<AiFillCaretDown />
									</span>
								</div>

								{/* <svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1440 320"
										className="absolute bottom-0 z-0"
									>
										<path
											fill="#B7FFC2"
											fill-opacity="1"
											d="M0,288L60,277.3C120,267,240,245,360,245.3C480,245,600,267,720,256C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
										></path>
									</svg> */}

								<svg
									className="absolute z-0 -bottom-10"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
								>
									<path
										fill="#B7FFC2"
										fill-opacity="1"
										d="M0,288L60,282.7C120,277,240,267,360,245.3C480,224,600,192,720,197.3C840,203,960,245,1080,229.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
									></path>
								</svg>
							</section>
						</div>
						<div className="section relative  ">
							{/*  */}
							{/* section 1 */}
							{/*  */}
							<section className="slide relative  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
									className="absolute top-0 z-0"
								>
									<path
										fill="#B7FFC2"
										fill-opacity="1"
										d="M0,0L48,26.7C96,53,192,107,288,128C384,149,480,139,576,149.3C672,160,768,192,864,202.7C960,213,1056,203,1152,218.7C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
									></path>
								</svg>

								<div className="flex justify-center flex-col items-center relative z-30 ">
									<Logo style={"w-56"} />
									<p className="text-primario-blue tracking-widest leading-loose  w-1/3 text-center text-lg">
										Somos Negocios Carlos, nos dedicamos a la compra y venta de
										frutas y vegetales para todos los hogares y negocios de
										Satipo, Nos dedicamos a esta actividad por mas de 20 años{" "}
									</p>
								</div>

								<div className=" absolute transform -rotate-90 flex flex-col items-center justify-center -right-20  w-80 inset-y-0">
									<p className=" text-primario-blue  font-semibold leading-10 ">
										galeria
									</p>
									<span className="text-2xl">
										<AiFillCaretDown />
									</span>
								</div>
								<div className=" flex flex-col items-center justify-center  bottom-5 inset-x-0 z-30 absolute">
									<p className="my-3 text-green-800 font-bold">
										Mas informacion
									</p>
									<span className="">
										<AiFillCaretDown />
									</span>
								</div>
							</section>
							{/*  */}
							{/* section 2 */}
							{/* galeria */}
							<section className="slide relative ">
								<Galeria />

								<svg
									className="absolute top-0 z-0"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
								>
									<path
										fill="#B7FFC2"
										fill-opacity="1"
										d="M0,320L60,293.3C120,267,240,213,360,186.7C480,160,600,160,720,138.7C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
									></path>
								</svg>
							</section>
						</div>
						<section className="section ">
							<div className="grid grid-cols-2 relative ">
								<div className="flex  flex-col items-center ">
									<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
										CONTACTO
									</h2>
									<p className="leading-10 text-xl tracking-widest ">
										<strong className="tracking-normal">Direccion:</strong> QB.
										1° de Noviembre
										<br />
										<strong className="tracking-normal">Ruc:</strong>{" "}
										10209664009
										<br />
										<strong className="tracking-normal"> Celular:</strong> +51
										985 254 256
										<br />
										<strong className="tracking-normal">Email:</strong>{" "}
										negocioscarlos@gmail.com
										<br />
									</p>
								</div>
								<div className="flex justify-center flex-col items-center">
									{" "}
									<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
										UBICACION
									</h2>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1080.8476851497728!2d-74.63563322723718!3d-11.255039278395264!3m2!1i1024!2i768!4f13.1!2m1!1sQB.%201%C2%B0%20de%20Noviembre%20S%2FN%20URB.%20Satipo%20-%20Satipo!5e1!3m2!1ses-419!2spe!4v1616629412865!5m2!1ses-419!2spe"
										width="450"
										height="400"
										loading="lazy"
									></iframe>
								</div>
							</div>

							<div className=" flex flex-col items-center justify-center  bottom-5 inset-x-0 z-30 absolute">
								<p className="my-3 text-green-800 font-bold">Nuestras Redes</p>
								<span className="">
									<AiFillCaretDown />
								</span>
							</div>
							<svg
								className="absolute bottom-0 z-0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1440 320"
							>
								<path
									fill="#B7FFC2"
									fill-opacity="1"
									d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,138.7C672,139,768,181,864,192C960,203,1056,181,1152,197.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
								></path>
							</svg>
						</section>
						<section className="section ">
							<div className="flex flex-col items-center justify-center">
								<div className="flex justify-center items-center flex-col">
									<p className="text-center">
										Siguenos en nuestra redes sociales
									</p>
									<div className="grid grid-cols-3 gap-10 mt-10 ">
										<a
											href="https://www.facebook.com/fcdicjauregui"
											className="facebook"
											target="_blank"
										>
											<IconFacebook style={"text-primario-blue"} />
										</a>
										<a
											href="https://twitter.com/NEGOCIOSCARLOS1"
											className="instagram"
											target="_blank"
										>
											<IconTwitter style={"text-primario-blue"} />
										</a>
										<a
											href="https://www.youtube.com/channel/UC5ZYLHFhWmfDabVLvPHTcjw"
											className="Youtube"
											target="_blank"
										>
											<IconYoutube style={"text-primario-red"} />
										</a>
									</div>
								</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1440 320"
									className="absolute top-0 z-0"
								>
									<path
										fill="#B7FFC2"
										fill-opacity="1"
										d="M0,0L48,26.7C96,53,192,107,288,128C384,149,480,139,576,149.3C672,160,768,192,864,202.7C960,213,1056,203,1152,218.7C1248,235,1344,277,1392,298.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
									></path>
								</svg>

								<button
									className="bottom-32 focus:outline-none  shadow-lg rounded-xl p-4 text-primario-green-pure font-bold hover:bg-green-400 hover:border-primario-green bg-primario-green mt-10"
									onClick={() => fullpageApi.moveTo(1, 0)}
								>
									Regresar
								</button>
							</div>
						</section>
					</div>
				);
			}}
		/>
	);
};

export default Home;
