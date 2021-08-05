import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//styles
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
