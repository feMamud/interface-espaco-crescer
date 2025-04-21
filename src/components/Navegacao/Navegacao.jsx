import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    async function checkLogin() {
      const profile = await getProfile();
      setIsLoggedIn(!!profile);
    }

    checkLogin();
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsLoggedIn(false);
      window.location.reload();
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

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} setIsLoggedIn={setIsLoggedIn} />
    </nav>
  );
}

export default Navegacao;
