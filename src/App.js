import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './styles.css';

//components
import Weather from './components/Weather/Weather'
import UserProfile from './components/Login/UserProfile'
import About from './components/About'

const App = () => {

  return (
    <Router>
      <>
        <nav>
              <ul>
                  <li>
                    <Button  className='btn-lg' type='submit' value='search' variant='primary' style={{backgroundColor:'#0854c4', fontSize:'large'}}>Login</Button>
                  </li>

                  <li>
                    <Link to='/'>Weather</Link>
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
