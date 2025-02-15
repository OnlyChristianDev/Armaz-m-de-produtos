"use client"
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import Animation from "../animations/Sales consulting (1).gif"

export default function Home() {
const router = useRouter()
const AddItem = () => {
  router.push("/produtos")
}

  return (
   <div className="w-full min-h-screen flex items-center justify-center flex-col">
   <Header />
    <div className="flex items-center justify-center max-sm:flex-col-reverse max-md:flex-col">
      <div className="max-sm:p-8 max-md:p-8 max-lg:p-8 md:w-[490px] max-xl:p-8 flex items-center md:items-start justify-center flex-col">
        <h1 className="text-5xl max-sm:text-center font-semibold">Bem vindo a <span className="text-blue-600">RETROVE.</span></h1>
        <p className="text-justify text-stat w-[80%]">Aqui, você pode se desapegar de itens usados que já não têm espaço na sua vida, dando a eles uma nova chance com alguém que os valorize. Além disso, você pode explorar e descobrir novos tesouros, peças únicas e raridades perdidas que aguardam por um novo dono – tudo em um só lugar.</p>
        <button className="bg-blue-600 mt-3 text-[#F9F9F8] rounded-md w-40 h-10 hover:scale-105 transition-transform duration-300" onClick={AddItem}>DESAPEGAR-SE</button>
      </div>
      <div className="max-sm:w-56 max-md:w-72 max-lg:w-[360px]">
        <Image src={Animation} alt="animação de venda"/>
      </div>
    </div>
   </div>
  );
}
