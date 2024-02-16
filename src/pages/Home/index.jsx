import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gif from "../Animais/imagens/gif.gif";
import "./style.css";

export default function Home() {
  const { user } = useParams();
  const [fraseAtual, setFraseAtual] = useState("");
  const [frases, setFrases] = useState([
    "Você sabia que eu sou hermafrodita?",
    "Meu nome não é Gary!",
    "Eu gosto de comer vegetais!",
    "Eu estou muito cansado!",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const indice = Math.floor(Math.random() * frases.length);
      setFraseAtual(frases[indice]);
    }, 2000);

    return () => clearInterval(interval);
  }, [frases]);

  const Frase = ({ frase }) => {
    return (
      <div style={{ color: "paleturquoise", fontSize: "12px" }}>{frase}</div>
    );
  };

  return (
    <>
      <div className="pixel-pet">
        <h1>PixelPet</h1>
      </div>

      {user == undefined ? <h2>Alimente seu PixelPet </h2> : user}

      <div className="Gif">
        <img src={gif} alt="Animação GIF" />
      </div>

      {fraseAtual && <Frase frase={fraseAtual} />}
    </>
  );
}
