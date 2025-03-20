import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useTextoEspacoAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.containers-img-div', {
      y: '50vh', // Move as imagens para baixo conforme o scroll
      opacity: 1, // Garante que as imagens aparecem suavemente
      scrollTrigger: {
        trigger: '.containers-imgs',
        start: 'top bottom', // Quando o topo do contêiner entrar na tela
        end: 'center center', // Quando o contêiner sair da tela
        scrub: 1, // Suaviza o movimento com o scroll
        markers: false, // Ative para depuração
      },
      stagger: 0.03, // Adiciona um atraso entre cada animação (0.3s)
    });

    gsap.to('.containers-imgs-esquerda', {
        x: '-30vw', // Move a imagem para a esquerda
        scrollTrigger: {
          trigger: '.galeria-img',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
      });
  
      gsap.to('.containers-imgs-direita', {
        x: '30vw', // Move a imagem para a direita
        scrollTrigger: {
          trigger: '.galeria-img',
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
      });
  

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default useTextoEspacoAnimations;
