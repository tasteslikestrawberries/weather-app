import React from 'react';

//icons
import { Icon } from '@iconify/react';
import info24Filled from '@iconify/icons-fluent/info-24-filled';
import githubIcon from '@iconify/icons-entypo-social/github';

const About = () => {
  return (
    <>
      <div className='header'>
        <Icon className='loginIcon' icon={info24Filled} style={{color: '#0d6efd', fontSize: '90px'}} />
        <span><h1>About</h1></span>
      </div>
      
      <div className='homeContainer'>
        <h5 className='aboutText' style={{fontWeight:'200'}}>
          Hello! This app was made to practice Auth0 authentication and fetching data from external APIs.
        </h5>
        
        <br/>
        Check out my Github profile: 
        <a href='http://github.com/tasteslikestrawberries' style={{color:'#0d6efd'}} target='_blank' rel='noreferrer'>
          <Icon icon={githubIcon} style={{fontSize: '43px', color: '#242526', margin: '1rem 0'}} />
        </a>
      </div>
    </>
  )
 
}

export default About;
