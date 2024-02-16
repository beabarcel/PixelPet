import { useState } from "react";
import cat from "./imagens/cat.png";
import leite from "./imagens/leite.png";
import picole from "./imagens/picole.png";
import panqueca from "./imagens/panqueca.png";
import "./style.css";

function Index() {
  const [fraseAtual, setFraseAtual] = useState(null);
  const frases = {
    [leite]: "Glub glub glub",
    [picole]: "Oba! Eu adoro picolé de morango!",
    [panqueca]: "Hummm, que panqueca gostosa!",
    [cat]: "Miau. Eu sou o PixelMiau!",
  };

  const handleClick = (src) => {
    setFraseAtual(frases[src]);
  };

  return (
    <div className="comida">
      <img
        className="comida"
        src={leite}
        alt="Leitinho"
        onClick={() => handleClick(leite)}
        onMouseOver={() => handleMouseOver(leite)}
        onMouseOut={() => handleMouseOut(leite)}
      />
      <img
        className="comida"
        src={picole}
        alt="Picolé"
        onClick={() => handleClick(picole)}
        onMouseOver={() => handleMouseOver(picole)}
        onMouseOut={() => handleMouseOut(picole)}
      />
      <img
        className="comida"
        src={panqueca}
        alt="Panqueca"
        onClick={() => handleClick(panqueca)}
        onMouseOver={() => handleMouseOver(panqueca)}
        onMouseOut={() => handleMouseOut(panqueca)}
      />
      <img
        className="cat"
        src={cat}
        alt="Gatinho"
        onClick={() => handleClick(cat)}
      />

      {fraseAtual && <div>{fraseAtual}</div>}
    </div>
  );
}

export default Index;
