import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const bgImages = [
  'images/intro_bg_1.png',
  'images/intro_bg_2.png',
  'images/intro_bg_3.png',
  'images/intro_bg_4.png',
  'images/intro_bg_5.png',
];

const polygons = [
  'polygon(50% 50%, 50% 50%, 50% 50%)',
  'polygon(55% -15%, -5% 75%, 105% 105%)',
  'polygon(22% -5%, -5% 105%, 105% 46%)',
  'polygon(-5% 30%, 79% 105%, 90% -5%)',
  'polygon(32% -10%, 10% 105%, 105% 60%)',
  'polygon(-50% -100%, 10% 200%, 200% 60%)',
];

const ScrollWrapper = ({ children, isScrollLocked }) => {
  const scrollRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const scrollbar = Scrollbar.init(el, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: false,
    });
    scrollbarRef.current = scrollbar;

    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value) {
        if (arguments.length) scrollbar.scrollTop = value;
        return scrollbar.scrollTop;
      },
      scrollLeft(value) {
        if (arguments.length) scrollbar.scrollLeft = value;
        return scrollbar.scrollLeft;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    scrollbar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: el });

    return () => {
      scrollbar.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const scrollbar = scrollbarRef.current;
    if (!scrollbar) return;
  
    const preventScroll = (e) => {
      if (isScrollLocked) {
        scrollbar.setMomentum(0, 0);
        e.preventDefault();
      }
    };
  
    if (isScrollLocked) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    }
  
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isScrollLocked]);
  

  useEffect(() => {
    const el = scrollRef.current;
    const bg1 = document.querySelector('.intro-bg--1');
    const bg2 = document.querySelector('.intro-bg--2');
    let index = 1;
    let isBg1Active = true;

    const switchBg = () => {
      if (index < bgImages.length) {
        const url = bgImages[index];
        const activeEl = isBg1Active ? bg1 : bg2;
        const inactiveEl = isBg1Active ? bg2 : bg1;

        activeEl.style.backgroundImage = `url(${url})`;
        activeEl.classList.add('is-active');
        inactiveEl.classList.remove('is-active');

        isBg1Active = !isBg1Active;
      } else {
        bg1.classList.remove('is-active');
        bg2.classList.remove('is-active');
        document.querySelector('.intro-bg-wrap')?.classList.add('is-fadeout');
      }
    };

    gsap.set(el, {
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%)',
    });

    switchBg();

    gsap.to(el, {
      clipPath: polygons[index],
      duration: 1,
      ease: 'power2.inOut',
    });

    index++;

    const loop = setInterval(() => {
      if (index < polygons.length) {
        gsap.to(el, {
          clipPath: polygons[index],
          duration: 1,
          ease: 'power2.inOut',
        });

        switchBg();
        index++;
      } else {
        clearInterval(loop);
        window.dispatchEvent(new Event('intro-end'));
        gsap.to(el, {
          clipPath: 'none',
          duration: 1,
          onComplete: () => {
            // window.dispatchEvent(new Event('intro-end')); 
            document.querySelector('.intro-bg-wrap')?.remove();
          },
        });
      }
    }, 1000);
  }, []);

  return (
    <div id="scroll-wrap" ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
