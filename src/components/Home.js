import React, { useState } from 'react';
import axios from 'axios';
import WeatherTable from './WeatherTable';
import WeatherForm from '../components/WeatherForm';

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

    const getWeather = async (e) => {
      //prevents new browser tab from opening
      e.preventDefault();

      //getting the user input values
      /* e.currentTarget always refers to the element to which
       the event handler has been attached, as opposed to event.target,
      which identifies the element on which the event occurred and which may be its descendant.*/

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      //console.log(e.target.elements);
      //have to change this if doing it via button onClick

      if (city || city && country) { //if user has inputted just city value or both values do axios.get request
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&units=metric&appid=${apiKey}`);
          //console.log(response);
        
          //Setting state. .data is part of axios response
          setCity(response.data.name);
          setCountry(response.data.sys.country);
          setTemp(response.data.main.temp);
          setTemp_max(response.data.main.temp_max);
          setTemp_min(response.data.main.temp_min);
          setDescription(response.data.weather[0].description); //[0] - weather is an array so displaying only first element, doesn't work without it

      }
  }

  return (
    <>
      <div className='header'>
        <Icon className='weatherIcon' icon={weatherIcon}/>
        <span><h1>Weather App</h1></span>
      </div>

       <div className='homeContainer'>
       
       <WeatherForm getWeather={getWeather} /> {/*declaring WeatherForm component property (first getWeather) and passing the getWeather function as prop value*/}

       <WeatherTable
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
