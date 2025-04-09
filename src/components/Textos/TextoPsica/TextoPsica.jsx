import mateusRodrigues from "../../../assets/mateusRodrigues.png";
import acolhimento from "../../../assets/acolhimento.png";
import conhecimento from "../../../assets/conhecimento.png";
import experiencia from "../../../assets/experiencia.jpg";
import useTextoPsicaAnimations from "./TextoPsicaAnimations"; // Importe o hook
import "./TextoPsica.css";
import "./TextoPsicaTablet.css";
import "./TextoPsicaCelular.css";

function TextoPsica() {
  // Chame o hook dentro do componente
  useTextoPsicaAnimations();
  return (
    <div className="mae-TextoPsica">
      <div className="container-TextoPsica">
        <div className="paragrafo-TextoPsica-1">
          <h1 className="h1-TextoPsica-1">O que é a Psicanálise?</h1>
          <p className="p-TextoPsica-1">
            A Psicanálise é uma abordagem terapêutica dedicada à exploração do
            inconsciente, buscando compreender e tratar conflitos emocionais e
            psíquicos. Fundada pelo renomado Sigmund Freud, a técnica utiliza
            ferramentas como a livre associação e a análise dos sonhos para
            ajudar indivíduos a enfrentarem questões profundas, promovendo
            autoconhecimento e alívio de sintomas.{" "}
          </p>
        </div>
        <div className="container-TextoPsica-2">
          <div className="paragrafo-TextoPsica-2">
            <h1 className="h1-TextoPsica-2">Mateus Gama Rodrigues </h1>
            <h1 className="h1-TextoPsica-3">Psicanalista </h1>
            <p className="p-TextoPsica-1">
              Mateus Gama Rodrigues, psicanalista registrado na Associação
              Brasileira de Psicanálise (ABP) sob o número 10.232, também atua
              como terapeuta familiar. Sua missão é ajudar pessoas a superarem
              traumas, medos, preocupações e dores emocionais por meio da
              prática psicanalítica. Com empatia e comprometimento, ele guia
              seus clientes em um processo de reflexão e enfrentamento de
              desafios pessoais, sociais e familiares. Além de sua prática
              clínica, Mateus é palestrante em temas variados, como educação,
              saúde mental, psicanálise, empreendedorismo e experiências de
              vida. Suas palestras são inspiradoras e voltadas para promover
              entendimento e transformação.
            </p>
            <h1 className="h1-TextoPsica-2">A Psicanálise na prática: um caminho de crescimento pessoal
            </h1>
            <p className="p-TextoPsica-1">
              A Psicanálise se destaca por sua habilidade em trabalhar com o
              inconsciente, desvendando padrões de comportamento e emoções
              reprimidas. No Crescer, por meio da escuta terapêutica e da
              interpretação simbólica de sonhos e falas, ajudamos nossos
              clientes a se compreenderem de forma mais profunda. O objetivo é
              possibilitar que cada pessoa lide com suas emoções e traumas,
              abrindo caminho para o desenvolvimento e o crescimento pessoal.{" "}
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
