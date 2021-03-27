import BotonAzul from "../../atomos/botones/BotonAzul"
import InputRdAzul from "../../atomos/inputs/InputRdAzul"

const CardNewRevert = () => {
    return (
        <div className=" flex flex-col relative w-32  bg-gray-200 justify-center items-center ">

            <div className="bg-white border rounded-lg border-blue-500   relative z-50  shadow-md  flex  flex-col justify-around p-4 h-44 ">

                <InputRdAzul  />
                <BotonAzul texto={'CREAR'} />
            </div>

            <div className=" bg-white w-16 h-16  rounded-lg transform rotate-45  absolute z-40 bottom-0 shadow-md border border-blue-500 " ></div>

        </div>
    );
}

export default CardNewRevert;