
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import img6 from "./img/img6.jpeg";
import img5 from "./img/img5.jpeg";
import img8 from "./img/img8.jpg";
import SubTitulo from "../../atomos/textos/SubTitulo";


const Galeria = () => {
	// const images = [img2, img3, img4, img6, img5, img8];
	return (
		<div>
			<SubTitulo texto={"NEGOCIOS CARLOS"} style={'text-center my-5 absolute top-20 left-20 z-40'} />
			<div className="relative  grid grid-cols-3  p-32">
				<img src={img8} />
				<img src={img2} />
				<img src={img3} />
				<img src={img4} />
				<img src={img5} />
				<img src={img6} />
			</div>
		</div>
	);
};

export default Galeria;
