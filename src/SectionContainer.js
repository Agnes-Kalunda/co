import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive";
// import './App.css';
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";

function SectionContainer() {
  return (
    <div>
       <Navbar/>
      <div className="App bg-white mb-10">
      
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive />
    </div>

    </div>
    
  );
}

export default SectionContainer;