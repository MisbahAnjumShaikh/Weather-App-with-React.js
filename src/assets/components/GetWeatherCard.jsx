import GeneralReactBootstrapCard from "./HomePage.jsx"
import GeneralReactBootstrapButton from "./HomePage.jsx"
import "./GetWeatherCard.css"

function GetWeatherCard() {
  return (
    <section className="getWeatherCard">
    <GeneralReactBootstrapCard style={{ width: '18rem' }}>
    <GeneralReactBootstrapCard.Img variant="top" src="holder.js/100px180" />
    <GeneralReactBootstrapCard.Body>
      <GeneralReactBootstrapCard.Title>Card Title</GeneralReactBootstrapCard.Title>
      <GeneralReactBootstrapCard.Text>
      get weather card
      </GeneralReactBootstrapCard.Text>
      <GeneralReactBootstrapButton variant="primary">Go somewhere</GeneralReactBootstrapButton>
    </GeneralReactBootstrapCard.Body>
  </GeneralReactBootstrapCard>

    </section>
  )
}

export default GetWeatherCard
