import React from 'react';

//styles
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
  return (
    <>
    <h1>Login Form</h1>
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
