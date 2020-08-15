import React from 'react';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// NAVIGATION
import Nav from "./components/Nav/Nav";
// PAGES
import Home from './pages/Home/Home';
import Galleries from './pages/Galleries/Galleries';
import Info from './pages/Info/Info';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => (
  <div>
    <Nav /> {/* rendering nav on every page */}
    <div className="container">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact path="/galeriak" component={Galleries} />
        <Route exaxt path="/info" component={Info} />
        <Route exact path="/rolam" component={About} />
        <Route exact path="/kapcsolat" component={Contact} />
      </Switch>
    </div>
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;

