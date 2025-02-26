import About from "./About.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import { Link, Route, Routes } from "react-router-dom";

function Custom() {
    return (
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
    
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      );
    }
  
  export default Custom;