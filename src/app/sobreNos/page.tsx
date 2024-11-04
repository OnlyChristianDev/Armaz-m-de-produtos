"use client";

import Footer from "@/components/Footer";
import Clientes from "../../components/Clientes";
import QuestionGif from "../../animations/Questions (1).gif";
import Mission from "../../animations/Mission Impossible (1).gif";
import Image from "next/image";
import Header from "../../components/Header";
import Eye from "../../animations/Eyes.gif";

export default function SobreNos() {
    return (
        <>     
            <div className="w-full min-h-screen">
                <Header />
                <div className="p-10 min-[2800px]:p-96 flex justify-center flex-col">
                    <div className="flex xl:flex-row max-md:flex-col mt-20 items-center max-sm:text-center xl:w-[900px]">
                        <div>
                            <h2 className="text-4xl font-bold">Quem <span className="text-blue-600">Somos?</span></h2>
                            <p className="text-justify w-full">
                                A <span className="text-blue-600">RETROVE</span> é uma plataforma dedicada à promoção de produtos sustentáveis e à conscientização sobre o consumo responsável.
                                Acreditamos que cada compra pode fazer a diferença e estamos aqui para facilitar sua jornada em direção a um estilo de vida mais sustentável.
                            </p>
                        </div>
                        <Image 
                            src={QuestionGif} 
                            alt="imagem de questionamento sobre nós" 
                            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px]" 
                        />
                    </div>

                    <div className="xl:w-full xl:flex xl:justify-end">
                        <div className="flex max-md:flex-col mt-20 items-center max-sm:text-center xl:w-[900px] ">
                            <Image 
                                src={Mission} 
                                alt="imagem de missão" 
                                className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] mr-4 hidden md:block" 
                            />
                            <div className="max-sm:text-center md:text-right">
                                <h2 className="text-4xl font-bold">Nossa <span className="text-blue-600">Missão.</span></h2>
                                <p className="text-justify w-full">
                                    Nossa missão é oferecer produtos que respeitem o meio ambiente e que ajudem a construir um futuro melhor para as próximas gerações.
                                </p>
                            </div>
                            <Image 
                                src={Mission} 
                                alt="imagem de missão" 
                                className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] md:hidden" 
                            />
                        </div>
                    </div>

                    <div className="flex xl:flex-row max-md:flex-col mt-20 items-center max-sm:text-center xl:w-[900px]">
                        <div>
                            <h2 className="text-4xl font-bold">Visão.</h2>
                            <p className="text-justify w-full">
                                Ser reconhecida como a principal referência em comércio sustentável, promovendo práticas que minimizam o impacto ambiental.
                            </p>
                        </div>
                        <Image 
                            src={Eye} 
                            alt="imagem de visão" 
                            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] md:ml-4" 
                        />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center flex-col mt-20">
                    <h1 className="text-6xl font-bold max-sm:text-4xl max-md:text-center max-sm:text-center">Testemunhos de <span className="text-blue-600 ">Clientes.</span></h1>
                <div className="mt-10 flex flex-col gap-5 max-sm:p-3">  
                    <Clientes data="17 de maio de 2023" nome="Christian" avaliacao="A RETROVE me ajudou a encontrar produtos incríveis que não só são bons para mim, mas também para o planeta!"/>
                    <Clientes data="8 de agosto de 2023" nome="Gabriel" avaliacao="A experiência de compra foi excelente, e eu adorei a variedade de produtos sustentáveis!"/>
                    <Clientes data="10 de janeiro de 2024" nome="Carla" avaliacao="A RETROVE é a minha escolha número um quando quero produtos que fazem a diferença."/>
                </div>
                <Footer />
            </div>
            </div>
        </>
    );
}
