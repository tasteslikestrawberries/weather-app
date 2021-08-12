import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation'
import Weather from './components/Weather/Weather'
import UserProfile from './components/UserProfile'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';  

const App = () => {
  
  return ( 
    <Router> 
      <ScrollToTop />
      <>
          <Navigation />

          <Switch>
            <Route path='/privacypolicy'>
              <PrivacyPolicy />
            </Route>

            <Route path='/about'>
              <About /> 
            </Route>

            <Route path='/myprofile'>
              <UserProfile />
            </Route>

            <Route path='/'>
              <Weather />
            </Route>
        </Switch>

      </>
    </Router>
  )
 
}

export default App;
