import React, { useState } from "react";
import "./Login.css";
import { login } from "../../api/auth";

function Login({ isOpen, onClose, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await login(email, password);
      if (success) {
        setErrorMessage("");
        setIsLoggedIn(true); // ✅ atualiza estado
        onClose(); // fecha modal
      } else {
        setErrorMessage("Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setErrorMessage("Erro ao tentar fazer login. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-modal">
        <h2 className="login-title">Login</h2>
        {errorMessage && <p className="login-error">{errorMessage}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Senha</label>
          <input
            className="login-input"
            type="password"
            placeholder="Digite sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">Entrar</button>
          <button className="login-button close-btn" type="button" onClick={onClose}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
