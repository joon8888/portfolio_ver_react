import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './../../styles/components/Sections.scss';

const SectionVisual = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!spotlightRef.current) return;

    gsap.fromTo(
      spotlightRef.current,
      { x: '-75%' },
      {
        x: '75%',
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'none',
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section section--visual">
      <div className="spotlight-area">
        <div className="spotlight" ref={spotlightRef}></div>
      </div>
      <div className='__inner'>
        <h2 className="__title">
          Better Web. <br />
          Smarter Interaction. <br />
          I make it react.
        </h2>
        <p className="__intro">기획 및 디자인 의도를 파악하고, 더 나은 형태로 완성하는 <br/>웹퍼블리셔 최유준입니다.</p>
      </div>
    </section>
  );
};

export default SectionVisual;
