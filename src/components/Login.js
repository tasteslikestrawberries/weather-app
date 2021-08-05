import React from 'react';

const Login = () => {
  return (
    <>
     <div className='weatherFormWrapper'>
        <form>
            <label>
                Login: 
                <input type='text' name='cityName' />
            </label>
        
            <button type='submit' value='Submit'>Login</button> 
        </form>
       </div>
    
    </>
  )
 
}

export default Login;
