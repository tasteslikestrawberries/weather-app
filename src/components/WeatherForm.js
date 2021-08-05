import React from 'react';

//styles
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/*sending function getWeather from Home component as props here (using ES6 props/object destructuring),
 so it could be accessed onSubmit*/

/*without destructuring: const WeatherForm = (props) => { const getWeather = props.getWeather */
const WeatherForm = ({getWeather}) => {
    
    return (
    <>
        <Form className='box' onSubmit={getWeather}> {/*passing the function to the form element but could have done it on button element (onClick) too - have to check event targets - https://developer.mozilla.org/en-US/docs/Web/API/Event/target!!!*/}

        <Form.Group className='mb-3' controlId='country'>
                <Form.Control type='text' placeholder='Country' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='city'>
                <Form.Control type='text' placeholder='City' />
            </Form.Group>

            <div className='col text-center'>
                <Button className='button'
                        type='submit' 
                        value='search' 
                        variant='primary' 
                        style={{marginTop: '1rem'}}> Get Weather
                </Button>
            </div>
        </Form>
        
    </>
)
    }

export default WeatherForm;