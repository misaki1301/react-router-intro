import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Serie from "./pages/Serie";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import SerieDetail from "./pages/SerieDetail";
import Volume from "./pages/Volume";

function App() {
  return (
      <Router>
          <Navbar/>
          <div className='container-fluid'>
              <Switch>
                  <Route path='/serie/:slug/volume/:id'>
                      <Volume/>
                  </Route>
                  <Route path='/serie/:id'>
                      <SerieDetail/>
                  </Route>
                  <Route path='/serie'>
                      <Serie/>
                  </Route>
                  <Route path='/about-us'>
                      <About/>
                  </Route>
                  <Route path='/'>
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
