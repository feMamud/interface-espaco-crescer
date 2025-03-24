import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useTextoPsicaAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Cria um contexto de matchMedia para responsividade
    const mm = gsap.matchMedia();

    // Definições das animações para desktop (telas maiores que 768px)
    mm.add("(min-width: 768px)", () => {
      // Animação para o container-TextoPsica-2
      gsap.fromTo(
        ".container-TextoPsica-2",
        {
          y: 100, // Começa 100px acima da posição original
          opacity: 1, // Inicia invisível
        },
        {
          y: 0, // Retorna à posição original
          scrollTrigger: {
            trigger: ".container-TextoPsica-2",
            start: "top 100%", // Inicia a animação quando o topo do container chegar a 80% da viewport
            end: "top 30%", // Termina a animação quando o topo do container chegar a 30% da viewport
            scrub: 1, // A animação acompanha suavemente a rolagem
            markers: false, // Desative os marcadores para produção
          },
        }
      );

      // Animação para as imagens
      const images = [
        ".img-TextoPsica-1",
        ".img-TextoPsica-2",
        ".img-TextoPsica-3",
        ".img-TextoPsica-4",
      ];

      images.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            y: 100, // Começa 100px acima da posição original
            opacity: 1, // Inicia invisível
          },
          {
            y: 0, // Retorna à posição original
            scrollTrigger: {
              trigger: target,
              start: "top 100%", // Inicia a animação quando o topo da imagem chegar a 80% da viewport
              end: "top 100%", // Termina a animação quando o topo da imagem chegar a 30% da viewport
              scrub: 1, // A animação acompanha suavemente a rolagem
              markers: false, // Desative os marcadores para produção
            },
          }
        );
      });
    });

    // Definições das animações para tablet (telas entre 481px e 768px)
    mm.add("(min-width: 481px) and (max-width: 768px)", () => {
      // Animação para o container-TextoPsica-2
      gsap.fromTo(
        ".container-TextoPsica-2",
        {
          y: -50, // Começa 50px acima da posição original
          opacity: 0, // Inicia invisível
        },
        {
          y: 0, // Retorna à posição original
          opacity: 1, // Torna-se visível
          scrollTrigger: {
            trigger: ".container-TextoPsica-2",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            markers: false,
          },
        }
      );

      // Animação para as imagens
      const images = [
        ".img-TextoPsica-1",
        ".img-TextoPsica-2",
        ".img-TextoPsica-3",
        ".img-TextoPsica-4",
      ];

      images.forEach((target, index) => {
        gsap.fromTo(
          target,
          {
            y: -50, // Começa 50px acima da posição original
            opacity: 0, // Inicia invisível
          },
          {
            y: 0, // Retorna à posição original
            opacity: 1, // Torna-se visível
            scrollTrigger: {
              trigger: target,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              markers: false,
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

export default useTextoPsicaAnimations;