
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Cards from './components/cards'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter';
import Company from './components/Company'
import Form from './components/Form';
import Container from './components/Container';
import Routepath from './components/Routepath';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SectionContainer from './SectionContainer';
import Marketing from './components/Marketing';


function App() {
  return (
    <div>
      
      {/* <BrowserRouter>
       <Routes>
        <Route exact path="/company" component={< Company />} />
        <Route path='/container' component={<Container />} />
        <Route path='/form' component={<Form />} />

       </Routes>

      </BrowserRouter> */}

      <Routepath />

      {/* <SectionContainer/> */}
      {/* <Marketing /> */}

       {/* <Navbar/>
            <Hero/>
            <Cards />
            <Section/>
            <Newsletter/>
            <Footer /> */}
            {/* <Container /> */}
        {/* <div>
          <ul>
            <li><a href="http://localhost:3000/container">Container</a></li>
            <li><a href="http://localhost:3000/company">Company</a></li>
            <li><a href="http://localhost:3000/form">Form</a></li>
            
          </ul>
        
<Routepath/>
        </div> */}
            
     
    </div>
  );
}

export default App;
