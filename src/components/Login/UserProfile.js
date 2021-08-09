import React from 'react';

//services
import { useAuth0 } from '@auth0/auth0-react';

//styles
import Button from 'react-bootstrap/Button'

/*//icons
import { Icon } from '@iconify/react';
import bxsUserCircle from '@iconify/icons-bx/bxs-user-circle';
<Icon className='loginIcon' icon={bxsUserCircle} style={{color: '#0683f1', fontSize: '90px'}} />*/

const UserProfile = () => {

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
    { isAuthenticated ?
      <div className='header'>
        <img className='userLogo' src={user.picture} alt={user.name} />
        <span><h1>{user.name}</h1></span>
        <span><h3>(<i>{user.nickname})</i></h3></span>
        <span><h4>{user.email}</h4></span>
      </div>
    : <div className='noUser'>
      <h5>Please <Button  onClick={() => loginWithRedirect()}  type='submit' value='search' variant='primary' style={{fontSize:'large'}}>Log In</Button> to view this page.</h5>
      </div>
    }

    </>
  )
 
}

export default UserProfile;

   /*<div className='homeContainer'>
        <pre className='userInfo'>
        //{JSON.stringify(user, null, 2)}
        </pre>
      </div>*/
