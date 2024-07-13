
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
  <>
  <Navbar cor="EduCadd" title="Home here" about = "About Us" contact = "Contact-Me"/>
  <div className='container'><Textform/></div>
  <Home home = "Home-here"/>
  <Contact contact="Contact-Us"/>
  <div className="container"><About a1="Accordion-head" a2="Accordion-body" a3="Accordion-foot"/></div>
  </>
  );
}

export default App;
