import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//components
import Weather from './components/Weather/Weather'
import Login from './components/Login/Login'
import About from './components/About'

const App = () => {

  return (
    <Router>
      <>
        <nav>
              <ul>
                  <li> 
                     <Link to='/'>Weather</Link>
                  </li>
                  <li> 
                     <Link to='/login'>Login</Link>
                  </li>
                  <li> 
                     <Link to='/about'>About</Link>
                  </li>
              </ul>
          </nav>

          <Switch>
            <Route path='/about'>
              <About />
            </Route>

            <Route path='/login'>
              <Login />
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
