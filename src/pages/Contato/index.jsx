import { useNavigate } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contato = () => {
  const navigate = useNavigate();
  const parametro = "Página de contato";

  const handleClickBotao1 = () => {
    window.location.href = "mailto:bcardozo@faeterj-petropolis.edu.br?subject=";
    console.log("Redirecionado(a) para enviar e-mail.");
  };

  const handleClickBotao2 = () => {
    window.location.href = "https://github.com/beabarcel";
    console.log("Redirecionado(a) para o Github.");
  };

  const handleClickBotao3 = () => {
    window.location.href = "tel:+55024998516554";
    console.log("Redirecionado(a) para o Whatsapp.");
  };

  navigate("/contato/" + parametro);

  return (
    <>
      <h1 className="contato">Contato</h1>
      <button onClick={handleClickBotao1}>
        <FontAwesomeIcon
          icon={faEnvelope}
          title="E-mail"
          beat
          style={{ color: "skyblue" }}
        />
      </button>

      <button onClick={handleClickBotao2}>
        <FontAwesomeIcon
          icon={faGithub}
          title="GitHub"
          beat
          style={{ color: "white" }}
        />
      </button>

      <button onClick={handleClickBotao3}>
        <FontAwesomeIcon
          icon={faWhatsapp}
          title="WhatsApp"
          beat
          style={{ color: "palegreen" }}
        />
      </button>
    </>
  );
};

export default Contato;
