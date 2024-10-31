import Image from "next/image"
import Logo from "../images/Logo_para_Bazar_moderno-removebg-preview.png"
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter()
    const venderRouter = () => {
        router.push("/produtos")
    }

    const sobreNosFunction = () => {
        router.push("/sobreNos")
    }

     
    const ContatoFunction = () => {
        router.push("/contatos")
    }

    return(
        <header className="w-full flex items-center justify-center h-14 fixed top-0 left-0 right-0">
            <Image src={Logo} width={60} height={60} alt="logo da loja" className="absolute left-2 cursor-pointer"/>
            <ul className="flex gap-6">
                <li onClick={ContatoFunction} className="cursor-pointer">Contato</li>
                <li onClick={sobreNosFunction} className="cursor-pointer">Sobre Nós</li>
                <li onClick={venderRouter} className="cursor-pointer">Vender</li>
            </ul>
        </header>
    )
}