// TextoHome.js

import TextoHomeAnimations from "./TextoHomeAnimation"; // Importando a animação
import FotoInicio from "../../../assets/fotoinicio.jpg";
import FotoInicio2 from "../../../assets/fotoinicio2.jpeg";
import "./TextoHome.css";

function TextoHome() {
  return (
    <div className="mae-txt-home">
      <TextoHomeAnimations /> {/* Aqui está a chamada da animação */}
      <div className="container-txt-home-1">
        <h1 className="titulo-txt-home-1">
          Crescer - Espaço Terapêutico e Psicopedagógico
        </h1>
        <p className="texto1-txt-home-1">
          Um ambiente seguro e acolhedor, onde indivíduos podem se expressar
          livremente e trabalhar em questões emocionais, psicológicas e{" "}
          <mark className="mark-blue">psicopedagógicas</mark>.
        </p>
        <p className="texto2-txt-home-1">
          <mark className="mark-blue">Crescer</mark> é um espaço de cuidado,
          onde profissionais especializados oferecem suporte e orientação para
          ajudar as pessoas a lidar com seus problemas e desafios.
        </p>
        <p className="texto2-txt-home-1">
          Estamos aqui para te auxiliar em questões como{" "}
          <mark className="mark-blue">ansiedade</mark>,{" "}
          <mark className="mark-blue">depressão</mark>,{" "}
          <mark className="mark-blue">estresse</mark>,{" "}
          <mark className="mark-blue">traumas</mark>,{" "}
          <mark className="mark-blue">relacionamentos</mark>, dificuldades de{" "}
          <mark className="mark-blue">aprendizado</mark> e muito mais.
        </p>
      </div>
      {/* Imagem com animação */}
      <img src={FotoInicio} alt="foto-inicio-1" className="foto-inicio-1" />
      <div className="container-txt-home-2">
        <p className="texto2-txt-home-1">
          Nosso objetivo é proporcionar um espaço em que cada pessoa se sinta
          ouvida, compreendida e apoiada em suas necessidades específicas.
          Sabemos que cada jornada é única, e por isso, oferecemos uma abordagem
          personalizada para cada caso, respeitando o tempo e o ritmo de cada
          indivíduo.
        </p>
        <p className="texto2-txt-home-1">
          Além disso, acreditamos que o cuidado terapêutico e psicopedagógico é
          essencial para o desenvolvimento integral do ser humano, abordando não
          apenas as questões emocionais, mas também as{" "}
          <mark className="mark-blue">cognitivas</mark> e{" "}
          <mark className="mark-blue">comportamentais</mark>. A intervenção em
          diferentes níveis permite uma{" "}
          <mark className="mark-blue">recuperação</mark> mais eficaz e uma
          melhora significativa no <mark className="mark-blue">bem-estar</mark>{" "}
          e na <mark className="mark-blue">qualidade de vida</mark>.
        </p>
      </div>
      {/* Imagem com animação */}
      <img src={FotoInicio2} alt="exemplo-foto" className="foto-inicio-2" />
    </div>
  );
}

export default TextoHome;
