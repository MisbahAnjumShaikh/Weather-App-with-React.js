import GetWeatherCard from "./GetWeatherCard"
import "./HomePage.css"
import {Card as GeneralReactBootstrapCard} from 'react-bootstrap/Card';
import {Button  as GeneralReactBootstrapButton} from 'react-bootstrap/Button';
const HomePage = () => {
  return (
    <section>
    <label htmlFor="searchInput">Enter your City Name  </label>
    <input id="searchInput" />
    <br/>
    <GetWeatherCard />
    </section>
  )
}

export { HomePage, GeneralReactBootstrapCard,  GeneralReactBootstrapButton}