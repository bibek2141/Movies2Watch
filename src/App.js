import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
function App() {

  return (
    
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
      </Router>
   
  );
}

export default App;
