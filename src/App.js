import React, {Component} from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import ErrorPage from './ErrorPage/ErrorPage';
//import Login from './Login/Login';
import Register from './Register/Register';
//import ProjectList from './ProjectList/ProjectList';
//import ProjectListMenu from './ProjectListMenu/ProjectListMenu'
//import ProjectPage from './ProjectPage';
//import ErrorBoundary from './ErrorBoundary/Errorboundary';
//import ApliContext from './ApiContext';

import config from './config';

class App extends Component {
  state = {

  };

  render() {
    return (
      <div className='App'>
        <main>
          {'Daily Thoughts'}
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/register' component={Register} />
              <Route component={ErrorPage} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
  
}

export default App;