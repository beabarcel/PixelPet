import { useState } from "react";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleCadastro = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Ops, as senhas não correspondem.");
      return;
    }

    // Se chegou aqui, significa que o cadastro foi bem sucedido
    alert("Cadastro realizado!");

    setTimeout(() => {
      window.location.href = "/animais";
    });

    // Você pode querer limpar os campos do formulário aqui
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar senha:</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleCadastro}
          className="btn btn-primary"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
