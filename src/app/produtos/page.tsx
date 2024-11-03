"use client"
interface ProdutoInterface {
    nome : string
    preco : string
    image : string
}

import Image from "next/image"
import Header from "../../components/Header"
import React, { useState } from "react"
import Inputs from "../../components/inputs"
export default function Pordutos(){
const [nome, SetNome] = useState("")
const [preco, SetPreco] = useState("")
const [Produtos, SetProdutos] = useState<ProdutoInterface[]>([])
const [image, SetImage] = useState("")

class Produto {
    nome : string
    preco : string
    image : string

    constructor(nome : string, preco : string, image : string){
        this.nome = nome;
        this.preco = preco
        this.image = image
    }

    AddProduct(nome : string, preco : string, image: string){
        SetProdutos([...Produtos, {nome, preco, image}])
            
    }
}

const AddImage = (event : React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
        const imgURL = URL.createObjectURL(file);
        SetImage(imgURL);
        fileInput.value = ''; 
    }
            
}


const TakeName = (e : React.ChangeEvent<HTMLInputElement>) => {
    SetNome(e.target.value)
}

const TakePrice = (e : React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value
    parseFloat(price)
    SetPreco(price)
}

const submit = () => {
    if (nome !="" && preco != "" && image != ""){
        const NovoProduto = new Produto(nome, preco, image)
        SetProdutos([...Produtos, NovoProduto])
        console.log(Produtos)
        SetNome("");
        SetPreco("");
        SetImage("");
    } else {
        console.log("vazio")
    }
 

}
    return(
       <>
       <div className={`w-full flex min-h-screen items-center justify-center flex-col ${Produtos.length < 1? "" : "mt-20"}`}>
        <Header />
        <div className="item-center justify-center flex flex-col p-10">
                <h1 className="text-4xl font-bold text-blue-600">Produtos.</h1>
                <p className="text-gray-500 mt-[-10px] mb-1 ">Aqui você pode adicionar seus produtos para venda.</p>
            <div className="flex flex-col items-center gap-4 ">
                <Inputs maxLength={17} type={"text"} placeholder={"Nome"} value={nome} onChange={TakeName} />
                <Inputs maxLength={6} type="number" placeholder={"Valor"} value={preco} onChange={TakePrice} />
                <label htmlFor="arquivo" className="bg-blue-600 text-white uppercase text-center rounded-md pt-2 pb-2 w-[100%] cursor-pointer">Escolha uma Foto</label>
                <input id="arquivo" className="file:bg-blue-600 file:text-white text-white file:rounded-md file:h-10 file:w-[100%] file:cursor-pointer" onChange={AddImage} type="file" accept="image/*"/>
                <button className="bg-blue-600 font-medium text-white w-28 h-9 rounded-md hover:scale-110 transition-transform duration-300" onClick={submit}>ENVIAR</button>
            </div>
        </div>
            <div className="gap-4 mb-10 h-auto mt-8 items-center justify-center grid-cols-5 grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-2xl:grid-cols-3">
        {Produtos.map((produto, index) => (
          <div key={index} className="h-96 bg-white w-64 flex flex-col items-center shadow-2xl rounded-2xl p-4 ">
            <div className="h-64 w-52 rounded-md flex items-center overflow-hidden justify-center">
            <Image
            width={208}
            height={256}
            alt="imagem do produto"
              className="rounded-md h-full shadow-sm object-cover"
              src={produto.image}
            />
            </div>
            <div className="flex flex-col items-start w-full pl-2">
                <div className="border-t border-gray-300 w-full mt-2"></div>
              <h1 className="text-gray-500 text-[20px] font-normal">{produto.nome}</h1>
              <h2 className="text-5xl">{produto.preco} <span className="text-[17px] ml-[-10px] text-gray-500">/R$</span></h2>
            </div>
          </div>
        ))}
      </div>
       </div>
            
      </>
  );
}