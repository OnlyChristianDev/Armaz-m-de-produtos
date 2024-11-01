interface RedesSociaisProps{
    nomeRedeSocial : string,
    descricao : string
    icone : IconType
}

import { IconType } from "react-icons";

export default function RedesSociais( {icone, nomeRedeSocial, descricao } : RedesSociaisProps){
    return (
        <div className="bg-white flex items-center justify-center p-10 h-64 rounded-lg shadow-2xl">
            <div className="flex flex-col items-center justify-center">
                <div className="text-blue-600 text-6xl">
                    {icone}
                </div>
                <h2 className="text-blue-600 text-2xl font-semibold ">
                    {nomeRedeSocial}
                </h2>
                <p className="w-96 text-center">
                    {descricao}
                </p>
            </div>
        </div>
    )
}