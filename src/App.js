import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation'
import Weather from './components/Weather/Weather'
import UserProfile from './components/UserProfile'
import About from './components/About'

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
            <Route path='/weather-app/about'>
              <About />
            </Route>

            <Route path='/weather-app/myprofile'>
              <UserProfile />
            </Route>

            <Route path='/weather-app/'>
              <Weather />
            </Route>
        </Switch>

      </>
    </Router>
  )
 
}

export default App;
