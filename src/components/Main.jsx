import SectionVisual from "./sections/SectionVisual";
import SectionSkill from "./sections/SectionSkill";
import SectionProject from "./sections/SectionProject";

const Main = ({isPopupVisible, onPopupOpen}) => {
  return (
    <main>
      <SectionVisual />
      <SectionSkill />
      <SectionProject isPopupVisible={isPopupVisible}  onPopupOpen={onPopupOpen}/>
    </main>
  )
}

export default Main;