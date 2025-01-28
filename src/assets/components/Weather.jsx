import {Card as CustomCard} from 'react-bootstrap';
import {Button  as CustomButton} from 'react-bootstrap'
import { useRef, useState } from "react";
import axios from "axios";

import "./Weather.css";

function WeatherCard() {
  const searchInputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    let userCity = searchInputRef.current.value;

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=3a18af733ab203c7b6019bb1c799f4e0&units=metric`
      );

      setWeatherData(response.data, weatherData);
      console.log(weatherData)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="weatherCard">
    <h1 className='text-center welcomeHeading mt-5'>Welcome to Weather App</h1>

      <CustomCard
        style={{ width: "50%" }}
        className="text-center mx-auto d-block mt-5"
      >
        <CustomCard.Body>
          <CustomCard.Title>
            <label htmlFor="searchInput">Enter your City Name </label>
            <br /> <br />
            <input id="searchInput" ref={searchInputRef} />
          </CustomCard.Title>

          <CustomButton
            className="mt-3"
            onClick={getWeather}
          >
            Get Weather
          </CustomButton>
        </CustomCard.Body>
      </CustomCard>

      <CustomCard className="text-center mx-auto d-block mt-5 mb-5" style={{ width: "50%" }}>
        <CustomCard.Header>
         Weather of 
        </CustomCard.Header>
        <CustomCard.Body>
          <CustomCard.Title>
          <p>City</p>
          <p>Country</p>
          <p>Temperature</p>
          <p>Humidity</p>
          <p></p>
          </CustomCard.Title>
         
        </CustomCard.Body>
      </CustomCard>

              
    </section>
  );
}
export default WeatherCard;
