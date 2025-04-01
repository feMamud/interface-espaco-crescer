import { useState } from 'react';
import logo from '../../assets/logo-site.png';
import feMamud from '../../assets/feMamud.png';
import './Rodape.css';
import './RodapeTablet.css';
import './RodapeCelular.css';

function Rodape() {
  // Estado para controlar se o submenu de "Serviços" está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    // Rodapé do site
    <footer className="rodape">
      <div className="container-rodape">
        {/* Logo do Rodapé */}
        <div className="logo-rodape">
          <a href="/">
            <img src={logo} alt="Logo Crescer - Espaço Terapêutico e Psicopedagógico" />
          </a>
        </div>

        {/* Informações gerais do rodapé */}
        <div className="informacoes-rodape">
          <p className="texto-rodape">
            Crescer - Espaço Terapêutico e Psicopedagógico. Todos os direitos reservados.
          </p>
        </div>

        {/* Links de navegação no rodapé */}
        <div className="links-rodape">
          <ul>
            {/* Link para a página inicial */}
            <li><a href="/">Home</a></li>

            {/* Link para a página "Sobre" */}
            <li><a href="/espaco">Sobre</a></li>

            {/* Menu de Serviços - Usa o estado 'menuAberto' para controlar a visibilidade do submenu */}
            <li className="menu-servicos">
              <button
                onClick={() => setMenuAberto(!menuAberto)} // Alterna o estado 'menuAberto' ao clicar
                className="btn-servicos"
                aria-expanded={menuAberto} // Indica se o submenu está aberto
                aria-controls="submenu-servicos" // Relaciona o botão com o submenu
              >
                Serviços
              </button>
              {/* Submenu de Serviços, exibido quando 'menuAberto' é verdadeiro */}
              {menuAberto && (
                <ul className="submenu" id="submenu-servicos">
                  <li><a href="/psicopedagogia">Psicopedagogia</a></li>
                  <li><a href="/psicanalise">Psicanálise</a></li>
                </ul>
              )}
            </li>

            {/* Link para a página de contato */}
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Informações sobre o desenvolvedor */}
      <div className="desenvolvedor">
        <p>Desenvolvido por  
          <a href="https://www.linkedin.com/in/feMamud/" target="_blank" rel="noopener noreferrer">
            <img className="femamud" src={feMamud} alt="Perfil do desenvolvedor feMamud no LinkedIn" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
