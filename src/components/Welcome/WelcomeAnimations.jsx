import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WelcomeAnimations(refs) {
  // Cria um contexto de matchMedia para responsividade
  const mm = gsap.matchMedia();

  // Definições para telas maiores que 480px
  mm.add('(min-width: 481px)', () => {
    // Animação do fundo ao rolar para baixo
    gsap.to(refs.fundo.current, {
      y: -200, // Move o fundo para cima
      scale: 1.1, // Leve zoom
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: refs.fundo.current,
        start: 'center center', // Quando o meio do fundo estiver no meio da tela
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animação para as imagens
    gsap.to(refs.images.map(ref => ref.current), {
      y: -150, // Move para cima
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2, // Saem em sequência
      scrollTrigger: {
        trigger: refs.images[0].current,
        start: 'top 34%',
        end: 'top',
        scrub: true,
      },
    });

    // Animação para os textos
    gsap.to(refs.texts.map(ref => ref.current), {
      y: -100,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: refs.texts[0].current,
        start: 'top 34%',
        end: 'top -10%',
        scrub: true,
      },
    });

    // Animação reversa ao rolar para cima
    gsap.to([...refs.images, ...refs.texts].map(ref => ref.current), {
      y: 0,
      scrollTrigger: {
        trigger: refs.images[0].current,
        start: 'bottom 20%',
        end: 'top center',
        scrub: true,
      },
    });
  });

  // Definições para telas menores que 480px (desativa as animações)
  mm.add('(max-width: 480px)', () => {
    // Não aplica nenhuma animação
    console.log('Animações desativadas para telas menores que 480px');
  });

  // Limpeza quando o componente é desmontado
  return () => {
    mm.revert(); // Reverte todas as animações e listeners do matchMedia
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Limpa os ScrollTriggers
  };
}