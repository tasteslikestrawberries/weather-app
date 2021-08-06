import React from "react";

//styles
import Table from 'react-bootstrap/Table'

const Weather = //passing props:
    ({ 
        city, 
        country,
        temp,
        temp_max,
        temp_min,
        description,
    }) => {
        return (
            <>
                <div className='weatherTable'>
                    { (city && country) || city  ? <span className='cityCountry'><h3>{ city }, { country }</h3></span> : null }
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
                </div>
            </>
        );
}

export default Weather;