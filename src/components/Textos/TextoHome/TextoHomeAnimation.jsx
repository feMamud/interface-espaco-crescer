import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateTitle = (titleRef) => {
  gsap.from(titleRef.current, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: titleRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const animateText = (textRef) => {
  gsap.from(textRef.current, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: textRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
};

export const animateFrontEndText = (frontEndTitleRef) => {
  const letters = frontEndTitleRef.current.querySelectorAll('span');
  gsap.from(letters, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: frontEndTitleRef.current,
      start: 'top 85%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  });
};
