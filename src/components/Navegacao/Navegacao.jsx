import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import './Navegacao.css';

function Navegacao() {
  const [scrolled, setScrolled] = useState(false); // Estado para monitorar a rolagem
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu de hambúrguer

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true); // Define scrolled como true se a rolagem for maior que 50 pixels
    } else {
      setScrolled(false); // Define scrolled como false caso contrário
    }
  };

  // Adiciona um event listener para monitorar a rolagem da página
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para alternar o menu de hambúrguer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define classes para o navbar com base no estado scrolled
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" /> {/* Imagem do logotipo */}
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {/* Botão de hambúrguer */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Links de navegação */}
          <li><a href="./">Início</a></li>
          <li><a href="./Espaco">O Espaço</a></li>
          <li><a href="./Psicopedagogia">Psicopedagogia</a></li>
          <li><a href="./Psicanalise">  Psicanálise</a></li>
          <li><a href="./Contatos">Contato</a></li>
          <li><a href="./Eventos">Eventos</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navegacao; // Exporta o componente Navegacao
