import Cerrar from "../../atomos/objetos/Cerrar";
import CardProduct from "./CardProducto";

const NuevoProducto = (props) => {

  return (

    <div className="rounded-md  p-4  relative  w-min shadow-md bg-white ">
      <span className="font-semibold text-black">Crear Producto</span>
      <form className='flex'>
        <div className="flex flex-col justify-center mr-6">
          <div className="my-4 border-b">
            <input
              type="text"
              placeholder="nombre de producto"
              name="nombre"
              className=" focus:outline-none p-2"
            />
          </div>

          <div className="my-4 border-b">
            <input
              type="text"
              placeholder="precio del producto"
              name="nombre"
              className=" focus:outline-none p-2"
            />
          </div>

          <div className="my-2 border-b flex">
            <div>
              <label 
                className='hover:bg-red-200 hover: text-red-600 px-2 py-1 rounded-md mx-2 '
                htmlFor='kilo'>kilo</label>
              <input
                id='kilo'
                type="checkbox"
                placeholder="precio de producto"
                name="precio"
                className=" hidden focus:outline-none p-2 "
              />
            </div>
            <div>
              <label 
                className='hover:bg-red-200 hover: text-red-600 px-2 py-1 rounded-md mx-2'
                htmlFor='gramos'>gramos</label>
              <input
                id='gramos'
                type="checkbox"
                placeholder="precio de producto"
                name="precio"
                className=" hidden focus:outline-none p-2"
              />
            </div>
            <div>
              <label 
                className='hover:bg-red-200 hover: text-red-600 px-2 py-1 rounded-md mx-2'
                htmlFor='unidad'>unidad</label>
              <input
                id='unidad'
                type="checkbox"
                placeholder="precio de producto"
                name="precio"
                className=" hidden focus:outline-none p-2"
              />
            </div>








          </div>

          <div className="my-2 border-b">
            <input
              type="text"
              placeholder="peso de producto"
              className=" focus:outline-none p-2"
              name="peso"
            />
          </div>



          <div className="my-2 border-b">
            <input
              type="text"
              placeholder="medida"
              className=" focus:outline-none p-2"
              name="medida"
            />
          </div>

          <div className="my-2 border-b">
            <input
              type="text"
              placeholder="categoria"
              className=" focus:outline-none p-2"
              name="categoria"
            />
          </div>

          <div className="my-2 py-1 text-blue-800 bg-blue-200 text-center rounded-md">
            <input
              className="hidden focus:outline-none     p-2"
              type="file"
              placeholder="imagen de producto"
              id="file"
              accept="image/*"
              name="imagen"
            />
            <label className=" " htmlFor="file">
              Subir
                </label>
          </div>
        </div>

        <div className="mr-6 ">
          <CardProduct />
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-200 m-4 px-6 py-1 text-blue-800"
            >
              crear
                </button>
            <button className="bg-blue-200 m-4 px-3 py-1 text-blue-800">
              publicar
                </button>
          </div>
        </div>
      </form>

    <div className='absolute -top-3 right-10' onClick={props.onBtn}>
    <Cerrar
    />
    </div>

    </div>
  )
}

export default NuevoProducto;
