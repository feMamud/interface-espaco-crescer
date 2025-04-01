import mateusRodrigues from "../../../assets/mateusRodrigues.png";
import acolhimento from "../../../assets/acolhimento.png";
import conhecimento from "../../../assets/conhecimento.png";
import experiencia from "../../../assets/experiencia.jpg";
import useTextoPsicaAnimations from "./TextoPsicaAnimations"; // Importe o hook
import "./TextoPsica.css";
import './TextoPsicaTablet.css';
import './TextoPsicaCelular.css';

function TextoPsica() {
  // Chame o hook dentro do componente
  useTextoPsicaAnimations();
  return (
    <div className="mae-TextoPsica">
      <div className="container-TextoPsica">
        <div className="paragrafo-TextoPsica-1">
          <h1 className="h1-TextoPsica-1">O que é a Psicanálise?</h1>
          <p className="p-TextoPsica-1">
          A psicanálise é uma abordagem terapêutica que explora o inconsciente para entender e tratar conflitos emocionais e 
                    psíquicos. Fundada por Sigmund Freud, ela utiliza técnicas como a livre associação e a análise dos sonhos para ajudar 
                    os indivíduos a descobrir e resolver questões profundas, promovendo autoconhecimento e alívio de sintomas.
          </p>
        </div>
        <div className="container-TextoPsica-2">
          <div className="paragrafo-TextoPsica-2">
            <h1 className="h1-TextoPsica-2">Mateus Gama Rodrigues </h1>
            <h1 className="h1-TextoPsica-3">Psicanalista </h1>
            <p className="p-TextoPsica-1">
            Mateus Gama Rodrigues é psicanalista filiado à Associação Brasileira de Psicanálise número 10.232 e Terapeuta 
                    familiar. Dedica-se em ajudar pessoas com traumas, preocupações, medos e dores emocionais por meio da terapia 
                    psicanalítica. Junto com o cliente percorre caminhos nos quais somos confrontados por questões pessoais, sociais e 
                    familiares. Palestra com temas de educação, psicanálise, saúde mental, empreendedorismo e experiencia pessoal.
            </p>
            <p className="p-TextoPsica-1">
            A psicanálise é uma abordagem que trabalha com o inconsciente e os padrões de comportamento e emoções reprimidas. 
                    Com a escuta terapêutica e a interpretação do simbolismo dos sonhos e da fala do cliente, a equipe do Crescer busca 
                    auxiliar o cliente a se compreender e lidar com suas emoções e traumas, possibilitando o seu crescimento pessoal.
            </p>
            
          </div>
          <div className="galeria-TextoPsica">
            <img
              className="img-TextoPsica-1"
              src={mateusRodrigues}
              alt="mateusRodrigues"
            ></img>
            <img
              className="img-TextoPsica-2"
              src={acolhimento}
              alt="acolhimento"
            ></img>
            <img
              className="img-TextoPsica-3"
              src={conhecimento}
              alt="conhecimento"
            ></img>
            <img
              className="img-TextoPsica-4"
              src={experiencia}
              alt="experiencia"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoPsica;
