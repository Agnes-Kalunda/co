
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
// import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Route exact path="/" component={Hero} />
      <Route path='/about' component={Company} />
      <Route path='/contact' component={Form} /> */}

       <Navbar/>
            <Hero/>
            <Cards />
            <Section/>
            <Newsletter/>
            <Footer />
     
    </div>
  );
}

export default App;
