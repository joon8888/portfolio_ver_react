import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SectionSkill = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
  
    const titleArea = section.querySelector('.title-wrap')
    const contentArea = section.querySelector('.content-wrap')
    const cols = section.querySelectorAll('.__content--column')
  
    requestAnimationFrame(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 769px)': function () {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '+=450%',
              pin: true,
              scrub: true,
            },
            defaults: { duration: 2 },
          })
  
          tl
            .to(titleArea, { x: '-65vw', duration: 3.5 })
            .to(contentArea, { x: '-65vw', duration: 3.5 }, '<')
            .to(cols[0], { y: '25%', duration: 3.5 }, '<')
            .to(cols[1], { y: '45%', duration: 3.5 }, '<')
            .to(cols[2], { y: '15%', duration: 3.5 }, '<')
            .to(cols[3], { y: '60%', duration: 3.5 }, '<')
        },
        '(max-width: 768px)': function () {
            const columns = gsap.utils.toArray(cols);
            const style = [
                { start: -50, end: 50 },
                { start: 50, end: -50 },
                { start: -50, end: 50 },
                { start: 50, end: -50 },
            ];
            if (!columns) return;

            columns.forEach((col, i) => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: '.__inner--grid',
                  start: 'top 75%',
                  end: 'bottom 25%',
                  scrub: true,
                },
              });

              tl.fromTo(col, { x: i % 2 === 0 ? 50 : -50 }, { x: i % 2 === 0 ? -50 : 50  });
            });
        },
      })
    })
  }, [])
  

  return (
    <section className="section section--skill" ref={sectionRef}>
          <div className="__inner">
            <div className="title-wrap">
              <h2 className="__title">WORK SKILLS</h2>
              <p className="__intro">단순히 구현하지 않습니다. <br/>접근성과 코드 모듈화를 함께 고민합니다.</p>
            </div>
            <div className="content-wrap">
              <div className="__inner--grid">
                <div className="__content--column">
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="images/skill_bg_1.png" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--flip">
                    <div className="__inner--flip">
                      <div className="image__front">
                        <h3 className="image__front__title">Accessibility</h3>
                      </div>
                      <div className="image__back">
                        <p className="image__back__content">웹접근성 준수</p>
                      </div>
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--flip">
                    <div className="__inner--flip">
                      <div className="image__front">
                        <h3 className="image__front__title">Accessibility</h3>
                      </div>
                      <div className="image__back">
                        <p className="image__back__content">웹접근성 준수</p>
                      </div>
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="images/skill_bg_2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="__content--column">
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="images/skill_bg_2.png" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="images/skill_bg_3.png" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--flip">
                    <div className="__inner--flip">
                      <div className="image__front">
                        <h3 className="image__front__title">Accessibility</h3>
                      </div>
                      <div className="image__back">
                        <p className="image__back__content">웹접근성 준수</p>
                      </div>
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
                <div className="__content--column">
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--flip">
                    <div className="__inner--flip">
                      <div className="image__front">
                        <h3 className="image__front__title">Accessibility</h3>
                      </div>
                      <div className="image__back">
                        <p className="image__back__content">웹접근성 준수</p>
                      </div>
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
                <div className="__content--column">
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--flip">
                    <div className="__inner--flip">
                      <div className="image__front">
                        <h3 className="image__front__title">Accessibility</h3>
                      </div>
                      <div className="image__back">
                        <p className="image__back__content">웹접근성 준수</p>
                      </div>
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="__content--column__image __content--column__image--static">
                    <div className="image__front">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SectionSkill;
