import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import ProjectItem from '../items/ProjectItem';


gsap.registerPlugin(ScrollTrigger)

const tagFilters = ['All', '구축', '운영', '웹접근성마크 획득', '웹어워드 수상'];
const projectMockData = [
  {
    id: 1,
    title: 'KT닷컴 사이트 운영<br>상품/혜택 담당',
    period: '2025.05 - 2025.07',
    image: 'images/project_kt.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 2,
    title: '삼성웰스토리 사이트 <br>리뉴얼 구축',
    period: '2024.09 - 2025.05',
    image: 'images/project_welstory.png',
    tags: [
      { label: '구축' },
      { label: '리뉴얼' },
      { label: '웹접근성마크 획득', className: 'project-tag__item--green' },
    ],
  },
  {
    id: 3,
    title: '라로슈포제 사이트 운영',
    period: '2022.12 - 2025.04',
    image: 'images/project_laro.png',
    tags: [
      { label: '운영' },
      { label: 'E커머스' },
    ],
  },
  {
    id: 4,
    title: 'Emart 스타필드마켓<br>모바일 웹/앱 신규 구축',
    period: '2024.08 - 2024.09',
    image: 'images/project_emart.png',
    tags: [
      { label: '구축' },
      { label: '신규' },
    ],
  },
  {
    id: 5,
    title: 'IFC MALL 사이트 운영',
    period: '2023.10 - 2025.05',
    image: 'images/project_ifcmall_2.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 6,
    title: 'IFC MALL 사이트 리뉴얼',
    period: '2023.07 - 2023.10',
    image: 'images/project_ifcmall.png',
    tags: [
      { label: '구축' },
      { label: '리뉴얼' },
      { label: '웹어워드 수상', className: 'project-tag__item--red' },
    ],
  },
  {
    id: 7,
    title: '삼천리 자전거 사이트 3종 운영<br>브랜드 / B2B / 삼바몰',
    period: '2023.10 - 2024.12',
    image: 'images/project_samchuly.png',
    tags: [
      { label: '운영' },
      { label: 'E커머스' },
      { label: '별도건' },
    ],
  },
  {
    id: 8,
    title: '파라다이스그룹 사이트 운영',
    period: '2022.02 - 2023.12',
    image: 'images/project_paradise.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 9,
    title: '파라다이스카지노 사이트 운영',
    period: '2022.02 - 2023.12',
    image: 'images/project_casino.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 10,
    title: '신세계 시그나이트파트너스 <br>사이트 운영',
    period: '2023.07 - 2023.11',
    image: 'images/project_signite.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 11,
    title: '신세계 인터내셔날<br>사이트 운영',
    period: '2022.02 - 2024.03',
    image: 'images/project_sikorea.png',
    tags: [
      { label: '운영' },
    ],
  },
  {
    id: 12,
    title: '천재교육 과학차시 콘텐츠 개발',
    period: '2022.02 - 2022.10',
    image: 'images/project_chunjae.png',
    tags: [
      { label: '리뉴얼' },
      { label: '구축' },
    ],
  },
]
const SectionProject = ({isPopupVisible, onPopupOpen}) => {
  const sectionRef = useRef(null);
  const [activeTag, setActiveTag] = useState('All');
  const filteredProjects = projectMockData.filter(project =>
    activeTag === 'All' || project.tags.some(tag => tag.label === activeTag)
  );

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
  
    ScrollTrigger.getAll()
    .filter(t => section.contains(t.trigger))
    .forEach(t => t.kill())

    ScrollTrigger.refresh()

    requestAnimationFrame(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 769px)': function () {
          // 스크롤 트리거 새로 등록
          const $inner = section.querySelector('.__inner')
          const $scrollWrap = section.querySelector('.project-scroll-wrap')
          const projectListItems = gsap.utils.toArray('.project-list__item')
          if (!$inner || !$scrollWrap || projectListItems.length === 0) return;
      
          function getScrollAmount() {
            return -($scrollWrap.scrollWidth - window.innerWidth)
          }

          ScrollTrigger.getById('prj')?.kill()
  
          const projectListTween = gsap.to($scrollWrap, {
            x: getScrollAmount,
            duration: 3,
            ease: 'none',
          })
  
          ScrollTrigger.create({
            id: 'prj',
            trigger: $inner,
            start: 'top top',
            end: () => `+=${getScrollAmount() * 2.2 * -1}`,
            pin: true,
            animation: projectListTween,
            scrub: true,
            invalidateOnRefresh: true,
          })
      
          projectListItems.forEach((projectListItem, index) => {
            const tags = Array.from(projectListItem.querySelectorAll('.project-tag__item'))
            const desc = projectListItem.querySelector('.__period')
            const title = projectListItem.querySelector('.__name')
      
            if (!desc || !title) return
      
            const { words: descChars } = new SplitType(desc)
            const { chars: titleChars } = new SplitType(title)
            const start = index === 0 ? 'left 20%' : 'left 60%'
            
            ScrollTrigger.create({
              trigger: projectListItem,
              start,
              toggleClass: 'active',
              toggleActions: 'restart none none reverse',
              containerAnimation: projectListTween,
              animation: gsap.timeline()
                .to(projectListItem.querySelector('a'), {
                  '--overlay-opacity': 0.25,
                })
                .from(descChars, {
                  y: '100%',
                  opacity: 0,
                  stagger: 0.025,
                  ease: 'back.out(1.7)',
                }, '<')
                .from(titleChars, {
                  y: '100%',
                  opacity: 0,
                  stagger: 0.025,
                  ease: 'back.out(1.7)',
                }, '<')
                .from(tags, {
                  y: '150%',
                  opacity: 0,
                  stagger: 0.1,
                  ease: 'back.out(1.7)',
                }, '<+0.5'),
            })
          })
        }
      })
    })
  }, [activeTag])
    
  return (
    <section className="section section--project" ref={sectionRef}>
      <div className="__inner">
        <div className="project-scroll-wrap">
          <div className="project-intro">
            <h2 className='__title'>PROJECTS</h2>
            <div className="project-intro__filter">
              <div className="project-tag">
                {tagFilters.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    className={`project-tag__item ${activeTag === tag ? 'project-tag__item--active' : ''}`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ul className="project-list">
            {filteredProjects.map(project => (
              <ProjectItem isPopupVisible={isPopupVisible} onPopupOpen={onPopupOpen} key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SectionProject
