import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//services
import { useAuth0 } from '@auth0/auth0-react';

//components
import Weather from './components/Weather/Weather'
import UserProfile from './components/Login/UserProfile'
import About from './components/About'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './styles.css';

const App = () => {
  /*destructuring, this is fetching the loginWithRedirect that is a property of useAuth0() function 
  that has many properties, but we only need this one, not the whole object that the function returns. 
  Without destructuring it would look like:
  const x = useAuth();
  const loginWithRedirect = x.loginWithRedirect*/
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0(); 

  return (
    <Router>
      <>
        <nav>
              <ul>
                { !isAuthenticated ?
                  <li>
                    <Button  onClick={() => loginWithRedirect()} className='btn-lg' type='submit' value='search' variant='primary' style={{backgroundColor:'#0854c4', fontSize:'large'}}>Log In</Button>
                  </li>
                :
                  <li>
                    <Button  onClick={() => logout()} className='btn-lg' type='submit' value='search' variant='primary' style={{backgroundColor:'#0854c4', fontSize:'large'}}>Log Out</Button>
                  </li>
                }
                  <li>
                    <Link to='/myprofile'>My Profile</Link>
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
