"use client"

import Clientes from "../../components/clientes"
import QuestionGif from "../../animations/Questions (1).gif"
import Mission from "../../animations/Mission Impossible.gif"
import Image from "next/image"
import Header from "../../components/Header"
import Eye from "../../animations/Eyes.gif"
export default function SobreNos(){

    return(
        <>
        
        <div className="w-full min-h-screen flex flex-col justify-center">
        <Header />
            <div className="flex mt-32 items-center ml-16">
                <div>
                    <h2 className="text-4xl font-bold justify-start">Quem <span className="text-blue-600">Somos?</span></h2>
                    <p className="text-justify w-[700px]">
                        A RETROVE é uma plataforma dedicada à promoção de produtos sustentáveis e à conscientização sobre o consumo responsável.
                        Acreditamos que cada compra pode fazer a diferença e estamos aqui para facilitar sua jornada em direção a um estilo de vida mais sustentável.
                    </p>
                </div>
                <div>
                    <Image width={250} src={QuestionGif} alt="imagem de questionamento sobre nós"/>
                </div>
            </div>
            <div className="flex items-center justify-end mr-16">
                <div>
                    <h2 className="text-4xl font-bold">Nossa <span className="text-blue-600">Missão.</span></h2>
                    <p className="text-justify w-[700px]">
                        Nossa missão é oferecer produtos que respeitem o meio ambiente e que ajudem a construir um futuro melhor para as próximas gerações.
                    </p>
                </div>
                <div>
                    <Image width={250} src={Mission} alt="imagem de questionamento sobre nós"/>
                </div>
            </div>
            <div className="flex items-center justify-start ml-16">
                <div>
                    <h2 className="text-4xl font-bold">Visão.</h2>
                    <p className="text-justify w-[700px]">
                        Ser reconhecida como a principal referência em comércio sustentável, promovendo práticas que minimizam o impacto ambiental.
                    </p>
                </div>
            <div>
            <Image width={250} src={Eye} alt="imagem de questionamento sobre nós"/>
            </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col mt-10">
                <h1 className="text-6xl font-bold">Testemunhos de <span className="text-blue-600 ">Clientes.</span></h1>
            <div>
                <Clientes nome="banana" avaliacao="nome"/>
            </div>

            <h2>Contato</h2>
            <div>
                <p>Para dúvidas ou sugestões, entre em contato conosco:</p>
                <p><strong>Email:</strong> contato@ecoloja.com.br</p>
                <p><strong>Telefone:</strong> (11) 1234-5678</p>
                <p><strong>Endereço:</strong> Rua Verde, 123 - São Paulo, SP</p>
            </div>
            </div>
           
        </div>
        </>
    )
}