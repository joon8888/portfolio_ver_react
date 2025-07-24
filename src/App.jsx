import './styles/base/App.scss';
import ScrollWrapper from './components/ScrollWrapper';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import Popup from './components/Popup';
import { useState } from 'react';
import { projectMockData } from'./util/getMockData';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const onPopupOpen = (id) => {
    setSelectedProjectId(id);
    setIsPopupOpen(true);       
    setTimeout(() => {
      setIsPopupVisible(true);  
    }, 10) 
  }
  const onPopupClose = () => {
    setIsPopupVisible(false);   
    setTimeout(() => {
      setIsPopupOpen(false);  
      setSelectedProjectId(null);    
    }, 350) 
  }
  const selectedProject = projectMockData.find(item => item.id === selectedProjectId);

  return (
    <>
      <Header />
      <ScrollWrapper>
        <Main isPopupVisible={isPopupVisible} onPopupOpen={onPopupOpen} />
        <Footer />
      </ScrollWrapper>
      {isPopupOpen && selectedProject && <Popup selectedProject={selectedProject} isPopupVisible={isPopupVisible} onPopupClose={onPopupClose} />}
    </>
  )
}

export default App;