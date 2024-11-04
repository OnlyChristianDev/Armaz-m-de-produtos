interface ClientesProps {
    nome: string;
    avaliacao: string;
    data: string;
}

import Image from "next/image";
import Aspas from "../../public/0de302fd-5506-400e-8044-7435ee29e23f.png";

export default function Clientes({ nome, avaliacao, data }: ClientesProps) {
    return (
        <div className="bg-white shadow-xl w-full sm:w-[500px] md:w-[600px] lg:w-[700px] flex flex-col items-start rounded-md h-auto sm:h-[270px] p-6">
            <div className="mb-4">
                <Image src={Aspas} alt="imagem de aspas" width={40} height={40} className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]" />
            </div>

            <div className="flex-grow">
                <p className="text-lg sm:text-xl md:text-2xl text-center">{avaliacao}</p>
            </div>
            
            <div className="mt-4 text-right w-full">
                <h1 className="text-lg sm:text-xl font-semibold"> - {nome}</h1>
                <p className="text-gray-500 text-sm sm:text-base"> {data} </p>
            </div>
        </div>
    );
}
