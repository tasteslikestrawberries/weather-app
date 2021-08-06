import React from 'react';

//styles
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

/*passing prop getWeather from Home component(using ES6 props/object destructuring),
 so it could be accessed onSubmit*/

/*without destructuring: const WeatherForm = (props) => { const getWeather = props.getWeather */
const WeatherForm = ( {getWeather} ) => {
    
    return (
    <>
        <Form className='box' onSubmit={getWeather}> {/* passing the prop to the form onSubmit event- !!!check event targets/button onClick difference - https://developer.mozilla.org/en-US/docs/Web/API/Event/target */}

        <Form.Group className='mb-3' controlId='country'>
                <Form.Control type='text' placeholder='Country' />
            </Form.Group>

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
        
    </>
)
    }

export default WeatherForm;