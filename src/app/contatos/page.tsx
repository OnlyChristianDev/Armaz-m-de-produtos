"use client"

import Header from "../../components/Header"
import RedesSociais from "../../components/RedesSociais"
import { FaLinkedin, FaPhoneAlt} from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Contatos(){
    return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="flex items-center justify-center flex-col max-sm:mt-32 max-sm:mb-10">
            <h1 className="text-6xl font-bold max-sm:text-2xl max-sm:text-center max-md:text-center max-md:text-4xl max-lg:text-5xl">Entre em Contato <span className="text-blue-600">conosco.</span></h1>
            <div className="flex gap-6 items-center justify-center mt-10 max-sm:flex-col max-lg:flex-col max-md:flex-col"> 
                <div className="max-md:flex max-lg:flex gap-6 max-sm:flex-col max-xl:flex max-2xl:flex flex">
                    <div>
                        <RedesSociais link="https://www.linkedin.com/in/christiangdev/" icone={FaLinkedin} nomeRedeSocial="Linkedin" descricao="Conecte-se conosco no LinkedIn para acompanhar nossas atualizações, novidades e oportunidades. Estamos prontos para conversar e construir parcerias sólidas!" />
                    </div>
                    <div>
                        <RedesSociais link="mailto:christiandeveloper123@gmail.com" icone={MdEmail} nomeRedeSocial="E-mail" descricao="Para perguntas ou colaborações, me envie um e-mail! Adoro trocar ideias e responder o quanto antes." />
                    </div>
                </div>
                <div>
                    <RedesSociais link="https://wa.me/5587991151950" icone={FaPhoneAlt} nomeRedeSocial="Telefone" descricao="Prefere uma conversa direta? Fique à vontade para me chamar pelo telefone para discutirmos qualquer detalhe." />
                </div>
            </div>
        </div> 
    </div>
    )
}