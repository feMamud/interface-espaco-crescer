import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ IMPORTAÇÃO NECESSÁRIA
import logo from "../../assets/logo.png";
import "./Navegacao.css";
import "./NavegacaoTablet.css";
import "./NavegacaoCelular.css";
import Login from "../Login/Login";
import { getProfile, logout } from "../../api/auth";

function Navegacao() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook do react-router para navegação programática

  // Verifica o estado de login ao carregar a página
  useEffect(() => {
    async function checkLogin() {
      const profile = await getProfile();
      setIsLoggedIn(!!profile);
    }

    checkLogin();
  }, []);

  // Função que lida com o scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  // Configura o evento de scroll para adicionar ou remover a classe 'scrolled'
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Alterna o menu hamburguer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Função de logout
  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsLoggedIn(false);
      // Redireciona para a página inicial após logout
      navigate("/");
    }
  };

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`bar ${scrolled ? "scrolled" : ""}`}></div>
          <div className={`bar ${scrolled ? "scrolled" : ""}`}></div>
          <div className={`bar ${scrolled ? "scrolled" : ""}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/espaco">O Espaço</Link></li>
          <li><Link to="/psicopedagogia">Psicopedagogia</Link></li>
          <li><Link to="/psicanalise">Psicanálise</Link></li>
          <li><Link to="/contato">Contato</Link></li>

          {!isLoggedIn ? (
            <li><a href="#" onClick={() => setIsLoginOpen(true)}>Login</a></li>
          ) : (
            <>
              <li><Link to="/organizacao">Organização</Link></li>
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </>
          )}
        </ul>
      </div>

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        setIsLoggedIn={setIsLoggedIn} // Passando a função para atualizar o estado de login no componente Login
      />
    </nav>
  );
}

export default Navegacao;
