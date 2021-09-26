import React from "react";
import { Card, Button } from "react-bootstrap";
import { DetailLabel } from "../../atoms/detail-label/detail-label";
import FlightLogo from "../../atoms/flightlogo/flightlogo";
import nonStopFlightLogo from "../../../assets/nonstop.png";
import "./flight-info.scss";

export const FlightInfo = React.memo((props) => {
  const { id, flightInfoObj, disableBtn, onClickedhandler } = props;
  const depratBy = flightInfoObj.date + " " + flightInfoObj.departureTime;
  const arrivedBy = flightInfoObj.date + " " + flightInfoObj.arrivalTime;
  const price = "$" + flightInfoObj.price;
  const spanID=id + "_activeCard";

  return (
    <div className="Cart-Container">
      <Card
        bg={disableBtn ? "warning" : ""}
        border={disableBtn ? "danger" : ""}
      >
        <section className="Flight-info">
          <FlightLogo
            imagePath={nonStopFlightLogo}
            alttext="Icon"
            size="Flight-Icon"
          ></FlightLogo>
          <DetailLabel
            mainText="AIRLINE"
            subText={flightInfoObj.name}
          ></DetailLabel>
          <DetailLabel
            mainText="FROM"
            subText={flightInfoObj.origin}
          ></DetailLabel>
          <DetailLabel
            mainText="TO"
            subText={flightInfoObj.destination}
          ></DetailLabel>
          <DetailLabel mainText="DEPART BY" subText={depratBy}></DetailLabel>
          <DetailLabel mainText="ARRIVED AT" subText={arrivedBy}></DetailLabel>
          <DetailLabel mainText="PRICE" subText={price}></DetailLabel>
          <Button
            id={id}
            aria-label="Select Flight"
            variant="primary"
            onClick={onClickedhandler}
            disabled={disableBtn}
            aria-describedby={spanID}
            aria-disabled= {disableBtn ? 'true' : 'false'}
          >
            SELECT
          </Button>
          {disableBtn ? <span hidden={true} id={spanID}>You have selected a flight from {flightInfoObj.origin} to {flightInfoObj.destination} scheduled to depart on {depratBy}.</span> : ''}
        </section>
      </Card>
    </div>
  );
});
