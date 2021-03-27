const CardProductoAdmin = () => {
    return ( 
        <div className="flex m-4 ">
        <div className="w-28  rounded-md bg-green-100">
          <img src='' alt="" />
        </div>

        <div className="shadow-lg bg-white rounded-md w-32 flex flex-col justify-around items-center">
          <span className="text-sm font-bold">Maiz Morado</span>
          <div className="flex  w-full justify-around ">
            <span className="text-xs text-gray-600">1 kilo</span>
            <span className="text-red-500 text-base font-semibold">S/ 5.50</span>
          </div>
        </div>
      </div>
     );
}
 
export default CardProductoAdmin;