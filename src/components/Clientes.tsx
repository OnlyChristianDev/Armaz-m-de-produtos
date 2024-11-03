interface ClientesProps{
    nome: string,
    avaliacao : string,
    data : string
}
import Image from "next/image"
import Aspas from "../../public/0de302fd-5506-400e-8044-7435ee29e23f.png"

export default function Clietes( {nome, avaliacao, data} : ClientesProps){
    return(
        <div className="bg-white shadow-xl w-[600px] flex flex-col items-start rounded-md h-[270px] p-6">
        <div className="mb-4">
            <Image src={Aspas} alt="imagem de aspas" width={50} height={50} />
        </div>

        <div className="flex-grow">
            <p className="text-2xl text-center">{avaliacao}</p>
        </div>
        <div className="mt-4 text-right w-full ">
            <h1 className="text-xl font-semibold"> - {nome}</h1>
            <p className="text-gray-500"> {data} </p>
        </div>
            
        </div>
    )
}