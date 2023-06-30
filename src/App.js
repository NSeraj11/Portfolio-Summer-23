import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/ContactUs";
import {BrowserRouter} from 'react-router-dom'
import './responsive.css';

function App() {
  return (
   <div>
   <BrowserRouter>
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </BrowserRouter>
   </div>
  );
}

export default App;
