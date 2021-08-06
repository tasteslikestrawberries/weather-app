import React, { useState } from 'react';
import axios from 'axios';
import WeatherTable from './WeatherTable';
import WeatherForm from './WeatherForm';

//icons
import { Icon } from '@iconify/react';
import weatherIcon from '@iconify/icons-flat-ui/weather';

const Home = () => {

  // API KEY
  //to fetch env variable from frontend it HAS TO be named REACT_APP_... -https://create-react-app.dev/docs/adding-custom-environment-variables/
    const apiKey = process.env.REACT_APP_API_KEY;
  //console.log(apiKey);

    //State
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [temp, setTemp] = useState('');
    const [temp_min, setTemp_min] = useState('');
    const [temp_max, setTemp_max] = useState('');
    // const [icon, setIcon] = useState();
    // const [isLoading, setLoading] = useState();
    // const [error, setError] = useState(false);

    const getWeatherData = async (event) => {
      //by default, on submission of a form, the page will redirect and refresh - we don't want that
      event.preventDefault();

      //saving user input values in variables
      /* e.currentTarget always refers to the element to which
       the event handler has been attached, as opposed to event.target,
      which identifies the element on which the event occurred and which may be its descendant.*/

      const city = event.target.elements.city.value;
      //const country = event.target.elements.country.value; //uncomment if input field for country is needed in WeatherForm
      
      if ( (city && country) || city ) { 
        try { 
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&units=metric&appid=${apiKey}`);
          
          setCity(response.data.name);
          setCountry(response.data.sys.country);
          setTemp(response.data.main.temp);
          setTemp_max(response.data.main.temp_max);
          setTemp_min(response.data.main.temp_min);
          setDescription(response.data.weather[0].description); //[0] - weather is an array so displaying only first element, doesn't work without it
        } catch (err) {
          console.log('Something went wrong! ' + err);
          alert('Something went wrong! ' + err);
        }

      }
    }

  return (
    <>
      <div className='header'>
        <Icon className='weatherIcon' icon={weatherIcon}/>
        <span><h1>Weather App</h1></span>
      </div>

       <div className='homeContainer'>
       
       <WeatherForm getWeather = {getWeatherData} /> {/*declaring WeatherForm component prop(erty) getWeather and passing the getWeatherData function as prop value*/}

       <WeatherTable //declaring props as above
                city = {city} 
                country = {country} 
                temp = {temp} 
                temp_max = {temp_max}
                temp_min = {temp_min}
                description = {description}
        />
       </div>
    
    </>
  )
 
}

export default Home;
