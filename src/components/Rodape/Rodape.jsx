import { useState } from 'react';
import logo from '../../assets/logo-site.png';
import feMamud from '../../assets/feMamud.png';
import './Rodape.css';
import './RodapeTablet.css';
import './RodapeCelular.css';

function Rodape() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <footer className="rodape">
      <div className="container-rodape">
        <div className="logo-rodape">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="informacoes-rodape">
          <p className="texto-rodape">
            Crescer - Espaço Terapêutico e Psicopedagógico. Todos os direitos reservados.
          </p>
        </div>
        <div className="links-rodape">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/espaco">Sobre</a></li>
            <li className="menu-servicos">
              <button onClick={() => setMenuAberto(!menuAberto)} className="btn-servicos">Serviços</button>
              {menuAberto && (
                <ul className="submenu">
                  <li><a href="/psicopedagogia">Psicopedagogia</a></li>
                  <li><a href="/psicanalise">Psicanálise</a></li>
                </ul>
              )}
            </li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="desenvolvedor">
        <p>Desenvolvido por  
          <a href="https://www.linkedin.com/in/feMamud/" target="_blank" rel="noopener noreferrer">
            <img className="femamud" src={feMamud} alt="Desenvolvedor feMamud" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Rodape;