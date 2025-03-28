import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useTextoHomeAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Cria um contexto de matchMedia para responsividade
    const mm = gsap.matchMedia();

    // Definições das animações para desktop (telas maiores que 768px)
    mm.add('(min-width: 768px)', () => {
      const animations = [
        {
          target: '.foto-inicio-1',
          y: '40vh', // Move 40% da altura da viewport
          start: 'center center',
          end: 'bottom top',
        },
        {
          target: '.foto-inicio-2',
          y: '70vh', // Move 70% da altura da viewport
          start: 'bottom bottom',
          end: 'bottom top',
        },
      ];

      animations.forEach(({ target, y, start, end }) => {
        gsap.to(target, {
          y,
          scrollTrigger: {
            trigger: target,
            start,
            end,
            scrub: 1,
            markers: false, // Desative os marcadores para produção
          },
        });
      });
    });

    // Definições das animações para tablet (telas entre 481px e 768px)
    mm.add('(min-width: 481px) and (max-width: 768px)', () => {
      const animations = [
        {
          target: '.foto-inicio-1',
          y: '20vh', // Move menos em telas menores
          start: 'top center',
          end: 'center top',
        },
        {
          target: '.foto-inicio-2',
          y: '162vh', // Move mais em telas menores
          start: 'top bottom',
          end: 'center top',
        },
      ];

      animations.forEach(({ target, y, start, end }) => {
        gsap.to(target, {
          y,
          scrollTrigger: {
            trigger: target,
            start,
            end,
            scrub: 1,
            markers: false, // Desative os marcadores para produção
          },
        });
      });
    });

    // Definições para telas menores que 480px (desativa as animações)
    mm.add('(max-width: 480px)', () => {
      // Nenhuma animação é aplicada
      console.log('Animações desativadas para telas menores que 480px');
    });

    // Limpeza quando o componente é desmontado
    return () => {
      mm.revert(); // Reverte todas as animações e listeners do matchMedia
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Limpa os ScrollTriggers
    };
  }, []);
};

export default useTextoHomeAnimations;