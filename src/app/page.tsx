"use client"
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Home() {
const router = useRouter()
const AddItem = () => {
  router.push("/produtos")
}

  return (
   <div className="w-full h-screen flex items-center justify-center flex-col">
   <Header />
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-6xl font-semibold">Bem vindo a <span className="text-blue-600">RETROVE.</span></h1>
      <p className="text-center ">Aqui voce pode desapegar-se de seus itens usados, além de conhcer novos tesouros perdidos por ai.</p>
      <div className="flex items-center justify-center flex-col mt-5">
        <p className="font-[600]">Venda! Adicione seu itém ao nosso armazém.</p>
        <button className="bg-blue-600 text-[#F9F9F8] rounded-md w-28 h-10" onClick={AddItem}>ADICIONAR</button>
      </div>
      <div>

      </div>
    </div>
   </div>
  );
}
