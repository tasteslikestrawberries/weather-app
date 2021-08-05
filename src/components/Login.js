import React from 'react';

//styles
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//icons
import { Icon } from '@iconify/react';
import bxsUserCircle from '@iconify/icons-bx/bxs-user-circle';

const Login = () => {
  return (
    <>
      <div className='header'>
        <Icon className='loginIcon' icon={bxsUserCircle} style={{color: '#0683f1', fontSize: '90px'}} />
        <span><h1>Login Form</h1></span>
      </div>

      <div className='homeContainer'>
        <Form className='box'>

        <Form.Group className='mb-3' controlId='username'>
            <Form.Control type='text' placeholder='Username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
            <Form.Control type='text' placeholder='Password' />
        </Form.Group>

        <div className="col text-center">
                <Button className='button' type='submit' value='search' variant='primary' style={{marginTop: '1rem'}}>Login</Button>
            </div>
        </Form>
      </div>
    </>
  )
 
}

export default Login;
