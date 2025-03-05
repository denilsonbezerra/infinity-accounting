import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardComponent() {

    return (
        <div className="w-[500px] h-[300px] bg-linear-to-tr from-[#0F2D2F] to-[#58B78F] rounded-[10px] mt-[30px] ml-[70px]">
            <div className="w-full h-[30%] flex">
                <div className="w-[30%] h-full flex items-center justify-center gap-[7px]">
                    <div className="bg-white w-[55px] h-[55px] rounded-full"></div>
                    <div className="bg-white w-[40px] h-[40px] rounded-full"></div>
                </div>
                <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[17px]">
                    <p className="text-white font-medium text-[25px]">Infinity Bank</p>
                </div>
            </div>
            <div className="w-full h-[25%] pl-[20px] flex items-center">
                <FcSimCardChip size={65} />
                <LuNfc size={35} color="white" />
            </div>
            <div className="w-full">
                <p className="text-[#CDCDCD] text-[32px] pl-[20px] tracking-[5px] font-semibold">
                    {/* {numero
                        .replace(/\D/g, "")
                        .padEnd(16, "0")
                        .replace(/(\d{4})(?=\d)/g, "$1 ")
                        .trim() || "0000 0000 0000 0000"} */}
                    {"0000 0000 0000 0000"}
                </p>

                <p className="text-white text-[35px] pl-[20px] tracking-wide font-semibold">
                    {/* {nome || "Preencher Nome"} */}
                    {"Preencher Nome"}
                </p>
            </div>
        </div>
    )
}