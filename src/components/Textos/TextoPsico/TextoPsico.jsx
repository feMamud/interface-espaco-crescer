import fotomaria from "../../../assets/fotomaria.png";
import aprendizagem from "../../../assets/aprendizagem.png";
import compreensao from "../../../assets/compreensao.png";
import desenvolvimento from "../../../assets/desenvolvimento.jpeg";
import useTextoPsicoAnimations from "./TextoPsicoAnimations"; // Importe o hook
import "./TextoPsico.css";
import './TextoPsicoTablet.css';
import './TextoPsicoCelular.css';

function TextoPsico() {
  // Chame o hook dentro do componente
  useTextoPsicoAnimations();
  return (
    <div className="mae-textopsico">
      <div className="container-textopsico">
        <div className="paragrafo-textopsico-1">
          <h1 className="h1-textopsico-1">O que é a Psicopedagogia?</h1>
          <p className="p-textopsico-1">
            A psicopedagogia estuda os processos de aprendizagem, buscando
            identificar e tratar dificuldades cognitivas e emocionais. Ela
            combina educação e psicologia para melhorar o desenvolvimento e o
            bem-estar do aluno, promovendo estratégias eficazes de ensino e
            aprendizado.
          </p>
        </div>
        <div className="container-textopsico-2">
          <div className="paragrafo-textopsico-2">
            <h1 className="h1-textopsico-2">Maria Mamud </h1>
            <h1 className="h1-textopsico-3">Psicopedagoga </h1>
            <p className="p-textopsico-1">
              A psicopedagoga Maria Mamud é formada em Pedagogia pela UNIP,
              pós-graduada em Psicopedagogia Clínica e Institucional pela
              FATECE, possui MBA em Gestão Escolar pela USP ESALQ. Atua com
              dificuldades de aprendizagem e palestras.
            </p>
            <p className="p-textopsico-1">
              A psicopedagogia é um dos serviços oferecidos pelo Crescer,
              voltado para crianças, adolescentes e adultos com dificuldades de
              aprendizagem, transtornos de atenção, dislexia, discalculia, entre
              outros. Através de técnicas específicas, os profissionais do
              Crescer auxiliam o cliente a superar suas dificuldades,
              contribuindo para a melhoria do desempenho acadêmico e pessoal.
            </p>
            
          </div>
          <div className="galeria-textopsico">
            <img
              className="img-textopsico-1"
              src={fotomaria}
              alt="fotomaria"
            ></img>
            <img
              className="img-textopsico-2"
              src={aprendizagem}
              alt="aprendizagem"
            ></img>
            <img
              className="img-textopsico-3"
              src={compreensao}
              alt="compreensao"
            ></img>
            <img
              className="img-textopsico-4"
              src={desenvolvimento}
              alt="desenvolvimento"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoPsico;
