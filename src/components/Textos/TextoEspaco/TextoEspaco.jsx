import predio from "../../../assets/predio.jpeg";
import entrada from "../../../assets/entrada.jpeg";
import entrada2 from "../../../assets/entrada2.jpeg";
import header1 from "../../../assets/header1.jpeg";
import tablet from "../../../assets/tablet.jpeg";
import fotoinicio from "../../../assets/fotoinicio.jpg";
import impressora from "../../../assets/impresora.jpeg";
import useTextoEspacoAnimations from "./TextoEspacoAnimations"; // Importe o hook
import fotoinicio2 from "../../../assets/fotoinicio2.jpeg";
import ferramentas from "../../../assets/ferramentas.jpeg";
import doces from "../../../assets/doces.jpeg";
import header2 from '../../../assets/header2.jpeg';
import "./TextoEspaco.css";

function TextoEspaco() {
  useTextoEspacoAnimations(); // Ativa as animações ao carregar o componente

  return (
    <div className="mae-txt-espaco">
      <div className="container-txt-espaco-1">
        <h1 className="container-txt-h1-1">
          <mark className="mark-green">Espaço Crescer</mark>: Um Ambiente
          Aconchegante e Inspirador
        </h1>
        <div className="paragrafo-txt-espaco-1">
          <p className="texto-txt-espaco-1">
            Localizado em um prédio moderno em Sertãozinho/SP, o Espaço Crescer
            foi cuidadosamente projetado para oferecer um ambiente ideal para o
            crescimento pessoal e emocional. Desde sua inauguração em outubro de
            2020, o Crescer tem se destacado por seu compromisso em proporcionar
            um espaço que favorece a reflexão, a compreensão e o desenvolvimento
            dos seus clientes.
          </p>
        </div>
        <div className="paragrafo-txt-espaco-1">
          <p className="texto-txt-espaco-1">
            Ao entrar no Espaço Crescer, você é recebido por um ambiente
            acolhedor e confortável, onde a atmosfera é cuidadosamente
            controlada para garantir seu bem-estar. Equipado com ar
            condicionado, o local mantém uma temperatura agradável e propícia
            para a concentração e relaxamento durante as sessões.
          </p>
        </div>
      </div>
      <div className="containers-imgs">
        <div className="containers-img-div">
          <img className="containers-imgs-imgs" src={predio} alt="predio"></img>
        </div>
        <div className="containers-img-div">
          <img
            className="containers-imgs-imgs"
            src={entrada}
            alt="entrada"
          ></img>
        </div>
        <div className="containers-img-div">
          <img
            className="containers-imgs-imgs"
            src={entrada2}
            alt="entrada2"
          ></img>
        </div>
      </div>
      <div className="paragrafo-img-txt-espaco-1">
        <div className="container1-txt-espaco-1">
          <h1 className="container-txt-h1-2">Tecnologias</h1>
          <p className="texto-txt-espaco-1">
            O espaço é equipado com materiais qualificados para psicopedagogia,
            incluindo uma variedade de brinquedos didáticos e recursos
            tecnológicos que enriquecem o processo de ensino e aprendizagem.
            Estes materiais são utilizados para oferecer uma abordagem
            personalizada e eficaz, ajudando a tornar o processo terapêutico
            mais interativo e envolvente.
          </p>
        </div>
        <div className="container1-txt-espaco-1">
          <h1 className="container-txt-h1-2">Acomodação</h1>
          <p className="texto-txt-espaco-1">
            Para a psicanálise, o Espaço Crescer dispõe de uma área
            especialmente projetada para criar um ambiente íntimo e tranquilo.
            Este espaço é ideal para sessões de terapia, proporcionando um local
            seguro e confortável para a exploração profunda de questões
            emocionais e psíquicas.
          </p>
        </div>
        <div className="container1-txt-espaco-1">
          <h1 className="container-txt-h1-2">Tranquilidade</h1>
          <p className="texto-txt-espaco-1">
            Cada detalhe do Espaço Crescer foi pensado para oferecer um serviço
            de alta qualidade, com uma equipe de profissionais experientes e
            dedicados, prontos para apoiar você em sua jornada de
            desenvolvimento pessoal. Se você procura um local que combine
            conforto, inovação e um ambiente acolhedor, o Espaço Crescer é o
            lugar ideal para iniciar ou continuar seu processo de crescimento
            emocional e cognitivo.
          </p>
        </div>
      </div>
      <img className="img-header" src={header1} alt="header1"></img>
      <div className="galeria-img">
        <div className="containers-img-div-esquerda">
          <img
            className="containers-imgs-esquerda"
            src={tablet}
            alt="tablet"
          ></img>
        </div>
        <div className="containers-img-div-centro">
          <img
            className="containers-imgs-centro"
            src={fotoinicio}
            alt="fotoinicio"
          ></img>
        </div>
        <div className="containers-img-div-direita">
          <img
            className="containers-imgs-direita"
            src={impressora}
            alt="impressora"
          ></img>
        </div>
      </div>
      <div className="galeria-img">
        <div className="containers-img-div-esquerda">
          <img
            className="containers-imgs-esquerda"
            src={doces}
            alt="doces"
          ></img>
        </div>
        <div className="containers-img-div-centro">
          <img
            className="containers-imgs-centro"
            src={fotoinicio2}
            alt="fotoinicio2"
          ></img>
        </div>
        <div className="containers-img-div-direita">
          <img
            className="containers-imgs-direita"
            src={ferramentas}
            alt="ferramentas"
          ></img>
        </div>
      </div>
      <img className="img-header" src={header2} alt="header1"></img>
    </div>
  );
}

export default TextoEspaco;
