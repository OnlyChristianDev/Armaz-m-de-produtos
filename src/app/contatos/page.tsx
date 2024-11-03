"use client"

import Header from "../../components/Header"
import RedesSociais from "../../components/RedesSociais"
import { FaLinkedin, FaPhoneAlt} from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Contatos(){
    return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-6xl font-bold">Entre em Contato <span className="text-blue-600">conosco.</span></h1>
            <div className="flex gap-6 items-center justify-center mt-10">
                <RedesSociais icone={FaLinkedin} nomeRedeSocial="Linkedin" descricao="Conecte-se conosco no LinkedIn para acompanhar nossas atualizações, novidades e oportunidades. Estamos prontos para conversar e construir parcerias sólidas!" />
                <RedesSociais icone={MdEmail} nomeRedeSocial="E-mail" descricao="Para perguntas ou colaborações, me envie um e-mail! Adoro trocar ideias e responder o quanto antes." />
                <RedesSociais icone={FaPhoneAlt} nomeRedeSocial="Linkedin" descricao="Prefere uma conversa direta? Fique à vontade para me chamar pelo telefone para discutirmos qualquer detalhe." />
            </div>
        </div>
    </div>
    )
}