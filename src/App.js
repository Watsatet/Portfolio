import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar logoName={"MADHAV"} />
        </div>
        <Routes>
          <Route path='/Portfolio' element={<Home />} />
          <Route exact path="Home" element={<Home />} />
          <Route exact path="About" element={<About />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="Projects" element={<Projects />} />
          <Route exact path="Education" element={<Education />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
