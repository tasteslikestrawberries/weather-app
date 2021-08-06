import React, { useState, useEffect } from 'react';
import axios from 'axios';

//styles
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

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

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const getWeatherData = async (event) => {

        const city = event.target.elements.city.value;
        //const country = event.target.elements.country.value; //uncomment if input field for country is needed in WeatherForm

        
        setIsError(false);
        setIsLoading(true);
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
            setIsError(true);
          };
        }
   
        setIsLoading(false);
      };
   
      getWeatherData();
    }, []);

    const handleSubmit = e => {
      e.preventDefault();
      getWeatherData();
    };
   
      return (
        <>
          <div className='header'>
            <Icon className='weatherIcon' icon={weatherIcon}/>
            <span><h1>Weather App</h1></span>
          </div>

          <div className='homeContainer'>
          
          
            <Form className='box' onSubmit={handleSubmit}> 

              <Form.Group className='mb-3' controlId='city'>
                  <Form.Control type='text' placeholder='City' />
              </Form.Group>

              <div className='col text-center'>
                  <Button className='button'
                          type='submit'  
                          variant='primary' 
                          style={{marginTop: '1rem'}}> Get Weather
                  </Button>
              </div>
            </Form>

          {isError && <div>Something went wrong ...</div>}
        
          {isLoading ? (
            <div>Loading ...</div>
          ) : (

                <div className='weatherTable'>

                { city  ? <span className='cityCountry'><h3>{ city }, { country }</h3></span> : null }
            
                  <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Temperature °C</th>
                        <th>Min-Max °C</th>
                        <th>Weather Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        {/*Math.floor() function returns the largest integer less than or equal to a given number */}
                        <td>{ temp ? <span>{ Math.floor(temp) }&deg;</span> : null }</td>
                        <td>  { temp_min && temp_max 
                                    ? <span>{ Math.floor(temp_min) }&deg; - { Math.floor(temp_max) }&deg;</span>
                                    : null 
                                }
                        </td>
                        <td>{ description }</td>
                        </tr>
                    </tbody>
                  </Table>
                </div>)}
          </div>
            
        </>
      );
}

export default Home;
