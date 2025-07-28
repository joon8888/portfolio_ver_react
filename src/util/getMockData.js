export const tagFilters = [
  'All', '구축', '운영', '반응형', '웹접근성마크 획득', '웹어워드 수상'
];

export const projectMockData = [
  {
    id: 1,
    title: 'KT닷컴 사이트 운영<br>상품/혜택 담당',
    period: '2025.05 - 2025.07',
    image: 'images/project_kt.png',
    tags: [
      { label: '운영' },
    ],
    webType: '적응형',
    url: 'https://www.kt.com/',
    role: '상품/혜택 담당 PA',
    contribution: '100%',
    description: '<ul><li>CMS 상품 상세페이지 입점 및 수정에 따른 수시 작업</li><li>CMS 정적 페이지 작업 및 소스 관리</li><li>java 개발 시 산출물 작업 및 배포 참여</li></ul>',
    point: '<em class="fc-purple">KT 내부 접근성 선 검증심사 후 배포 필수</em> <br>(연 1회 접근성 심사 별도)'
  },
  {
    id: 2,
    title: '삼성웰스토리 사이트 <br>리뉴얼 구축',
    period: '2024.09 - 2025.05',
    image: 'images/project_welstory.png',
    tags: [
      { label: '구축' },
      { label: '리뉴얼' },
      { label: '반응형' },
      { label: '웹접근성마크 획득', className: 'project-tag__item--green' },
    ],
    webType: '반응형',
    url: 'https://www.samsungwelstory.com/main.do',
    role: 'PA',
    contribution: '40%',
    description: '<ul><li>RFP 메인 제안부터 오픈까지 풀투입</li><li>서브 페이지 및 입력 폼 공통 스타일 가이드 작업</li><li>PC/모바일 웹접근성 작업</li></ul>',
    point: '<ul><li><em class="fc-purple">2025 웹와치 웹접근성 마크 획득 완료</em></li><li>완전 반응형 구축 (모바일/폴더블/패드/PC)</li></ul>'
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
    webType: '적응형',
    url: 'https://www.larocheposay.co.kr',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    description: '<ul><li>이벤트 페이지 월 약 2회 정기 작업 및 수시 수정</li><li>프론트 운영 개선 및 별도 건</li><li>랜덤쿠폰, 카운트다운 등 JS 작업</li></ul>',
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
    webType: '일부 반응형 (모바일 최적화)',
    url: 'https://www.starfieldmarket.com',
    role: 'PA',
    contribution: '30%',
    description: '<ul><li>웹/앱 신규 모바일 페이지 개발</li><li>Panzoom 라이브러리 활용 매장 맵 구현</li></ul>',
    point: 'VUE 기반 <br>(AI 활용 개발 협조)'
  },
  {
    id: 5,
    title: 'IFC MALL 사이트 운영',
    period: '2023.10 - 2025.05',
    image: 'images/project_ifcmall_2.png',
    tags: [
      { label: '운영' },
    ],
    webType: '적응형',
    url: 'https://www.ifcmallseoul.com/kr/main',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    description: '<ul><li>운영 개선 건 및 매장 맵 현행화 작업</li></ul>',
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
    webType: '적응형',
    url: 'https://www.ifcmallseoul.com/kr/main',
    role: 'PA',
    contribution: '30%',
    description: '<ul><li>서브페이지 작업 담당</li><li>영문 페이지 현행화</li></ul>',
    point: '<em class="fc-coral">2023 웹어워드코리아 쇼핑센터분야 대상 수상</em> <a class="btn--detail" href="https://www.i-award.or.kr/Web/Assess/FinalCandidateView.aspx?REG_SEQNO=12863" target="_blank" title="새창열림">자세히보기</a>'
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
    webType: '적응형',
    url: 'https://www.samchuly.co.kr/index.php',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    description: '<ul><li>프론트 개선 및 별도 건 작업</li><li>B2B 사이트 리뉴얼 퍼블리싱 담당</li></ul>',
    point: '<ul><li>삼바몰 <a class="btn--detail" href="https://www.sambamall.com/" target="_blank" title="새창열림">사이트보기</a></li><li>B2B 기업 내부 사이트로 비공개</li></ul>'
  },
  {
    id: 8,
    title: '파라다이스그룹 사이트 운영',
    period: '2022.02 - 2023.12',
    image: 'images/project_paradise.png',
    tags: [
      { label: '운영' },
    ],
    webType: '적응형',
    url: 'https://www.paradise.co.kr/ko/main',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    description: '<ul><li>다국어 사이트(4개국어)</li><li>파라다이스 그룹 T스토리 블로그 리뉴얼 참여 및 개선 관리</li></ul>',
  },
  {
    id: 9,
    title: '파라다이스카지노 사이트 운영',
    period: '2022.02 - 2023.12',
    image: 'images/project_casino.png',
    tags: [
      { label: '운영' },
    ],
    webType: '적응형',
    url: 'https://www.paradisecasino.co.kr/',
    role: '퍼블리싱 담당자',
    contribution: '100%',
  },
  {
    id: 10,
    title: '신세계 시그나이트파트너스 <br>사이트 운영',
    period: '2023.07 - 2023.11',
    image: 'images/project_signite.png',
    tags: [
      { label: '운영' },
    ],
    webType: '적응형',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    point: '기존 운영 사이트 리뉴얼로 인한 폐쇄'
  },
  {
    id: 11,
    title: '신세계 인터내셔날<br>사이트 운영',
    period: '2022.02 - 2024.03',
    image: 'images/project_sikorea.png',
    tags: [
      { label: '운영' },
    ],
    webType: '반응형',
    role: '퍼블리싱 담당자',
    contribution: '100%',
    point: '기존 운영 사이트 리뉴얼로 인한 폐쇄'
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
    webType: '태블릿 전용 콘텐츠',
    role: 'PA',
    contribution: '20%',
    description: '<ul><li>학년 콘텐츠 별 분배 후 <br>개인 작업 진행</li><li><em class="fc-purple">교육용 콘텐츠 UI 개발</em></li></ul>'
  },
]

export const projectSkillData = [
  [
    { type: 'static', image: 'images/skill_bg_2.png' },
    { type: 'flip', image: 'images/icon_3d_js.png', title: 'JS', content: '바닐라스크립트 중급<br>클래스 및 <br>모듈 스크립트 위주로 <br>소스 재사용을 높이고 있습니다.' },
    { type: 'flip', image: 'images/icon_3d_sass.png', title: 'Scss', content: '스타일 컴포넌트 및 <br>모듈화를 통한 <br>소스 효율성을 높이고 있습니다.' },
    { type: 'static', image: 'images/skill_bg_3.png' }
  ],
  [
    { type: 'static', image: 'images/skill_bg_3.png' },
    { type: 'flip', image: 'images/icon_3d_react.png', title: 'React', content: 'React 초급<br>실무 투입을 위한 대비로 학습 중입니다.' },
    { type: 'flip', image: 'images/icon_3d_vue.png', title: 'Vue3', content: 'Vue3 초급<br>실무 투입을 위한 대비로 학습 중입니다.'},
    { type: 'static', image: 'images/skill_bg_1.png' },
  ],
  [
    { type: 'static', image: 'images/skill_bg_5.png' },
    { type: 'flip', image: 'images/icon_3d_html.png', title: '웹표준 준수', content: '시멘틱 태그 등을 사용하여 <br>최적화된 웹 사용 경험을 제공하려 노력합니다.' },
    { type: 'static', image: 'images/skill_bg_4.png' },
    { type: 'static', image: 'images/skill_bg_1.png' },
  ],
  [
    { type: 'static', image: 'images/skill_bg_1.png' },
    { type: 'flip', image: 'images/icon_3d_css.png', title: '크로스 브라우징', content: '불필요한 스크립트 사용은 최소화하며, <br>크로스 브라우징이 가능한 인터랙션 구현에 힘씁니다.' },
    { type: 'static', image: 'images/skill_bg_5.png' },
    { type: 'static', image: 'images/skill_bg_2.png' },
  ]
]
