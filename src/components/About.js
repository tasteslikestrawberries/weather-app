import React from 'react';

//icons
import { Icon } from '@iconify/react';
import info24Filled from '@iconify/icons-fluent/info-24-filled';

const About = () => {
  return (
    <>
      <div className='header'>
        <Icon className='loginIcon' icon={info24Filled} style={{color: '#0d6efd', fontSize: '90px'}} />
        <span><h1>About</h1></span>
      </div>

      <div className='homeContainer'>
      <h5 style={{fontWeight:'200'}}>Hello! I made this app to practice OAuth 2.0 authentication and fetching data from an external API.</h5>
      Check my website at <a href='http://tasteslikestrawberries.github.io' style={{color:'#0d6efd'}} target='_blank'>http://tasteslikestrawberries.github.io</a>
      </div>
    </>
  )
 
}

export default About;
