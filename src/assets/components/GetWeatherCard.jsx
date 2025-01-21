import {
  GeneralReactBootstrapCard,
  GeneralReactBootstrapButton,
} from "../../App.jsx";
import { useRef} from "react";

import "./GetWeatherCard.css";

function GetWeatherCard() {
    const searchInputRef = useRef(null);
    const getWeather = () => {
        // let userCity  = searchInputRef.current.value;

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
