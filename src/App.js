import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import {Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import About from "./components/about"
import Home from "./components/home"
import Projects from "./components/projects"
import Skills from "./components/skills"

import background from "./resources/background.png"


function App() {
  return (
    
      <div className="background">
        <nav>
              <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Corey Wilson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </nav>
        <br></br>
        <br></br>
        <br></br>
          <About />
          <Skills />
          <Projects />
          <footer>
            Corey Wilson

          </footer>
      </div>
    
  );
}

export default App;


// increment y for the desired unit
// example on keypress y += 10
// make a conditional for this to happen as long as the y coordinates are less than or equal to the canvas
// so if y is at 690 and the next keypress makes it 700, if 700 is the maximum height of our canvas stop allowing increments past that