import './App.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import About from "./components/about"
import Home from "./components/home"
import Projects from "./components/projects"

import background from "./resources/background.png"


function App() {
  return (
    
      <div className="background">
        <nav>
          <NavLink to="/">Home</NavLink>|
          <NavLink to="/about">About</NavLink>|
          <NavLink to="/projects">Projects</NavLink>
        </nav>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Projects />
          <About />
          <footer>
            Corey Wilson

          </footer>
      </div>
    
  );
}

export default App;
