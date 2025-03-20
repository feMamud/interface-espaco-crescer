import { Link } from 'react-router-dom'; // Se estiver usando React Router
import logo from '../../assets/logo-site.png';
import feMamud from '../../assets/feMamud.png';
import './Rodape.css';

function Rodape() {
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
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
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
