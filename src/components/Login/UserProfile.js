import React from 'react';

//styles
import Button from 'react-bootstrap/Button'

//icons
import { Icon } from '@iconify/react';
import bxsUserCircle from '@iconify/icons-bx/bxs-user-circle';

const UserProfile = () => {
  return (
    <>
      <div className='header'>
        <Icon className='loginIcon' icon={bxsUserCircle} style={{color: '#0683f1', fontSize: '90px'}} />
        <span><h1>My Profile</h1></span>
      </div>

      <div className='homeContainer'>

        <div className="col text-center">
          <Button className='button' type='submit' value='search' variant='primary' style={{marginTop: '1rem'}}>Logout</Button>
        </div>
      
      </div>
    </>
  )
 
}

export default UserProfile;
