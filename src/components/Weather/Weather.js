import React, { useState } from 'react';
import axios from 'axios';

//components
import WeatherForm from './WeatherForm';
import WeatherTable from './WeatherTable'

//icons
import { Icon } from '@iconify/react';
import weatherIcon from '@iconify/icons-flat-ui/weather';

const Weather = () => {
    // API KEY - to fetch env variable from frontend it HAS TO be named REACT_APP_... -https://create-react-app.dev/docs/adding-custom-environment-variables/
    const apiKey = process.env.REACT_APP_API_KEY;
      //console.log(apiKey);

    //Handling state
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const [temp_min, setTemp_min] = useState('');
    const [temp_max, setTemp_max] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isInitialRender, setIsInitialRender] = useState(true);

    const getWeatherData = async (event) => {

        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value; 

        //console.log(typeof city); //typof input is always a string     
          if(!city) {
          alert('Field cannot be empty. Please enter city.');
          return
          };

        // ako input pretvoren (Number(city) u broj nije NaN (ako JE broj, a je jer smo ga upravo pretvorili)
        // (sa time da Nan mora biti tipa Number)
          if(!Number.isNaN(Number(city))) { 
              alert ('Please enter valid city name.');
              return
          };
    
        setIsError(false);
        setIsLoading(true);

        if ( city ) { 
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&units=metric&appid=${apiKey}`);
                  setCity(response.data.name);
                  setCountry(response.data.sys.country);
                  setTemp(response.data.main.temp);
                  setTemp_max(response.data.main.temp_max);
                  setTemp_min(response.data.main.temp_min);
                  setDescription(response.data.weather[0].description); //[0] - weather is an array so displaying only first element, doesn't work without it
                  setIcon(response.data.weather[0].icon); 

                  if (isInitialRender) {setIsInitialRender(false)}
          } catch (err) {
            console.log(err);
            setIsError(true);
          };
        }
   
        setIsLoading(false);
      };
   
    const handleSubmit = event => {
      event.preventDefault(); //by default browser behavior, on submission of a form, the page will redirect and refresh - we don't want that
      getWeatherData(event); //calling the function that fetches data from API
    };

    return(
        <>
            <div className='header'>
                <Icon className='weatherIcon' icon={weatherIcon}/>
                <span><h1>Weather App</h1></span>
            </div>

            <div className='homeContainer'>
                <WeatherForm //declaring component props/passing the handleSubmit function (that calls getWeatherData()) as prop value and isError state
                  handleSubmit = {handleSubmit}
                  isError = {isError} /> 
                
                <WeatherTable //declaring props as above
                  isInitialRender = {isInitialRender}
                  isLoading = {isLoading}
                  isError = {isError}
                  city = {city} 
                  country = {country} 
                  temp = {temp} 
                  temp_max = {temp_max}
                  temp_min = {temp_min}
                  description = {description} 
                  icon = {icon} />
            </div>
        
        </>
    );
};

export default Weather