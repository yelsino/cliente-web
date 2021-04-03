import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ListaContext from "../../../context/listas/listaContext";
import "../../../css/slider.css";
import Img1 from "../../../assets/img/portfolio-01.jpg";
import Img2 from "../../../assets/img/portfolio-02.png";
import Img3 from "../../../assets/img/portfolio-03.jpg";
import Img4 from "../../../assets/img/portfolio-04.jpg";
import IconYoutube from "../../atomos/icons/IconYoutube";
import IconFacebook from "../../atomos/icons/IconFacebook";
import IconTwitter from "../../atomos/icons/IconTwitter";
import Navbar2 from "../../moleculas/Navbar2";

const Home = () => {
	return (
		<div className="select-none">
			<Navbar2 />
			<section className="flex justify-center items-center h-screen flex-col relative">
				<h1 className="text-6xl text-primario-green-semi">
					NEGOCIOS <span>CARLOS</span>
				</h1>
				<p className="text-primario-blue text-lg">
					el mercado de <span>satipo</span> en tus manos
				</p>
				<Link
					to={"/tienda"}
					className="absolute bottom-32 border-4 border-primario-green-semi shadow-lg rounded-xl p-4 text-primario-green-pure font-bold hover:bg-primario-green hover:border-primario-green"
				>
					IR A LA TIENDA
				</Link>
				<p className="absolute bottom-5">Sobre Nosotros</p>
			</section>
			<section className="flex justify-center items-center h-screen flex-col text-center ">
				<div className="w-1/2 tracking-widest leading-10 ">
					<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium ">
						MISION
					</h2>
					<p className="">
						Como negocio de Alimentos queremos brindar productos de calidad y
						buscando una mayor satisfacción posible de nuestros clientes,
						promover el bienestar y comodidad de quienes confían en nosotros.{" "}
					</p>
					<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
						VISION
					</h2>
					<p className="">
						{" "}
						Para el 2023 ser el número uno en el mercado al ofrecer la mayor
						variedad de productos de buena calidad a nuestros clientes para
						satisfacer sus necesidades.{" "}
					</p>
				</div>
			</section>
			<section className="flex justify-center items-center h-screen  text-center relative ">
				<div>
					<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
						GALERIA
					</h2>
					<div className="slider ">
						<ul>
							<li>
								<img src={Img1} alt="" />
							</li>
							<li>
								<img src={Img2} alt="" />
							</li>
							<li>
								<img src={Img3} alt="" />
							</li>
							<li>
								<img src={Img4} alt="" />
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium re">
						UBICACION
					</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d1080.8476851497728!2d-74.63563322723718!3d-11.255039278395264!3m2!1i1024!2i768!4f13.1!2m1!1sQB.%201%C2%B0%20de%20Noviembre%20S%2FN%20URB.%20Satipo%20-%20Satipo!5e1!3m2!1ses-419!2spe!4v1616629412865!5m2!1ses-419!2spe"
						width="600"
						height="450"
						loading="lazy"
					></iframe>
				</div>
				<p className="absolute bottom-5">Contactos</p>
			</section>
			<section className="flex justify-center items-center h-screen  text-center relative flex-col">
				<h2 className="text-3xl mt-10 mb-4 text-primario-green-semi font-medium">
					CONTACTO
				</h2>
				<p className="leading-10">
					<strong>Direccion:</strong> QB. 1° de Noviembre
					<br />
					<strong>Ubicacion:</strong> S/N URB. Satipo - Satipo
					<br />
					<strong>Phone:</strong> +51 985 254 256
					<br />
					<strong>Email:</strong> negocioscarlos@gmail.com
					<br />
				</p>
				<div className="grid grid-cols-3 gap-10 mt-10 ">
					<a
						href="https://www.youtube.com/channel/UC5ZYLHFhWmfDabVLvPHTcjw"
						className="Youtube"
						target="_blank"
					>
						<IconYoutube style={"text-primario-red"} />
					</a>
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
				</div>
			</section>
		</div>
	);
};

export default Home;
