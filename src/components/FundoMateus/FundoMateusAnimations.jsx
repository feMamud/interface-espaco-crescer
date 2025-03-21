import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useFundoMateusAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Cria um contexto de matchMedia para responsividade
    const mm = gsap.matchMedia();

    // Definições das animações para desktop (telas maiores que 768px)
    mm.add("(min-width: 768px)", () => {
      const h1Elements = [
        ".h1-fundoMateus-1",
        ".h1-fundoMateus-2",
        ".h1-fundoMateus-3",
        ".h1-fundoMateus-4",
        ".h1-fundoMateus-5",
      ];

      h1Elements.forEach((target) => {
        gsap.fromTo(
          target,
          {
            x: 0, // Posição inicial (sem movimento)
            opacity: 1, // Inicia com opacidade total
          },
          {
            x: -340, // Move para a esquerda
            opacity: 0.5, // Desaparece ao final da animação
            scrollTrigger: {
              trigger: target,
              start: "bottom center", // Inicia a animação quando o topo do elemento chegar ao centro da tela
              end: "bottom top", // Termina a animação quando o fundo do elemento chegar ao topo da tela
              scrub: 1, // A animação acompanha suavemente a rolagem
              markers: false, // Desative os marcadores para produção
              onComplete: () => {
                // Ação ao completar a animação
                console.log(`${target} desapareceu!`);
              },
            },
          }
        );
      });
    });

    // Definições das animações para tablet (telas entre 481px e 768px)
    mm.add("(min-width: 481px) and (max-width: 768px)", () => {
      const h1Elements = [
        ".h1-fundoMateus-1",
        ".h1-fundoMateus-2",
        ".h1-fundoMateus-3",
        ".h1-fundoMateus-4",
        ".h1-fundoMateus-5",
      ];

      h1Elements.forEach((target) => {
        gsap.fromTo(
          target,
          {
            x: 0,
            opacity: 1,
          },
          {
            x: -100, // Move menos em telas menores
            opacity: 0, // Desaparece ao final da animação
            scrollTrigger: {
              trigger: target,
              start: "top center",
              end: "bottom top",
              scrub: 1,
              markers: false,
              onComplete: () => {
                console.log(`${target} desapareceu!`);
              },
            },
          }
        );
      });
    });

    // Definições para telas menores que 480px (desativa as animações)
    mm.add("(max-width: 480px)", () => {
      // Nenhuma animação é aplicada
      console.log("Animações desativadas para telas menores que 480px");
    });

    // Limpeza quando o componente é desmontado
    return () => {
      mm.revert(); // Reverte todas as animações e listeners do matchMedia
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Limpa os ScrollTriggers
    };
  }, []);
};

export default useFundoMateusAnimations;