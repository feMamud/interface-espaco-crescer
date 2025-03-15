import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateTitle, animateText, animateFrontEndText } from './TextoHomeAnimation'; // Importando as animações
import './TextoHome.css';

function TextoHome() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const frontEndTitleRef = useRef(null);

  useGSAP(() => {
    animateTitle(titleRef);
    animateText(textRef);
    animateFrontEndText(frontEndTitleRef);
  }, []);

  const splitText = (text) =>
    text.split('').map((char, index) => (
      <span key={index} style={{ display: 'inline-block' }}>{char}</span>
    ));

  return (
    <div className='mae-txt-home-1'>
      <div className='container-txt-home-1'>
        <h1 className='titulo-txt-home-1' ref={titleRef}>
          Sobre mim:
        </h1>
        <p className='texto1-txt-home-1' ref={textRef}>
          Um ambiente seguro e acolhedor, onde indivíduos podem se expressar livremente e trabalhar em questões emocionais, psicológicas e psicopedagógicas.
        </p>
      </div>
      <div className='container2-txt-home-1'>
        <h1 className='titulo-txt-home-2' ref={frontEndTitleRef}>
          {splitText('Crescer')}
        </h1>
      </div>
      <div className='container-txt-home-1'>
        <p className='texto2-txt-home-1'>
          Crescer é um espaço de cuidado, onde profissionais especializados oferecem suporte e orientação para ajudar as pessoas a lidar com seus problemas e desafios. 
          Estamos aqui para te auxiliar em questões como ansiedade, depressão, estresse, traumas, relacionamentos, dificuldades de aprendizado e muito mais.
        </p>
      </div>
    </div>
  );
}

export default TextoHome;
