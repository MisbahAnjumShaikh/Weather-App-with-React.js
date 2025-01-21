import { GeneralReactBootstrapCard, GeneralReactBootstrapButton} from "../../App.jsx";
 
 
function HeaderAndFooterExample() {
  return (
    <GeneralReactBootstrapCard className="text-center">
      <GeneralReactBootstrapCard.Header>Featured</GeneralReactBootstrapCard.Header>
      <GeneralReactBootstrapCard.Body>
        <GeneralReactBootstrapCard.Title>Special title treatment</GeneralReactBootstrapCard.Title>
        <GeneralReactBootstrapCard.Text>
          With supporting text below as a natural lead-in to additional content.
        </GeneralReactBootstrapCard.Text>
        <GeneralReactBootstrapButton variant="primary">Go somewhere</GeneralReactBootstrapButton>
      </GeneralReactBootstrapCard.Body>
      <GeneralReactBootstrapCard.Footer className="text-muted">2 days ago</GeneralReactBootstrapCard.Footer>
    </GeneralReactBootstrapCard>
  );
}

export default HeaderAndFooterExample;