import { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    const scrollbar = Scrollbar.init(el, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

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
    

    scrollbar.addListener(ScrollTrigger.update)
    ScrollTrigger.defaults({ scroller: el })
    return () => {
      scrollbar.destroy()
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <div id="scroll-wrap" ref={scrollRef}>
      {children}
    </div>
  )
}

export default ScrollWrapper;