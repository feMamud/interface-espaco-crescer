import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { WelcomeAnimations } from './WelcomeAnimations'; // Importa animações
import fundo from '../../assets/fundo-welcome.jpg';
import logosozinha from '../../assets/logosozinha.png';
import r from '../../assets/r.png';
import e from '../../assets/e.png';
import s from '../../assets/s.png';
import c from '../../assets/c.png';
import './Welcome.css';

function Welcome() {
  const refs = {
    fundo: useRef(null), // Fundo
    images: [
      useRef(null), // Logo sozinha
      useRef(null), useRef(null), useRef(null), // R, E, S
      useRef(null), useRef(null), useRef(null), // C, E2, R2
    ],
    texts: [useRef(null), useRef(null), useRef(null), useRef(null)] // H1s
  };

  useGSAP(() => {
    WelcomeAnimations(refs); // Aplica as animações separadas
  }, []);

  return (
    <div className='mae-welcome'>
      <div className='container-welcome'>
        <div className='boas-vindas'>
          {/* Fundo com animação */}
          <img src={fundo} alt='Fundo' className='img-fundo-welcome' ref={refs.fundo} />

          <div className='letras-logo-welcome'>
            <img src={logosozinha} alt='Logo' className='img-logosozinha-welcome' ref={refs.images[0]} />
            <img src={r} alt='R' className='img-r-welcome' ref={refs.images[1]} />
            <img src={e} alt='E' className='img-e-welcome' ref={refs.images[2]} />
            <img src={s} alt='S' className='img-s-welcome' ref={refs.images[3]} />
            <img src={c} alt='C' className='img-c-welcome' ref={refs.images[4]} />
            <img src={e} alt='E2' className='img-e-2-welcome' ref={refs.images[5]} />
            <img src={r} alt='R2' className='img-r-2-welcome' ref={refs.images[6]} /> 

            <h1 className='h1-1-letras-welcome' ref={refs.texts[0]}>Espaço</h1>
            <h1 className='h1-2-letras-welcome' ref={refs.texts[1]}>Terapêutico</h1>
            <h1 className='h1-3-letras-welcome' ref={refs.texts[2]}>e</h1>
            <h1 className='h1-4-letras-welcome' ref={refs.texts[3]}>Psicopedagógico</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
