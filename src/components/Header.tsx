import Image from "next/image"
import Logo from "../images/Logo_para_Bazar_moderno-removebg-preview.png"

export default function Header(){
    return(
        <header className="w-full flex items-center justify-center h-14 fixed top-0 left-0 right-0 ">
            <Image src={Logo} width={60} height={60} alt="logo da loja" className="absolute left-2 cursor-pointer"/>
            <ul className="flex gap-6">
                <li>Contato</li>
                <li>Sobre Nós</li>
                <li>Vender</li>
            </ul>
        </header>
    )
}