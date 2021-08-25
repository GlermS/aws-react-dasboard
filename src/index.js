import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages';
import { CookiesProvider } from 'react-cookie';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
           <Route path="/">
              <CookiesProvider>
                <Home />
              </CookiesProvider>
            </Route>           
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
