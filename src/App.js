import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <Route path="/savedjobs" exact>
                <SavedJobs />
              </Route>
            </Switch>
          </Router>

        </div>
      </Provider>
    )
  }
}

export default App;

