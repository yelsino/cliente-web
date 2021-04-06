import img1 from "./img/como1.png";
import img2 from "./img/como2.png";
import img3 from "./img/como3.png";
import img4 from "./img/como4.png";


const ComoComprar = () => {

	return (
		<div className=" relative z-40 grid grid-cols-4">
      <div>
        <p>REGISTRESE</p>
        <p>CREA UNA LISTA</p>
        <p>AÑADA PRODUCTOS A SU LISTA</p>
        <p>REALIZA UN PEDIDO DE SUS LISTAS</p>
      </div>
        <p>y listo nosotros nos encargaremos de todo el proceso</p>
        <p>le avisaremos cuando su pedido este listo</p>
        <p>si desea una compra personalizada no olvide contactarnos</p>
 
			{/* <div className=" w-60">
				<img className="object-cover" src={img1} />
			</div>
			<div className='flex flex-col'>
				<div className=" w-32">
					<img className="object-fill" src={img2} />
				</div>
				<div className=" w-32">
					<img className="object-cover" src={img3} />
				</div>
			</div>
			<div className=" w-60">
				<img className="object-cover" src={img4} />
			</div> */}
		</div>
	);
}
 
export default ComoComprar;