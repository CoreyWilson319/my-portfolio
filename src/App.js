import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import About from "./components/about"
import Home from "./components/home"


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
    
  );
}

export default App;
