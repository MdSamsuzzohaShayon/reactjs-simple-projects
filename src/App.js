import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
        <Navbar />
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/jobdetail" exact>
              <JobDetail />
            </Route>
            <Route path="/postjob" exact>
              <PostJob />
            </Route>
          </Switch>
        </Router>

      </div>
    )
  }
}

export default App;

