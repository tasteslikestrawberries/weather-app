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
import Home from './components/Home'
import Login from './components/Login'

const App = () => {

  return (
    <Router>
      <>
        <nav>
              <ul>
                  <li> 
                     <Link to='/'>Home</Link>
                  </li>
                  <li> 
                     <Link to='/login'>Login</Link>
                  </li>
                  <li> 
                     <Link to=''>About</Link>
                  </li>
              </ul>
          </nav>

          <Switch>
            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
        </Switch>

      </>
    </Router>
  )
 
}

export default App;
