interface RedesSociaisProps{
    nomeRedeSocial : string,
    descricao : string
    icone : IconType
    link : string
}

import { IconType } from "react-icons";

export default function RedesSociais( {icone : Icone, nomeRedeSocial, descricao, link } : RedesSociaisProps){
    return (
        <>
        <a href={link} target="_blank">
         <div className="bg-white transition-transform duration-300 hover:scale-105 cursor-pointer flex items-center justify-center w-[450px] p-10 h-64 rounded-lg shadow-2xl max-sm:w-[60vw] max-md:w-[300px] max-lg:w-[390px] max-xl:w-[320px] max-2xl:w-[400px]">
            <div className="flex flex-col items-center justify-center">
                <div className="text-blue-600 text-6xl max-sm:text-5xl">
                    <Icone />
                </div>
                <h2 className="text-blue-600 text-2xl font-semibold ">
                    {nomeRedeSocial}
                </h2>
                <p className="w-[100%] text-center max-sm:text-[10px] max-md:text-[14px] max-xl:text-[14px]">
                    {descricao}
                </p>
            </div>
        </div>
        </a>
        </>
       
    )
}