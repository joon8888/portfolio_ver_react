import './styles/base/App.scss';
import ScrollWrapper from './components/ScrollWrapper';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Cursor from './components/Cursor';
import { useState, useEffect } from 'react';
import { projectMockData } from './util/getMockData';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isScrollLocked, setIsScrollLocked] = useState(true); // 🔒 인트로 시작 시 잠금

  const onPopupOpen = (id) => {
    setSelectedProjectId(id);
    setIsScrollLocked(true);
    setIsPopupOpen(true);
    setTimeout(() => {
      setIsPopupVisible(true);
    }, 10);
  };

  const onPopupClose = () => {
    setIsPopupVisible(false);
    setTimeout(() => {
      setIsPopupOpen(false);
      setSelectedProjectId(null);
      setIsScrollLocked(false);
    }, 350);
  };

  const selectedProject = projectMockData.find(item => item.id === selectedProjectId);

  // ✅ 인트로 애니메이션 종료 시 스크롤 풀기
  useEffect(() => {
    const handleIntroEnd = () => setIsScrollLocked(false);
    window.addEventListener('intro-end', handleIntroEnd);
    return () => window.removeEventListener('intro-end', handleIntroEnd);
  }, []);

  return (
    <>
      <Header />
      <ScrollWrapper isScrollLocked={isScrollLocked}>
        <Main isPopupVisible={isPopupVisible} onPopupOpen={onPopupOpen} />
        <Footer />
      </ScrollWrapper>
      <div className="intro-bg-wrap">
        <div className="intro-bg intro-bg--1"></div>
        <div className="intro-bg intro-bg--2"></div>
      </div>
      {isPopupOpen && selectedProject && (
        <Popup
          selectedProject={selectedProject}
          isPopupVisible={isPopupVisible}
          onPopupClose={onPopupClose}
        />
      )}
      <Cursor />
    </>
  );
};

export default App;
