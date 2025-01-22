import {
  GeneralReactBootstrapCard,
  GeneralReactBootstrapButton,
} from "../../App.jsx";
import { useRef, useState } from "react";
import axios from "axios";

import "./GetWeatherCard.css";

function GetWeatherCard() {
    const searchInputRef = useRef(null);
    const [] = useState()
    const getWeather = () => {
        let userCity  = searchInputRef.current.value;

        let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=3a18af733ab203c7b6019bb1c799f4e0&units=metric`)
    }

  return (
    <section className="getWeatherCard">
      <GeneralReactBootstrapCard
        style={{ width: "50%" }}
        className="text-center mx-auto d-block"
      >
        <GeneralReactBootstrapCard.Body>
          <GeneralReactBootstrapCard.Title>
            <label htmlFor="searchInput">Enter your City Name </label>
            <br/> <br/>
            <input id="searchInput" ref={searchInputRef}/>
          </GeneralReactBootstrapCard.Title>

          <GeneralReactBootstrapButton variant="primary" className="mt-3" onClick={() => {getWeather}}>
            Get Weather
          </GeneralReactBootstrapButton>
        </GeneralReactBootstrapCard.Body>
      </GeneralReactBootstrapCard>
    </section>
  );
}

export default GetWeatherCard;
