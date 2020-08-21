import React from "react";
import Navbar from "./components/NavComponent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Displays navbar across all pages and the home, about, and contact pages based on which react router dom link you click.
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
