import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useTextoEspacoAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // 🔹 Animações padrão para telas maiores que 700px (excluindo 300px - 700px)
    mm.add("(min-width: 701px)", () => {
      const animacoesPadrao = [
        gsap.to('.containers-img-div', {
          y: '50vh',
          opacity: 1,
          scrollTrigger: {
            trigger: '.containers-imgs',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
          stagger: 0.03,
        }),

        gsap.to('.containers-imgs-esquerda', {
          x: '-30vw',
          scrollTrigger: {
            trigger: '.galeria-img',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }),

        gsap.to('.containers-imgs-direita', {
          x: '30vw',
          scrollTrigger: {
            trigger: '.galeria-img',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        }),
      ];

      // Função de limpeza quando sair dessa resolução
      return () => {
        animacoesPadrao.forEach(anim => anim.kill());
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    // 🔹 Animação específica para telas entre 300px e 700px (da esquerda para a direita)
    mm.add("(min-width: 300px) and (max-width: 700px)", () => {
      const animEspecifica = gsap.fromTo(
        ".containers-img-div",
        { x: "-100%", opacity: 0 }, // Começa fora da tela à esquerda
        {
          x: 0, // Chega na posição original
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".containers-imgs",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          stagger: 0.1,
        }
      );

      // 🔹 Remover qualquer transformação aplicada pelas animações padrão
      gsap.set([".containers-imgs-esquerda", ".containers-imgs-direita"], { x: 0 });

      // Função de limpeza quando sair dessa resolução
      return () => {
        animEspecifica.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => {
      mm.revert(); // Remove todas as animações definidas pelo matchMedia
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export default useTextoEspacoAnimations;
