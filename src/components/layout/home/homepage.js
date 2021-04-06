import React from "react";
// import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
// import "../../../css/homepage.css";
import { Link, NavLink } from "react-router-dom";
import Navbar2 from "../../moleculas/Navbar2";
import Mascota from "../../atomos/Mascota";
import { AiFillCaretDown } from "react-icons/ai";
import ImgAddCard from "../../atomos/images/addcard";
import Logo from "../../atomos/Logo";
import Galeria from "./galeria";
import IconYoutube from "../../atomos/icons/IconYoutube";
import IconFacebook from "../../atomos/icons/IconFacebook";
import IconTwitter from "../../atomos/icons/IconTwitter";
import ComoComprar from "./comocomprar";

class Home extends React.Component {
	onLeave(origin, destination, direction) {
		console.log("Leaving section " + origin.index);
	}
	afterLoad(origin, destination, direction) {
		console.log("After load: " + destination.index);
	}
	render() {
		return (
			<ReactFullpage
				scrollOverflow={true}
				sectionsColor={["", "", ""]}
				onLeave={this.onLeave.bind(this)}
				afterLoad={this.afterLoad.bind(this)}
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

									<div className=" absolute transform -rotate-90 flex flex-col items-center justify-center -right-20  w-80 inset-y-0">
										<p className=" text-primario-blue font-semibold leading-10 ">
											¿como comprar?
										</p>
										<span className="text-2xl">
											<AiFillCaretDown />
										</span>
									</div>
								</section>
								{/*  */}
								{/* section 2 */}
								{/*  */}
								<section className="slide ">
									<ComoComprar/>
									{/* <svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1440 320"
										className="absolute bottom-0 z-0"
									>
										<path
											fill="#B7FFC2"
											fill-opacity="1"
											d="M0,320L40,314.7C80,309,160,299,240,288C320,277,400,267,480,229.3C560,192,640,128,720,122.7C800,117,880,171,960,197.3C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
										></path>
									</svg> */}
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
											Somos Negocios Carlos, nos dedicamos a la compra y venta
											de frutas y vegetales para todos los hogares y negocios de
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
											d="M0,320L40,314.7C80,309,160,299,240,288C320,277,400,267,480,229.3C560,192,640,128,720,122.7C800,117,880,171,960,197.3C1040,224,1120,224,1200,192C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
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
											<strong className="tracking-normal">Direccion:</strong>{" "}
											QB. 1° de Noviembre
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
									<p className="my-3 text-green-800 font-bold">
										Nuestras Redes
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
	}
}

export default Home;

// <section classNameName="flex justify-center items-center h-screen flex-col relative">
// 	<h1 classNameName="text-6xl text-primario-green-semi">
// 		NEGOCIOS <span>CARLOS</span>
// 	</h1>
// 	<p classNameName="text-primario-blue text-lg">
// 		el mercado de <span>satipo</span> en tus manos
// 	</p>
// 	<Link
// 		to={"/tienda"}
// 		classNameName="absolute bottom-32 border-4 border-primario-green-semi shadow-lg rounded-xl p-4 text-primario-green-pure font-bold hover:bg-primario-green hover:border-primario-green"
// 	>
// 		IR A LA TIENDA
// 	</Link>
// 	<p classNameName="absolute bottom-5">Sobre Nosotros</p>
// </section>
// <section classNameName="flex justify-center items-center h-screen flex-col text-center ">
// 	<div classNameName="w-1/2 tracking-widest leading-10 ">
// 		<h2 classNameName="text-3xl mt-10 mb-4 text-primario-green-semi font-medium ">
// 			MISION
// 		</h2>
// 		<p classNameName="">
// 			Como negocio de Alimentos queremos brindar productos de calidad y
// 			buscando una mayor satisfacción posible de nuestros clientes,
// 			promover el bienestar y comodidad de quienes confían en nosotros.{" "}
// 		</p>
// 		<h2 classNameName="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
// 			VISION
// 		</h2>
// 		<p classNameName="">
// 			{" "}
// 			Para el 2023 ser el número uno en el mercado al ofrecer la mayor
// 			variedad de productos de buena calidad a nuestros clientes para
// 			satisfacer sus necesidades.{" "}
// 		</p>
// 	</div>
// </section>
// <section classNameName="flex justify-center items-center h-screen  text-center relative ">
// 	<div>
// 		<h2 classNameName="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
// 			GALERIA
// 		</h2>
// 		<div classNameName="slider ">
// 			<ul>
// 				<li>
// 					<img src={Img1} alt="" />
// 				</li>
// 				<li>
// 					<img src={Img2} alt="" />
// 				</li>
// 				<li>
// 					<img src={Img3} alt="" />
// 				</li>
// 				<li>
// 					<img src={Img4} alt="" />
// 				</li>
// 			</ul>
// 		</div>
// 	</div>
// 	<div>
// 		<h2 classNameName="text-3xl mt-10 mb-4 text-primario-green-semi font-medium re">
// 			UBICACION
// 		</h2>
// 		<iframe
// 			src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1080.8476851497728!2d-74.63563322723718!3d-11.255039278395264!3m2!1i1024!2i768!4f13.1!2m1!1sQB.%201%C2%B0%20de%20Noviembre%20S%2FN%20URB.%20Satipo%20-%20Satipo!5e1!3m2!1ses-419!2spe!4v1616629412865!5m2!1ses-419!2spe"
// 			width="600"
// 			height="450"
// 			loading="lazy"
// 		></iframe>
// 	</div>
// 	<p classNameName="absolute bottom-5">Contactos</p>
// </section>
// <section classNameName="flex justify-center items-center h-screen  text-center relative flex-col">
// 	<h2 classNameName="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
// 		CONTACTO
// 	</h2>
// 	<p classNameName="leading-10">
// 		<strong>Direccion:</strong> QB. 1° de Noviembre
// 		<br />
// 		<strong>Ubicacion:</strong> S/N URB. Satipo - Satipo
// 		<br />
// 		<strong>Phone:</strong> +51 985 254 256
// 		<br />
// 		<strong>Email:</strong> negocioscarlos@gmail.com
// 		<br />
// 	</p>
// 	<div classNameName="grid grid-cols-3 gap-10 mt-10 ">
// 		<a
// 			href="https://www.youtube.com/channel/UC5ZYLHFhWmfDabVLvPHTcjw"
// 			classNameName="Youtube"
// 			target="_blank"
// 		>
// 			<IconYoutube style={"text-primario-red"} />
// 		</a>
// 		<a
// 			href="https://www.facebook.com/fcdicjauregui"
// 			classNameName="facebook"
// 			target="_blank"
// 		>
// 			<IconFacebook style={"text-primario-blue"} />
// 		</a>
// 		<a
// 			href="https://twitter.com/NEGOCIOSCARLOS1"
// 			classNameName="instagram"
// 			target="_blank"
// 		>
// 			<IconTwitter style={"text-primario-blue"} />
// 		</a>
// 	</div>
// </section>

// import React from "react";
// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";

// import "../../../css/homepage.css";

// class Home extends React.Component {
// 	onLeave(origin, destination, direction) {
// 		console.log("Leaving section " + origin.index);
// 	}
// 	afterLoad(origin, destination, direction) {
// 		console.log("After load: " + destination.index);
// 	}
// 	render() {
// 		return (
// 			<ReactFullpage
// 				scrollOverflow={true}
// 				sectionsColor={["orange", "purple", "green"]}
// 				onLeave={this.onLeave.bind(this)}
// 				afterLoad={this.afterLoad.bind(this)}
// 				render={({ state, fullpageApi }) => {
// 					return (
// 						<div id="fullpage-wrapper">
// 							<section className="section section1">
// 								<h3>Section 1</h3>
// 							</section>
// 							<div className="section">
// 								<section className="slide">
// 									<h3>Slide 2.1</h3>
// 								</section>
// 								<section className="slide">
// 									<h3>Slide 2.2</h3>
// 								</section>
// 								<section className="slide">
// 									<h3>Slide 2.3</h3>
// 								</section>
// 							</div>
// 							<section className="section">
// 								<h3>Section 3</h3>
// 								<button onClick={() => fullpageApi.moveTo(1, 0)}>
// 									Move top
// 								</button>
// 							</section>
// 						</div>
// 					);
// 				}}
// 			/>
// 		);
// 	}
// }
