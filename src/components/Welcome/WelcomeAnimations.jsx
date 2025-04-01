import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WelcomeAnimations(refs) {
  const mm = gsap.matchMedia();

  // Definições para telas maiores que 1030px
  mm.add('(min-width: 1031px)', () => {
    // Animação do fundo ao rolar para baixo
    gsap.to(refs.fundo.current, {
      y: -200,
      scale: 1.1,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: refs.fundo.current,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animação para as imagens
    gsap.to(refs.images.map(ref => ref.current), {
      y: -150,
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.2,
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

    // Definições para telas maiores que 1030px
    mm.add('(min-width: 2048px) and (max-width: 3840px)', () => {
      // Animação do fundo ao rolar para baixo
      gsap.to(refs.fundo.current, {
        y: -200,
        scale: 1.1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: refs.fundo.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      });
  
      // Animação para as imagens
      gsap.to(refs.images.map(ref => ref.current), {
        y: -150,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.2,
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

  // Desativa animações para 1030px ou menos
  mm.add('(max-width: 1030px)', () => {
    console.log('Animações desativadas para telas até 1030px de largura');
    
    // Reseta todas as propriedades animadas
    gsap.set([
      refs.fundo.current,
      ...refs.images.map(ref => ref.current),
      ...refs.texts.map(ref => ref.current)
    ], {
      y: 0,
      scale: 1,
      opacity: 1
    });

    // Mata todos os ScrollTriggers relacionados
    ScrollTrigger.getAll().forEach(trigger => {
      if ([
        refs.fundo.current,
        ...refs.images.map(ref => ref.current),
        ...refs.texts.map(ref => ref.current)
      ].includes(trigger.trigger)) {
        trigger.kill();
      }
    });
  });

  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}