import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import './../../styles/components/Sections.scss';

const SectionVisual = () => {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!spotlightRef.current) return;

    gsap.fromTo(
      spotlightRef.current,
      { x: '-75%'},
      {
        x: '75%',
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'none',
      }
    );

    const titleEl = sectionRef.current.querySelector('.__title');
    const introEl = sectionRef.current.querySelector('.__intro');

    if (!titleEl || !introEl) return;

    const splitTitle = new SplitType(titleEl, { types: 'words, chars' });
    const splitIntro = new SplitType(introEl, { types: 'words, chars' });

    gsap.timeline()
    .from(splitTitle.chars, {
      y: '100%',
      opacity: 0,
      stagger: 0.02,
      ease: 'back.out(1.7)',
      duration: 0.6,
    })
    .from(splitIntro.chars, {
      y: '100%',
      opacity: 0,
      stagger: 0.01,
      ease: 'back.out(1.7)',
      duration: 0.5,
    }, '<+0.3');
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
        <p className="__intro">기획 및 디자인 의도를 파악하고, <br className="br--mo-view" />더 나은 형태로 완성하는 <br/>웹퍼블리셔 최유준입니다.</p>
      </div>
      <div className="scroll-down"></div>
    </section>
  );
};

export default SectionVisual;
