import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

const dados = {
  login: "user",
  senha: "0000",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  console.log(parametro);

  // function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campo de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      navigate("/animais");
      // navigate(`/${login}`);
    } else {
      console.log("Login ou Senha Inválidos!");
    }
  };

  return (
    <>
      <h1 className="login">Login</h1>

      <form>
        <input
          type="text"
          placeholder="Digite seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginBottom: "35px" }}
        />
        <br />
        <button type="button" onClick={entrar}>
          Entrar
        </button>
        <h2 className="link">
          Ainda não é cadastrado? <Link to="/cadastro">Clique aqui.</Link>
        </h2>
      </form>
    </>
  );
}
