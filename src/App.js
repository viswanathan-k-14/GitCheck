import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import { About } from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Git Check' icon='fab fa-github fa-1x'></Navbar>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
