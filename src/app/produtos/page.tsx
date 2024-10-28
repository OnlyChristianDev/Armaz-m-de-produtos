"use client"
interface ProdutoInterface {
    nome : string
    preco : string
    image : string
}


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
    const file = event.target.files?.[0]
        if(file) {
            const imgURL = URL.createObjectURL(file)
            SetImage(imgURL)   
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
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div>
                <h1 className="text-4xl font-bold ">Produtos.</h1>
                <div className="flex flex-col items-center gap-4">
                    <Inputs type={"text"} placeholder={"Nome"} value={nome} onChange={TakeName} />
                    <Inputs type={"number"} placeholder={"Valor"} value={preco} onChange={TakePrice} />
                    <label htmlFor="arquivo" className="bg-black text-white uppercase text-center rounded-md pt-2 pb-2 w-80 cursor-pointer">Escolha uma Foto</label>
                    <input id="arquivo" className="file:bg-black file:text-white text-white file:rounded-md file:h-10 file:w-80 file:cursor-pointer" onChange={AddImage} type="file" accept="image/*"/>
                    <button className="bg-black font-medium text-white w-28 h-9 rounded-md" onClick={submit}>Enviar</button>
                </div>
            </div>
            <div className="flex gap-4 mt-8 w-full items-center justify-center">
        {Produtos.map((produto, index) => (
          <div key={index} className="h-80 bg-white w-64 flex flex-col items-center shadow-2xl rounded-2xl p-4 ">
            <div className="bg-gray-100 h-64 w-52 rounded-md flex items-center overflow-hidden justify-center">
            <img
              className="rounded-md h-full shadow-sm object-cover"
              src={produto.image}
            />
            </div>
            <div className="flex flex-col items-start w-full pl-2">
              <h1 className="text-gray-500 text-[20px] font-normal">{produto.nome}</h1>
              <h2 className="text-5xl">{produto.preco} <span className="text-[17px] ml-[-10px] text-gray-500">/R$</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}