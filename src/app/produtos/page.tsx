"use client"
interface ProdutoInterface {
    nome : string
    preco : number
    image : string
}

import Image from "next/image"
import React, { useState } from "react"
export default function Pordutos(){
const [nome, SetNome] = useState("")
const [preco, SetPreco] = useState(0)
const [Produtos, SetProdutos] = useState<ProdutoInterface[]>([])
const [image, SetImage] = useState("")

class Produto {
    nome : string
    preco : number
    image : string

    constructor(nome : string, preco : number, image : string){
        this.nome = nome;
        this.preco = preco
        this.image = image
    }

    AddProduct(nome : string, preco : number, image: string){
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
    SetPreco(parseFloat(e.target.value))
}

const submit = () => {
    if (nome !="" && preco != 0 && image != ""){
        const NovoProduto = new Produto(nome, preco, image)
        SetProdutos([...Produtos, NovoProduto])
        console.log(Produtos)
        SetNome("");
        SetPreco(0);
        SetImage("");
    } else {
        console.log("vazio")
    }
 

}
    return(
        <div>
            <h1>Produtos</h1>
            <input onChange={TakeName} value={nome} type="text" placeholder="nome" />
            <input onChange={TakePrice} value={preco} type="number" placeholder="preço"/>
            <input onChange={AddImage} type="file" accept="image/*"/>
            <button onClick={submit}>Enviar</button>
            <div>
                { Produtos.map((Produto, index) => (
                       <div key={index}>
                            <h1>{Produto.nome} </h1>
                            <h2> {Produto.preco} </h2>
                            <Image src={Produto.image} alt="imagem do produto" width={200} height={200}/>
                        </div>
                ))}
            </div>
        </div>
        
    )
}