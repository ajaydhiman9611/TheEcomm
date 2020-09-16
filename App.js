import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// components---------------------------
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
// -------------------------------------

function App() {
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {ContactUs} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
