import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import Home from './components/Home.js';
import Info from './components/Info.js';
import Scientists from './components/Scientists.js';
import SingleScientist from './components/SingleScientist.js';
import SingleFormula from './components/SingleFormula.js';
import Institute from './components/Institute.js';
import ElementDetail from './components/ElementDetail';
import './App.css';

class App extends Component{
  render(){
  return (
    
    <Router>
    <div>
      
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/Info" component = {Info}/>
        <Route exact path = "/Scientists" component = {Scientists}/>
        <Route exact path = "/api/v1/scientists/:id" component = {SingleScientist}/>
        <Route exact path = "/formulas/:id" component = {SingleFormula }/>
        <Route exact path = "/institutes/:id" component = {Institute}/>
        <Route exact path = "/elements/:atomic_name" component = {ElementDetail}/>
      </Switch>
      
    </div>
  </Router>
  
  );
  }
}

export default App;