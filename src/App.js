import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Project from './components/Project'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Experience from './components/Experience';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="">
        </header>
        <div className="background-image">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/skills" component={Skills}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/work" component={Work}/>
              <Route path="/projects/:name" component={Project}/>
            </Switch>
          </Router>
        </div>
      </div> 
    );
  }
}

export default App;
