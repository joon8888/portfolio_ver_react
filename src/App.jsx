import './styles/base/App.scss';
import ScrollWrapper from './components/ScrollWrapper';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import Popup from './components/Popup';
import { useState } from 'react';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const onPopupOpen = () => {
    setIsPopupOpen(true);       
    setTimeout(() => {
      setIsPopupVisible(true);  
    }, 10) 
  }
  const onPopupClose = () => {
    setIsPopupVisible(false);   
    setTimeout(() => {
      setIsPopupOpen(false);      
    }, 500) 
  }
  return (
    <>
      <Header />
      <ScrollWrapper>
        <Main isPopupVisible={isPopupVisible} onPopupOpen={onPopupOpen} />
        <Footer />
      </ScrollWrapper>
      {isPopupOpen && <Popup isPopupVisible={isPopupVisible} onPopupClose={onPopupClose} />}
    </>
  )
}

export default App;