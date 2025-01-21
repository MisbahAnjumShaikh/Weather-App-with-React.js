import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react'
import './App.css'
import GetWeatherCard from "./assets/components/GetWeatherCard"
import {Card as GeneralReactBootstrapCard} from 'react-bootstrap';
import {Button  as GeneralReactBootstrapButton} from 'react-bootstrap';

function App() {
 

  return (
    <Fragment>
    <section className="main">
    <h1 className='text-center welcomeHeading'>Welcome to Weather App</h1>
    <GetWeatherCard />
    </section>
   
    </Fragment>
  )
}

export{ App, GeneralReactBootstrapCard,  GeneralReactBootstrapButton}
