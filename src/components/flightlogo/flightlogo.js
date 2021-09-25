import "./flightlogo.scss";

const FlightLogo = (props) => {
  return (
    <img src={props.imagePath} className={props.size} alt={props.alttext}></img>
  );
};

export default FlightLogo;
