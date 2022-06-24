import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';







function App() {

  return (
    <>
      
    <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact/>
    
    </>
  );
}

export default App;
