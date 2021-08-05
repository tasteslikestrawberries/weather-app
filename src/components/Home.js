import React from 'react';

const Home = () => {
  return (
    <>
       <div className='weatherFormWrapper'>
        <form>
            <label>
                Enter location: 
                <input type='text' name='cityName' />
            </label>
        
            <button type='submit' value='Submit'>Get Weather</button> 
        </form>
       </div>
    
    </>
  )
 
}

export default Home;
