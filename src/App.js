import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import Resume from "./resources/Resume.pdf"
import About from "./components/about"
import Home from "./components/home"
import Projects from "./components/projects"


function App() {
  return (
    <BrowserRouter>
    <nav>
      <NavLink to="/">Home</NavLink>|
      <NavLink to="/about">About</NavLink>|
      <NavLink to="/projects">Projects</NavLink>
    </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <a href={Resume}>Resume</a>
    </BrowserRouter>
    
  );
}

export default App;
