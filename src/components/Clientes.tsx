interface ClientesProps{
    nome: string,
    avaliacao : string,
}

export default function Clietes( {nome, avaliacao} : ClientesProps){
    return(
        <div className="bg-red-900">
            <h1> {nome} </h1>
            <p> {avaliacao} </p>
        </div>
    )
}