"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Inputs from "../../components/inputs";

interface ProdutoInterface {
    nome: string;
    preco: number;
    image: string;
}

export default function Produtos() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState<number | undefined>(undefined);
    const [produtos, setProdutos] = useState<ProdutoInterface[]>([]);
    const [image, setImage] = useState("");

    const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setImage(imgURL);
            event.target.value = ""; 
        }
    };

    const takeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };

    const takePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const price = parseFloat(e.target.value);
        setPreco(isNaN(price) ? undefined : price);
    };

    const submit = () => {
        if (nome && preco && image && preco > 1) {
            const novoProduto: ProdutoInterface = { nome, preco, image };
            setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
            setNome("");
            setPreco(undefined);
            setImage("");
        } else {
            console.log("vazio ou preço inválido");
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                submit();
            }
        };
        document.addEventListener("keypress", handleKeyPress);
        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [nome, preco, image]);

    return (
        <div className={`w-full flex min-h-screen items-center justify-center flex-col ${produtos.length < 1 ? "" : "mt-20"}`}>
            <Header />
            <div className="item-center justify-center flex flex-col p-10">
                <h1 className="text-4xl font-bold text-blue-600">Produtos.</h1>
                <p className="text-gray-500 mt-[-10px] mb-1">Aqui você pode adicionar seus produtos para venda.</p>
                <div className="flex flex-col items-center gap-4">
                    <Inputs maxLength={17} type="text" placeholder="Nome" value={nome} onChange={takeName} />
                    <Inputs maxLength={6} type="number" placeholder="Valor" value={preco !== undefined ? preco : ""} onChange={takePrice} />
                    <label htmlFor="arquivo" className="bg-blue-600 text-white uppercase text-center rounded-md pt-2 pb-2 w-[100%] cursor-pointer">Escolha uma Foto</label>
                    <input id="arquivo" className="file:bg-blue-600 file:text-white text-white file:rounded-md file:h-10 file:w-[100%] file:cursor-pointer" onChange={addImage} type="file" accept="image/*" />
                    <button className="bg-blue-600 font-medium text-white w-28 h-9 rounded-md hover:scale-110 transition-transform duration-300" onClick={submit}>ENVIAR</button>
                </div>
            </div>
            <div className="gap-4 mb-10 h-auto mt-8 items-center justify-center grid-cols-5 grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-2xl:grid-cols-3">
                {produtos.map((produto, index) => (
                    <div key={index} className="h-96 hover:scale-105 transition-transform duration-300 bg-white w-64 flex flex-col items-center shadow-2xl rounded-2xl p-4">
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
    );
}
