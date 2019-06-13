import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import Home from './components/Home.js';
import Info from './components/Info.js';
import Scientists from './components/Scientists.js';
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
      </Switch>
      
    </div>
  </Router>
  
  );
  }
}

export default App;