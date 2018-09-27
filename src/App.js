import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Erfaring from './components/Erfaringkomponent';
import Prosjekter from './components/Prosjekterkomponent';
import Hovedside from '../src/components/hovedside'

class App extends Component {

  constructor(){
    super();
    this.state= { name: "første" };
    console.log("constr");
  }
  componentWillMount(){
    console.log("comp will mnt");
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Hovedside/>
        <Route path="/erfaring" component={Erfaring} />
        <Route path="/prosjekter" component={Prosjekter} />
      </div>
      </Router>
    );
  }
}

export default App;
