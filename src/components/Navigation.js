import React, {useState} from 'react'

import {
    Link
  } from "react-router-dom";

//services
import { useAuth0 } from '@auth0/auth0-react';

//styles
import Button from 'react-bootstrap/Button'

//icons
import { Icon } from '@iconify/react';
import menuIcon from '@iconify/icons-ion/menu';

const Navigation = () => {
    /*destructuring, this is fetching the loginWithRedirect that is a property of useAuth0() function 
    that has many properties, but we only need this one, not the whole object that the function returns. 
    Without destructuring it would look like:
    const x = useAuth();
    const loginWithRedirect = x.loginWithRedirect*/
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0(); 

    const [showNav, setShowNav] = useState(false);
    
    return (
        <>
            {/*SMALL SCREENS NAVIGATION*/}

            <div className='hamburgerWrapper'>
            <button className='hamburgerBtn' onClick={() => setShowNav(!showNav)}>
                <Icon className='hamburgerIcon' icon={menuIcon} style={{color: '#0d6efd', fontSize: '45px'}} />
            </button>
            </div>

            {showNav ?
            <nav className='smallNav'>
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
                        <Link to='/weather-app/myprofile'>My Profile</Link>
                    </li>

                    <li>
                        <Link to='/weather-app/'>Weather</Link>
                    </li>
                
                    <li> 
                        <Link to='/weather-app/about'>About</Link>
                    </li>
                </ul>
            </nav>
            : null
            }

            {/*DESKTOP NAVIGATION*/}

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
                        <Link to='/'>Weather</Link>
                    </li>
                
                    <li> 
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
 
        </>
    )
}

export default Navigation
