import { useEffect } from "react";
import "./css/styles.css";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import img6 from "./img/img6.jpeg";
import img5 from "./img/img5.jpeg";
import img8 from "./img/img8.jpg";

const Galeria = () => {
	useEffect(()=>{
	  setTimeout(() => {
	    let modal = document.querySelector(".modal");
		let images = document.querySelectorAll(".gallery img");
		let modalImg = document.querySelector("#myModalImg");
		let imgBox = document.querySelectorAll(".lists img");
		let caption = document.querySelector(".caption-text");
		let close = document.querySelector(".close");

		images.forEach((images) => {
			images.addEventListener("click", () => {
				modal.style.display = "block";
				modalImg.src = images.src;
				caption.innerHTML = images.alt;
			});
		});

		imgBox.forEach((img) => img.addEventListener("click", imgLightbox));

		function imgLightbox(event) {
			modalImg.src = event.target.src;
		}

		close.addEventListener("click", () => {
			modal.style.display = "none";
		});
	  }, 1000);
	})
	return (
		<div className="galeria relative z-50">
			<div className="gallery">
				<div className="img-card ">
					<img className="w-10/12" src={img5} alt="Images!!" />
				</div>
				<div className="img-card">
					<img src={img2} alt="Images!!" />
				</div>
				<div className="img-card">
					<img src={img3} alt="Images!!" />
				</div>
				<div className="img-card">
					<img src={img4} alt="Images!!" />
				</div>
				<div className="img-card">
					<img src={img8} alt="Images!!" />
				</div>
				<div className="img-card">
					<img src={img6} alt="Images!!" />
				</div>
			</div>

			<div className="modal">
				<span className="close">x</span>

				<img src="" alt="" id="myModalImg" />

				<div className="caption-text"></div>

				<div className="lists">
					<img className="w-11/12" src={img5} alt="Images!!" />
					<img src={img2} alt="Images!!" />
					<img src={img3} alt="Images!!" />
					<img src={img4} alt="Images!!" />
					<img src={img8} alt="Images!!" />
					<img src={img6} alt="Images!!" />
				</div>
			</div>
		</div>
	);
}
 
export default Galeria;