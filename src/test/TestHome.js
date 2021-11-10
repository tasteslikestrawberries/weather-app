import React, { useState } from "react";
import axios from "axios";

//styles
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

//icons
import { Icon } from "@iconify/react";
import weatherIcon from "@iconify/icons-flat-ui/weather";

const Home = () => {
  // API KEY
  //to fetch env variable from frontend it HAS TO be named REACT_APP_... -https://create-react-app.dev/docs/adding-custom-environment-variables/
  const apiKey = process.env.REACT_APP_API_KEY;
  //console.log(apiKey);

  //State
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [temp_max, setTemp_max] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const getWeatherData = async (event) => {
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    //console.log(typeof city); //typof input is always a string

    if (!city) {
      alert("Field cannot be empty. Please enter city.");
      return;
    }

    // ako input pretvoren (Number(city) u broj nije NaN (ako JE broj, a je jer smo ga upravo pretvorili)
    // (sa time da Nan mora biti tipa Number)
    if (!Number.isNaN(Number(city))) {
      alert("Please enter valid city name.");
      return;
    }

    setIsError(false);
    setIsLoading(true);
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&units=metric&appid=${apiKey}`
        );
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(response.data.main.temp);
        setTemp_max(response.data.main.temp_max);
        setTemp_min(response.data.main.temp_min);
        setDescription(response.data.weather[0].description); //[0] - weather is an array so displaying only first element, doesn't work without it

        if (isInitialRender) {
          setIsInitialRender(false);
        }
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
    }

    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData(event);
  };

  return (
    <>
      <div className="header">
        <Icon className="weatherIcon" icon={weatherIcon} />
        <span>
          <h1>Weather App</h1>
        </span>
      </div>

      <div className="homeContainer">
        <Form className="box" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="country">
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Control type="text" placeholder="City" />
          </Form.Group>

          <div className="col text-center">
            <Button
              className="button"
              type="submit"
              variant="primary"
              style={{ marginTop: "1rem" }}
            >
              {" "}
              Get Weather
            </Button>
          </div>
        </Form>

        {isError && (
          <span className="errMsg" style={{ display: "block" }}>
            Something went wrong. Please check if your input is valid.
          </span>
        )}

        {isLoading ? (
          <div class="loader"></div>
        ) : (
          <div className="weatherTable">
            {!isInitialRender && !isError ? (
              <>
                {city && country ? (
                  <span className="cityCountry">
                    <h3>
                      {city}, {country}
                    </h3>
                  </span>
                ) : null}
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
                      <td>
                        {temp ? <span>{Math.floor(temp)}&deg;</span> : null}
                      </td>
                      <td>
                        {" "}
                        {temp_min && temp_max ? (
                          <span>
                            {Math.floor(temp_min)}&deg; - {Math.floor(temp_max)}
                            &deg;
                          </span>
                        ) : null}
                      </td>
                      <td>{description}</td>
                    </tr>
                  </tbody>
                </Table>
              </>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
